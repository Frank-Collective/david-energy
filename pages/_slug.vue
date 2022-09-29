<template>
  <div v-if="page" class="general-page-wrapper">
    <div class="bg-image">
      <img class="desktop" src="/images/careers-section-1-bg.jpg" alt="" />
    </div>
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
.general-page-wrapper {
  position: relative;

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;

    @include breakpoint(small) {
      width: 110%;
    }

    img.desktop {
      display: block;
      width: 100%;
      height: auto;

      @include breakpoint(small) {
        // display: none;
      }
    }

    img.mobile {
      display: none;
      width: 100%;
      height: auto;

      @include breakpoint(small) {
        display: block;
      }
    }
  }
  .general-page {
    position: relative;
    padding: 6vw 7vw;
    @include gutter(padding-left);
    @include gutter(padding-right);
    margin: 0 6vw;

    @include breakpoint(small) {
      padding-top: 50px;
      padding-bottom: 50px;
    }

    header {
      margin: 5vw 0;
      .inner {
        @include max-width;
      }
    }

    @include breakpoint(small) {
      margin: 0;
      border-radius: 0;
      border-left: none;
      border-right: none;

      @include gutter(padding-left);
      @include gutter(padding-right);
    }
    .article-wrapper {
      .inner {
        @include max-width;
      }
    }
  }
}
</style>
