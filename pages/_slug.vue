<template>
  <div v-if="page">
    <article class="general-page">
      <header>
        <div class="inner">
          <div class="copy">
            <h1>{{ page.title }}</h1>
          </div>
        </div>
      </header>
      <div class="article-wrapper">
        <div class="wysiwyg">
          <div class="inner" v-if="page.content" v-html="page.content"></div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import meta from "~/plugins/meta.js";
import { gql } from "nuxt-graphql-request";
import { basics, image, featured_image, link } from "~/gql/common";
import FadeImage from "~/components/FadeImage.vue";
import scrollTriggerHub from "~/mixins/ScrollTriggerHub";

const gql_content = `
  id
  ${basics}
  SeoFields {
    seoTitle
    seoDescription
    seoImage {
      ${image}
    }
  }
`;
export default {
  mixins: [scrollTriggerHub],
  components: {
    FadeImage,
  },
  async asyncData({ $graphql, route, $router }) {
    const post_uri = route.params.slug;
    const query = gql`
      query PageQuery ($uri: ID!) {
        page(id: $uri, idType: URI, asPreview: true) {
          ${gql_content}
          isPreview
          preview {
            node {
              ${gql_content}
            }
          }  
        }
      }
    `;
    const variables = { uri: post_uri };
    let { page } = await $graphql.default.request(query, variables);
    if (route.query && route.query.preview && page.preview) {
      page = page.preview.node;
    }
    return { page };
  },
  head() {
    if (this.page && this.page.SeoFields) {
      return {
        title: this.page.SeoFields.seoTitle
          ? this.page.SeoFields.seoTitle
          : this.page.title,
        meta: meta(this.page.SeoFields),
      };
    }
  },
};
</script>
<style lang="scss" scoped>
.general-page {
  header {
    margin: 5vw 0;
  }
  padding: 6vw 7vw;
  margin: 0 6vw;
  @include breakpoint(small) {
    margin: 0;
    border-radius: 0;
    border-left: none;
    border-right: none;

    @include gutter(padding-left);
    @include gutter(padding-right);
  }
}
</style>
