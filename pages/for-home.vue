<template>
  <div id="top" v-if="page">
    <div class="for-home-section-1">
      <div class="bg-image">
        <img class="desktop" src="/images/for-home-section-1-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/for-home-section-1-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <div class="copy">
          <div class="eyebrow" v-if="page.forHomeSection1.eyebrow">
            {{ page.forHomeSection1.eyebrow }}
          </div>
          <h1
            v-if="page.forHomeSection1.title"
            v-html="page.forHomeSection1.title"
          ></h1>
          <p class="hide-small" v-if="page.forHomeSection1.copy">
            {{ page.forHomeSection1.copy }}
          </p>
          <nuxt-link
            class="button hide-small"
            v-if="page.forHomeSection1.link"
            :to="page.forHomeSection1.link.url"
            >{{ page.forHomeSection1.link.title }}</nuxt-link
          >
        </div>

        <div class="image">
          <FadeImage
            v-if="page.forHomeSection1.image"
            :srcset="page.forHomeSection1.image.srcSet"
            :sizes="page.forHomeSection1.image.sizes"
            :src="page.forHomeSection1.image.mediaItemUrl"
            :alt="page.forHomeSection1.image.altText"
            :width="page.forHomeSection1.image.mediaDetails.width"
            :height="page.forHomeSection1.image.mediaDetails.height"
          />
        </div>

        <div class="copy show-small">
          <p v-if="page.forHomeSection1.copy">
            {{ page.forHomeSection1.copy }}
          </p>
          <nuxt-link
            class="button"
            v-if="page.forHomeSection1.link"
            :to="page.forHomeSection1.link.url"
            >{{ page.forHomeSection1.link.title }}</nuxt-link
          >
        </div>
      </div>
    </div>

    <div class="for-home-section-2">
      <div class="bg-image">
        <img
          class="mobile"
          src="/images/for-home-section-2-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <h1
          v-if="page.forHomeSection2.title"
          v-html="page.forHomeSection2.title"
        ></h1>

        <div class="info-cards">
          <InfoCard
            v-for="(card, index) in page.forHomeSection2.infoCards"
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

    <div class="for-home-section-3">
      <div class="bg-image">
        <img class="desktop" src="/images/for-home-section-3-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/for-home-section-3-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="bg-image bg-image2">
        <img
          src="/images/for-home-section-3-bg2-mobile.jpg"
          alt=""
          class="mobile"
        />
      </div>
      <PlatformFeatures :data="page.forHomeSection3" />
    </div>

    <div class="for-home-section-4">
      <div class="bg-image">
        <img class="desktop" src="/images/for-home-section-4-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/for-home-section-4-bg-mobile.jpg"
          alt=""
        />
      </div>

      <DevicesWeWorkWith :data="page.forHomeSection4" />
    </div>

    <div class="for-home-section-5">
      <div class="bg-image">
        <img class="desktop" src="/images/for-home-section-5-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/for-home-section-5-bg-mobile.jpg"
          alt=""
        />
      </div>
      <CTAWithGraph :data="page.forHomeSection5" />
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
  PageForHomeFields {
    forHomeSection1 {
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
    forHomeSection2 {
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
    forHomeSection3 {
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
    forHomeSection4 {
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
    forHomeSection5 {
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
        page(id: "for-home", idType: URI, asPreview: true) {
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
    page = page.PageForHomeFields;

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
.for-home-section-1 {
  position: relative;
  padding-top: 13vw;
  padding-bottom: 14vw;

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
    @include gutter(padding-left);
    @include max-width;

    @include breakpoint(small) {
      padding: 0;
      flex-direction: column;
      justify-content: flex-start;
    }

    .copy {
      width: 43%;
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

    .image {
      position: relative;
      flex-grow: 1;
      padding-bottom: 40.5%;

      @include breakpoint(small) {
        width: 100%;
        padding-bottom: 0;
      }

      img {
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        width: 120%;
        height: auto;

        @include breakpoint(small) {
          position: relative;
          right: 17%;
          width: 152%;
        }
      }
    }
  }
}
.for-home-section-2 {
  position: relative;
  @include gutter(padding-left);
  @include gutter(padding-right);
  padding-bottom: 12vw;

  @include breakpoint(small) {
    padding-bottom: 80px;
  }

  .bg-image {
    position: absolute;
    top: -112vw;
    right: 0;
    width: 80%;
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
    display: flex;
    flex-direction: column;
    padding: 0 8vw;
    @include max-width;

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
.for-home-section-3 {
  position: relative;
  padding-bottom: 9vw;

  @include breakpoint(small) {
  }

  .bg-image {
    position: absolute;
    top: -17%;
    right: 0;
    width: 70%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      right: auto;
      left: 0;
      top: -9%;
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

  .bg-image2 {
    top: 25%;
    left: auto;
    right: 0;
    width: 100%;
  }
}
.for-home-section-4 {
  position: relative;
  padding-bottom: 10vw;

  @include breakpoint(small) {
    margin-bottom: 40px;
  }

  .bg-image {
    position: absolute;
    top: -70%;
    left: 0;
    width: 80%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      top: -92vw;
      left: 0;
      width: 120%;
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
.for-home-section-5 {
  position: relative;
  padding-bottom: 8vw;

  @include breakpoint(small) {
    margin-bottom: 40px;
  }

  .bg-image {
    position: absolute;
    top: -50%;
    right: 0;
    width: 50%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      top: auto;
      right: auto;
      bottom: -57%;
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
</style>
