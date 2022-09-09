<template>
  <div id="top">
    <div class="for-brokers-section-1">
      <div class="bg-image">
        <img
          class="desktop"
          src="/images/for-brokers-section-1-bg.jpg"
          alt=""
        />
        <img
          class="mobile"
          src="/images/for-brokers-section-1-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <div class="image">
          <FadeImage
            v-if="page.forBrokersSection1.image"
            :srcset="page.forBrokersSection1.image.srcSet"
            :sizes="page.forBrokersSection1.image.sizes"
            :src="page.forBrokersSection1.image.mediaItemUrl"
            :alt="page.forBrokersSection1.image.altText"
            :width="page.forBrokersSection1.image.mediaDetails.width"
            :height="page.forBrokersSection1.image.mediaDetails.height"
          />
        </div>

        <div class="copy">
          <div class="eyebrow" v-if="page.forBrokersSection1.eyebrow">
            {{ page.forBrokersSection1.eyebrow }}
          </div>
          <h1
            v-if="page.forBrokersSection1.title"
            v-html="page.forBrokersSection1.title"
          ></h1>
          <p class="hide-small" v-if="page.forBrokersSection1.copy">
            {{ page.forBrokersSection1.copy }}
          </p>
          <nuxt-link
            class="button hide-small"
            v-if="page.forBrokersSection1.link"
            :to="page.forBrokersSection1.link.url"
            >{{ page.forBrokersSection1.link.title }}</nuxt-link
          >
        </div>

        <div class="copy show-small">
          <p v-if="page.forBrokersSection1.copy">
            {{ page.forBrokersSection1.copy }}
          </p>
          <nuxt-link
            class="button"
            v-if="page.forBrokersSection1.link"
            :to="page.forBrokersSection1.link.url"
            >{{ page.forBrokersSection1.link.title }}</nuxt-link
          >
        </div>
      </div>
    </div>

    <div class="for-brokers-section-2">
      <div class="bg-image">
        <img
          class="mobile"
          src="/images/for-brokers-section-2-bg-mobile.jpg"
          alt=""
        />
      </div>

      <div class="inner">
        <h1
          v-if="page.forBrokersSection2.title"
          v-html="page.forBrokersSection2.title"
        ></h1>

        <div class="info-cards">
          <InfoCard
            v-for="(card, index) in page.forBrokersSection2.infoCards"
            :key="index"
            :data="{
              title: card.title,
              icons: [card.icon.mediaItemUrl, card.iconActive.mediaItemUrl],
              copy: card.copy,
            }"
          />
        </div>
      </div>
    </div>

    <div class="for-brokers-section-3">
      <div class="bg-image">
        <img
          class="desktop"
          src="/images/for-brokers-section-3-bg.jpg"
          alt=""
        />
        <img
          class="mobile"
          src="/images/for-brokers-section-3-bg-mobile.jpg"
          alt=""
        />
      </div>
      <CaseStudies :data="page.forBrokersSection3" />
    </div>

    <div class="for-brokers-section-4">
      <div class="bg-image">
        <img
          src="/images/for-brokers-section-4-bg-mobile.jpg"
          alt=""
          class="mobile"
        />
      </div>
      <PlatformFeatures :data="page.forBrokersSection4" />
    </div>

    <div class="for-brokers-section-5">
      <BrandsWeWorkWith :data="page.forBrokersSection5" />
    </div>

    <div class="for-brokers-section-6">
      <div class="bg-image">
        <img
          class="desktop"
          src="/images/for-brokers-section-6-bg.jpg"
          alt=""
        />
        <img
          class="mobile"
          src="/images/for-brokers-section-6-bg-mobile.jpg"
          alt=""
        />
      </div>

      <DevicesWeWorkWith :data="page.forBrokersSection6" />
    </div>

    <div class="for-brokers-section-7">
      <div class="bg-image">
        <img
          class="desktop"
          src="/images/for-brokers-section-7-bg.jpg"
          alt=""
        />
        <img
          class="mobile"
          src="/images/for-brokers-section-7-bg-mobile.jpg"
          alt=""
        />
      </div>
      <CTAWithGraph :data="page.forBrokersSection7" />
    </div>
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
  PageForBrokersFields {
    forBrokersSection1 {
      eyebrow
      title
      copy
      link {
        ${link}
      }
      image {
        ${image}
      }
    }
    forBrokersSection2 {
      title
      infoCards {
        title
        copy
        icon {
          ${image}
        }
        iconActive {
          ${image}
        }
      }
    }
    forBrokersSection3 {
      caseStudies {
        column1 {
          title
          copy
        }
        column2 {
          title
          copy
        }
        column3 {
          title
          percentage
          copy
        }
      }
    }
    forBrokersSection4 {
      copy
      link {
        ${link}
      }
      infoCards {
        title
        copy
        image {
          ${image}
        }
      }
    }
    forBrokersSection5 {
      title
      logos {
        logo {
          ${image}
        }
      }
    }
    forBrokersSection6 {
      title
      copy
      devices {
        title
        logos {
          logo {
            ${image}
          }
        }
      }
      cta {
        title
        link {
          ${link}
        }
      }
    }
    forBrokersSection7 {
      title
      copy
      links {
        link {
          ${link}
        }
      }
      image {
        ${image}
      }
    }
  }
