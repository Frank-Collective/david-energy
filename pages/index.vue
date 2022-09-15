<template>
  <div id="top" v-if="page">
    <div class="landing-section-1" v-if="page.landingPageSection1.title">
      <div class="bg-image">
        <img class="desktop" src="/images/landing-section-1-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/landing-section-1-bg-mobile.jpg"
          alt=""
        />
      </div>
      <AudienceCTA
        :data="{
          title: page.landingPageSection1.title,
          ctas: page.landingPageSection1.audienceCtas,
        }"
      />
    </div>

    <div class="landing-section-2" v-if="page.landingPageSection2.title">
      <div class="bg-image-1">
        <img class="desktop" src="/images/landing-section-2-bg1.jpg" alt="" />
        <img
          class="mobile"
          src="/images/landing-section-2-bg1-mobile.jpg"
          alt=""
        />
      </div>
      <div class="bg-image-2">
        <img class="desktop" src="/images/landing-section-2-bg2.jpg" alt="" />
        <img
          class="mobile"
          src="/images/landing-section-2-bg2-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <h2
          v-if="page.landingPageSection2.title"
          v-html="page.landingPageSection2.title"
        ></h2>
        <div class="content">
          <div class="image">
            <FadeImage
              v-if="page.landingPageSection2.image"
              :srcset="page.landingPageSection2.image.srcSet"
              :sizes="page.landingPageSection2.image.sizes"
              :src="page.landingPageSection2.image.mediaItemUrl"
              :alt="page.landingPageSection2.image.altText"
              :width="page.landingPageSection2.image.mediaDetails.width"
              :height="page.landingPageSection2.image.mediaDetails.height"
            />
          </div>
          <div class="copy">
            <div
              v-if="page.landingPageSection2.copy"
              v-html="page.landingPageSection2.copy"
            ></div>
            <Link :classes="'button'" :link="page.landingPageSection2.link" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="landing-section-3"
      v-if="page.landingPageSection3.tab1.tabTitle"
    >
      <Competitors :data="page.landingPageSection3" />
    </div>

    <div class="landing-section-4" v-if="page.landingPageSection4.title">
      <div class="bg-image-1">
        <img class="desktop" src="/images/landing-section-4-bg1.jpg" alt="" />
        <img
          class="mobile"
          src="/images/landing-section-4-bg1-mobile.jpg"
          alt=""
        />
      </div>
      <div class="bg-image-2">
        <img src="/images/landing-section-4-bg2.jpg" alt="" />
      </div>
      <DevicesWeWorkWith :data="page.landingPageSection4" />
    </div>

    <div class="landing-section-5" v-if="page.landingPageSection5.title">
      <div class="bg-image-1">
        <img
          class="mobile"
          src="/images/landing-section-5-bg1-mobile.jpg"
          alt=""
        />
      </div>
      <BrandsWeWorkWith :data="page.landingPageSection5" />
    </div>

    <div class="landing-section-6" v-if="page.landingPageSection6.testimonials">
      <div class="bg-image-1">
        <img class="desktop" src="/images/landing-section-6-bg1.jpg" alt="" />
        <img
          class="mobile"
          src="/images/landing-section-6-bg1-mobile.jpg"
          alt=""
        />
      </div>
      <Testimonials :data="page.landingPageSection6" />
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
  PageLandingFields {
    landingPageSection1 {
      title
      audienceCtas {
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
    landingPageSection2 {
      title
      copy
      link {
        ${link}
      }
      image {
        ${image}
      }
    }
    landingPageSection3 {
      tab1 {
        tabTitle
        title
        copy
        links {
          link {
            ${link}
          }
        }
        svgImageCode
        mobileSvgImageCode
      }
      tab2 {
        tabTitle
        title
        copy
        links {
          link {
            ${link}
          }
        }
        svgImageCode
        mobileSvgImageCode
      }
    }
    landingPageSection4 {
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
    landingPageSection5 {
      title
      logos {
        logo {
          ${image}
        }
      }
    }
    landingPageSection6 {
      testimonials {
        quote
        author
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
        page(id: "landing", idType: URI, asPreview: true) {
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
    page = page.PageLandingFields;
    // console.log(page);
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
.landing-section-1 {
  position: relative;
  padding-top: 10.4vw;
  margin-bottom: -5em;

  @include breakpoint(large) {
    margin-bottom: 0px;
  }

  @include breakpoint(medium) {
    margin-bottom: 100px;
  }

  @include breakpoint(small) {
    padding-top: 75px;
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
}
.landing-section-2 {
  position: relative;
  padding-bottom: 10vw;

  @include breakpoint(medium) {
    margin-bottom: 50px;
  }

  .bg-image-1 {
    position: absolute;
    top: -60%;
    left: 0;
    width: 67%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      top: -40%;
      width: 100%;
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

  .bg-image-2 {
    position: absolute;
    bottom: -21%;
    right: 0;
    width: 32%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      bottom: -70%;
      right: 0%;
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

  .inner {
    position: relative;
    @include gutter(padding-left);
    @include gutter(padding-right);
    @include max-width;

    h2 {
      width: 80%;
      margin-bottom: 0.2em;

      @include breakpoint(small) {
        width: auto;
      }
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include breakpoint(small) {
        flex-direction: column;
        justify-content: flex-start;
      }

      .image {
        width: 56%;

        @include breakpoint(small) {
          width: auto;
          margin-bottom: 50px;
        }

        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }

      .copy {
        width: 40%;

        @include breakpoint(small) {
          width: auto;
        }

        :deep(p) {
          @include h4;
          margin-bottom: 1.5em;

          &:last-of-type {
            margin-bottom: 0.75em;
          }

          @include breakpoint(small) {
            @include body-copy-small;
          }
        }
      }
    }
  }
}
.landing-section-3 {
  position: relative;
  padding-bottom: 7vw;

  @include breakpoint(small) {
    margin-bottom: 40px;
  }
}
.landing-section-4 {
  position: relative;
  padding-bottom: 10vw;

  @include breakpoint(small) {
    margin-bottom: 40px;
  }

  .bg-image-1 {
    position: absolute;
    top: -34%;
    left: 0;
    width: 46%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      top: -23%;
      left: 0;
      width: 85%;
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

  .bg-image-2 {
    position: absolute;
    bottom: -5%;
    right: 0;
    width: 54%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      bottom: 10%;
      width: 112%;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
.landing-section-5 {
  position: relative;
  padding-bottom: 12vw;

  @include breakpoint(small) {
    padding-bottom: 80px;
  }

  .bg-image-1 {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    pointer-events: none;

    @include breakpoint(small) {
      top: 7%;
      left: 0%;
      width: 60%;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }

    img.mobile {
      display: none;

      @include breakpoint(small) {
        display: block;
      }
    }
  }
}
.landing-section-6 {
  position: relative;
  padding-bottom: 12vw;
  @include gutter(padding-left);
  @include gutter(padding-right);
  @include breakpoint(small) {
    padding-bottom: 140px;
  }

  .bg-image-1 {
    position: absolute;
    bottom: -52%;
    right: 0;
    width: 50%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      bottom: -80%;
      right: 0%;
      width: 90%;
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
</style>
