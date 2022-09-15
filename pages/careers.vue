<template>
  <div id="top" v-if="page">
    <div class="careers-section-1">
      <div class="bg-image">
        <img class="desktop" src="/images/careers-section-1-bg.jpg" alt="" />
      </div>
      <div class="inner">
        <div class="copy">
          <h1
            v-if="page.careersSection1.title"
            v-html="page.careersSection1.title"
          ></h1>
          <p
            v-if="page.careersSection1.copy"
            v-html="page.careersSection1.copy"
          ></p>
        </div>

        <ul class="jobs-list">
          <li v-for="(job, index) in page.careersSection1.jobs" :key="index">
            <div class="job-info">
              <div class="job-title">{{ job.title }}</div>
              <div class="job-description">{{ job.copy }}</div>
            </div>
            <Link :classes="'button'" :link="job.link" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import meta from "~/plugins/meta.js";
import { gql } from "nuxt-graphql-request";
import { basics, image, featured_image, link, seo_fields } from "~/gql/common";
import FadeImage from "~/components/FadeImage.vue";
import scrollTriggerHub from "~/mixins/ScrollTriggerHub";
import killWidows from "~/mixins/KillWidows";

const gql_content = `
  ${basics}
  ${seo_fields}
  PageCareersFields {
    careersSection1 {
      title
      copy
      jobs {
        title
        copy
        link {
          ${link}
        }
      }
    }
  }
`;

export default {
  mixins: [scrollTriggerHub, killWidows],
  components: {
    FadeImage,
  },
  async asyncData({ $graphql, route }) {
    const query = gql`
      query MyQuery {
        page(id: "careers", idType: URI, asPreview: true) {
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
    let { page } = await $graphql.default.request(query);
    page = page.PageCareersFields;

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
.careers-section-1 {
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

    .jobs-list {
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid rgba($text_color, 0.5);
        padding-bottom: 28px;
        margin-bottom: 40px;

        @include breakpoint(small) {
          padding-bottom: 14px;
          margin-bottom: 29px;
          border-color: $bright_green;
        }

        .job-info {
          .job-title {
            font-size: 24px;
            margin-bottom: 0.5em;

            @include breakpoint(small) {
              line-height: 100%;
              font-size: 18px;
            }
          }
          .job-description {
            font-size: 16px;
            line-height: 160%;

            @include breakpoint(small) {
              font-size: 15px;
            }
          }
        }

        a {
          margin-left: 30px;
          flex-shrink: 0;

          @include breakpoint(small) {
            width: auto;
          }
        }
      }
    }
  }
}
</style>
