<template>
  <div id="top" v-if="page">
    <div class="landing-section-1">
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
          title: page.PageLandingFields.landingPageSection1.title,
          ctas: page.PageLandingFields.landingPageSection1.audienceCtas,
        }"
      />
    </div>

    <div class="landing-section-2">
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
        <h1 v-if="page.PageLandingFields.landingPageSection2.title">
          {{ page.PageLandingFields.landingPageSection2.title }}
        </h1>
        <div class="content">
          <div class="image">
            <FadeImage
              v-if="page.PageLandingFields.landingPageSection2.image"
              :srcset="page.PageLandingFields.landingPageSection2.image.srcSet"
              :sizes="page.PageLandingFields.landingPageSection2.image.sizes"
              :src="
                page.PageLandingFields.landingPageSection2.image.mediaItemUrl
              "
              :alt="page.PageLandingFields.landingPageSection2.image.altText"
              :width="
                page.PageLandingFields.landingPageSection2.image.mediaDetails
                  .width
              "
              :height="
                page.PageLandingFields.landingPageSection2.image.mediaDetails
                  .height
              "
            />
          </div>
          <div class="copy">
            <div
              v-if="page.PageLandingFields.landingPageSection2.copy"
              v-html="page.PageLandingFields.landingPageSection2.copy"
            ></div>
            <nuxt-link
              class="button"
              v-if="page.PageLandingFields.landingPageSection2.link.url"
              :to="page.PageLandingFields.landingPageSection2.link.url"
              >{{
                page.PageLandingFields.landingPageSection2.link.title
              }}</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>

    <div class="landing-section-3">
      <Competitors :data="page.PageLandingFields.landingPageSection3" />
    </div>

    <div class="landing-section-4">
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
      <DevicesWeWorkWith :data="page.PageLandingFields.landingPageSection4" />
    </div>

    <div class="landing-section-5">
      <div class="bg-image-1">
        <img
          class="mobile"
          src="/images/landing-section-5-bg1-mobile.jpg"
          alt=""
        />
      </div>
      <BrandsWeWorkWith :data="page.PageLandingFields.landingPageSection5" />
    </div>

    <div class="landing-section-6">
      <div class="bg-image-1">
        <img class="desktop" src="/images/landing-section-6-bg1.jpg" alt="" />
        <img
          class="mobile"
          src="/images/landing-section-6-bg1-mobile.jpg"
          alt=""
        />
      </div>
      <Testimonials :data="page.PageLandingFields.landingPageSection6" />
    </div>
  </div>
</template>

<script>
import meta from "~/plugins/meta.js";
import { gql } from "nuxt-graphql-request";
import { basics, image, featured_image, link, seo_fields } from "~/gql/common";
import FadeImage from "~/components/FadeImage.vue";

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
        image {
          ${image}
        }
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
        image {
          ${image}
        }
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
    console.log(page);
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
  padding-top: 11vw;
  margin-bottom: -12vw;

  @include breakpoint(medium) {
    margin-bottom: 130px;
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

    h1 {
      width: 80%;
      margin-bottom: 1em;

      @include breakpoint(small) {
        @include h2;
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
  padding-bottom: 10.4vw;

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
    top: -40%;
    left: 0;
    width: 50%;
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