`;
export default {
  mixins: [scrollTriggerHub],
  components: {
    FadeImage,
  },
  async asyncData({ $graphql, route }) {
    const query = gql`
      query MyQuery {
        page(id: "for-brokers", idType: URI, asPreview: true) {
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
    page = page.PageForBrokersFields;

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
.for-brokers-section-1 {
  position: relative;
  padding-top: 13vw;
  padding-bottom: 6vw;

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  @include breakpoint(small) {
    padding-top: 100px;
    padding-bottom: 70px;
  }

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;

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
    justify-content: space-between;
    @include gutter(padding-right);

    @include breakpoint(small) {
      padding: 0;
      flex-direction: column;
      justify-content: flex-start;
    }

    .image {
      position: relative;
      width: 46%;
      margin-top: -4vw;

      @include breakpoint(small) {
        width: 100%;
        order: 2;
        margin-top: -6vw;
        margin-bottom: 40px;
      }

      img {
        position: relative;
        display: block;
        width: 100%;
        height: auto;

        @include breakpoint(small) {
          left: 0%;
          width: 111%;
        }
      }
    }

    .copy {
      width: 48%;
      flex-shrink: 0;

      @include breakpoint(small) {
        width: auto;
        @include gutter(padding-left);
        @include gutter(padding-right);
      }

      .eyebrow {
        margin-bottom: 2em;

        @include breakpoint(small) {
          margin-bottom: 1.5em;
        }
      }

      h1 {
        margin-bottom: 0.35em;
      }

      p {
        @include body-copy-small;
        margin-bottom: 1.5em;
        padding-right: 6vw;

        @include breakpoint(small) {
          @include body-copy;
          margin-bottom: 1em;
          padding-right: 0;
        }
      }
    }

    .copy.show-small {
      @include breakpoint(small) {
        order: 3;
      }
    }
  }
}

.for-brokers-section-2 {
  position: relative;
  @include gutter(padding-left);
  @include gutter(padding-right);
  padding-bottom: 12vw;

  @include breakpoint(small) {
    padding-bottom: 80px;
  }

  .bg-image {
    position: absolute;
    top: -76vw;
    right: 0;
    width: 100%;
    pointer-events: none;
    mix-blend-mode: darken;

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
    padding: 0 8vw;

    @include breakpoint(small) {
      padding: 0;
    }

    h1 {
      text-align: right;
      margin-bottom: 0.5em;

      @include breakpoint(small) {
        text-align: left;
        @include h2;
        margin-bottom: 0.25em;
      }
    }

    .info-cards {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      @include breakpoint(small) {
        flex-direction: column;
      }

      :deep(.info-card) {
        width: calc(33.333333% - 20px);
        min-height: 29.5vw;
      }
    }
  }
}

.for-brokers-section-3 {
  position: relative;
  padding-bottom: 10vw;

  @include breakpoint(small) {
    padding-bottom: 80px;
  }

  .bg-image {
    position: absolute;
    top: 0;
    transform: translateY(-29%);
    right: 0;
    width: 80%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      top: 10%;
      right: auto;
      left: 0;
      width: 100%;
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
}

.for-brokers-section-4 {
  position: relative;
  padding-bottom: 10vw;

  @include breakpoint(small) {
    padding-bottom: 80px;
  }

  .bg-image {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      top: -22%;
      right: 0;
      width: 100%;
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
}

.for-brokers-section-5 {
  position: relative;
  padding-bottom: 12vw;

  @include breakpoint(small) {
    padding-bottom: 80px;
  }
}

.for-brokers-section-6 {
  position: relative;
  padding-bottom: 7vw;

  @include breakpoint(small) {
    margin-bottom: 40px;
  }

  .bg-image {
    position: absolute;
    top: 0%;
    left: 0;
    width: 80%;
    pointer-events: none;
    transform: translateY(-21%);
    mix-blend-mode: darken;

    @include breakpoint(small) {
      width: 100%;
      top: -6%;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }

    img.desktop {
      @include breakpoint(small) {
        display: none;
      }
    }

    img.mobile {
      display: none;

      @include breakpoint(small) {
        display: block;
      }
    }
  }
}

.for-brokers-section-7 {
  position: relative;
  padding-bottom: 8vw;

  @include breakpoint(small) {
    margin-bottom: 40px;
  }

  .bg-image {
    position: absolute;
    bottom: -100%;
    right: 0;
    width: 80%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      width: 100%;
      right: auto;
      left: 0;
      bottom: -60%;
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
}
</style>
