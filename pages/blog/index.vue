<template>
  <div id="top" v-if="page">
    <div class="blog-section-1">
      <div class="bg-image">
        <img class="desktop" src="/images/careers-section-1-bg.jpg" alt="" />
      </div>
      <div class="inner">
        <div class="copy">
          <h1
            v-if="page.blogSection1.title"
            v-html="page.blogSection1.title"
          ></h1>
          <p v-if="page.blogSection1.copy" v-html="page.blogSection1.copy"></p>
        </div>
      </div>
    </div>
    <BlogFeed
      :posts_per_page="30"
      :paginate="true"
      :is_page="true"
      :search_term="search_term"
      :search_year="search_year"
    />
  </div>
</template>

<script>
import meta from "~/plugins/meta.js";
import { gql } from "nuxt-graphql-request";
import { basics, image, featured_image, link, seo_fields } from "~/gql/common";
import FadeImage from "~/components/FadeImage.vue";
import scrollTriggerHub from "~/mixins/ScrollTriggerHub";

const gql_content = `
  ${basics}
  ${seo_fields}
  PageBlogFields {
    blogSection1 {
      title
      copy
    }
  }
`;

export default {
  mixins: [scrollTriggerHub],
  data() {
    return {
      page_data: null,
      search_term: null,
      search_year: null,
    };
  },
  async asyncData({ $graphql, route }) {
    const query = gql`
      query PageQuery {
        page(id: "blog", idType: URI, asPreview: true) {
          ${gql_content}
          isPreview
          isFrontPage
          preview {
            node {
              ${gql_content}
            }
          }
        }
      }
    `;

    let { page } = await $graphql.default.request(query);
    page = page.PageBlogFields;

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
.blog-section-1 {
  position: relative;
  padding-top: 19vw;
  padding-bottom: 5vw;
  @include gutter(padding-left);
  @include gutter(padding-right);

  @include breakpoint(medium) {
    padding-bottom: 50px;
  }

  @include breakpoint(small) {
    padding-top: 100px;
    padding-bottom: 30px;
  }

  .bg-image {
    position: fixed;
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
        display: none;
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

  .inner {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    max-width: 1274px;
    @include max-width;
    @include breakpoint(small) {
    }

    .copy {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 3vw;

      @include breakpoint(small) {
        text-align: unset;
        align-items: flex-start;
      }

      h1 {
        @include clamp("font-size", 60px, 4.17vw, 80px);
        margin-bottom: 0.45em;

        @include breakpoint(small) {
          margin-bottom: 0.25em;
        }
      }

      p {
        @include body-copy-small;
        margin-bottom: 1.5em;
        max-width: 790px;

        @include breakpoint(small) {
          @include body-copy;
        }
      }
    }
  }
}
</style>
