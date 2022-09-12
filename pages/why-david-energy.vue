<template>
  <div id="top" v-if="page">
    <div class="why-section-1" v-if="page.whySection1.title">
      <div class="bg-image">
        <img class="desktop" src="/images/why-section-1-bg.jpg" alt="" />
        <img class="mobile" src="/images/why-section-1-bg-mobile.jpg" alt="" />
      </div>
      <div class="inner">
        <h1 v-if="page.whySection1.title" v-html="page.whySection1.title"></h1>
        <div class="content">
          <div class="copy">
            <h4 v-if="page.whySection1.copy">
              {{ page.whySection1.copy }}
            </h4>
          </div>

          <div class="image">
            <FadeImage
              v-if="page.whySection1.image"
              :srcset="page.whySection1.image.srcSet"
              :sizes="page.whySection1.image.sizes"
              :src="page.whySection1.image.mediaItemUrl"
              :alt="page.whySection1.image.altText"
              :width="page.whySection1.image.mediaDetails.width"
              :height="page.whySection1.image.mediaDetails.height"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="why-section-2" v-if="page.whySection2.title">
      <div class="bg-image">
        <img class="desktop" src="/images/why-section-2-bg.jpg" alt="" />
        <img class="mobile" src="/images/why-section-2-bg-mobile.jpg" alt="" />
      </div>
      <div class="inner">
        <h3 v-if="page.whySection2.title" v-html="page.whySection2.title"></h3>
        <div
          class="copy"
          v-if="page.whySection2.copy"
          v-html="page.whySection2.copy"
        ></div>
      </div>
    </div>
    <div class="why-section-3" v-if="page.whySection3.title">
      <div class="bg-image">
        <img class="desktop" src="/images/why-section-4-bg.jpg" alt="" />
        <img class="mobile" src="/images/why-section-3-bg-mobile.jpg" alt="" />
      </div>
      <div class="bg-image2">
        <img class="mobile" src="/images/why-section-3-bg2-mobile.jpg" alt="" />
      </div>
      <div class="inner">
        <h1 v-if="page.whySection3.title" v-html="page.whySection3.title"></h1>
        <div
          class="copy"
          v-if="page.whySection3.copy"
          v-html="page.whySection3.copy"
        ></div>
        <div class="ctas">
          <ExpandingCTA
            v-for="(cta, index) in page.whySection3.expandingCtas"
            :key="index"
            :data="{
              title: cta.title,
              icons: [cta.icon.mediaItemUrl, cta.iconActive.mediaItemUrl],
              copy: cta.copy,
              link: cta.link,
            }"
          />
        </div>
      </div>
    </div>
    <div class="why-section-4" v-if="page.whySection4.tab1.tabTitle">
      <div class="bg-image">
        <img class="mobile" src="/images/why-section-4-bg-mobile.jpg" alt="" />
      </div>
      <ToggleGraphs :data="page.whySection4" />
    </div>
    <div class="why-section-5" id="faqs" v-if="page.whySection5.title">
      <div class="bg-image">
        <img class="desktop" src="/images/why-section-5-bg.jpg" alt="" />
        <img class="mobile" src="/images/why-section-5-bg-mobile.jpg" alt="" />
      </div>
      <div class="inner">
        <div class="copy">
          <h2
            v-if="page.whySection5.title"
            v-html="page.whySection5.title"
          ></h2>
          <nuxt-link
            class="button"
            v-if="page.whySection5.link"
            :to="page.whySection5.link.url"
            >{{ page.whySection5.link.title }}</nuxt-link
          >
        </div>
        <div class="faqs">
          <FAQItem
            v-for="(faq, index) in page.whySection5.faqs"
            :key="index"
            :data="{
              question: faq.question,
              answer: faq.answer,
            }"
          />
        </div>
        <div class="cta">
          <nuxt-link
            class="button"
            v-if="page.whySection5.link"
            :to="page.whySection5.link.url"
            >{{ page.whySection5.link.title }}</nuxt-link
          >
        </div>
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

const gql_content = `
  ${basics}
  ${seo_fields}
   PageWhyFields {
    whySection1 {
      title
      copy
      image {
        ${image}
      }
    }
    whySection2 {
      title
      copy
    }
    whySection3 {
      title
      copy
      expandingCtas {
        title
        copy
        icon {
          ${image}
        }
        iconActive {
          ${image}
        }
        link {
          ${link}
        }
      }
    }
    whySection4 {
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
    whySection5 {
      title
      link {
        ${link}
      }
      faqs {
        question
        answer
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
        page(id: "why-david-energy", idType: URI, asPreview: true) {
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
    page = page.PageWhyFields;
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
.why-section-1 {
  position: relative;
  padding-top: 11vw;
  padding-bottom: 10vw;

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  @include breakpoint(small) {
    padding-top: 85px;
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
    @include max-width;

    h1 {
      @include h1-medium;
      @include gutter(padding-left);
      @include gutter(padding-right);

      @include breakpoint(small) {
        letter-spacing: -0.06em;
      }

      br {
        @include breakpoint(small) {
          display: none;
        }
      }
    }

    .content {
      display: flex;
      justify-content: space-between;
      margin-top: 4vw;

      @include breakpoint(small) {
        flex-direction: column;
        justify-content: flex-start;
      }

      .copy {
        width: 42%;
        flex-shrink: 0;
        @include gutter(padding-left);

        @include breakpoint(small) {
          width: auto;
          @include gutter(padding-right);
          order: 2;
        }
      }

      .image {
        position: relative;
        margin-top: -13vw;
        width: 58%;
        flex-shrink: 0;
        padding-bottom: 44%;

        @include breakpoint(small) {
          width: 100%;
          margin-top: -9%;
          padding-bottom: 100%;
        }

        img {
          position: absolute;
          display: block;
          top: 0;
          right: 0;
          width: 112%;
          height: auto;

          @include breakpoint(small) {
            width: 140%;
            right: -29%;
          }
        }
      }
    }
  }
}
.why-section-2 {
  position: relative;
  padding-bottom: 10vw;
  @include gutter(padding-left);
  @include gutter(padding-right);

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  @include breakpoint(small) {
  }

  .bg-image {
    position: absolute;
    top: 30%;
    right: 0;
    width: 80%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      top: -23%;
      width: 94%;
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
    display: flex;
    justify-content: space-between;
    padding: 0 11vw;
    @include max-width;

    @include breakpoint(small) {
      padding: 0;
      flex-direction: column;
    }

    h3 {
      @include breakpoint(small) {
        @include h2;
        margin-bottom: 0.8em;
      }
    }

    .copy {
      position: relative;
      width: 57%;
      flex-shrink: 0;
      @include gutter(padding-left);
      padding-left: 32px;

      @include breakpoint(small) {
        width: auto;
      }

      &:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        width: 2px;
        height: 100%;
        background-color: $bright_green;
      }

      :deep(p) {
        margin-bottom: 1.5em;

        &:last-of-type {
          margin-bottom: 0;
        }

        @include breakpoint(small) {
          font-size: 18px;
        }
      }
    }
  }
}
.why-section-3 {
  position: relative;
  padding-bottom: 10vw;
  @include gutter(padding-left);
  @include gutter(padding-right);

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  .bg-image {
    left: 0;
    top: 21vw;
  }

  .bg-image,
  .bg-image2 {
    position: absolute;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      top: -6%;
      left: 0;
      width: 94%;
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
    @include breakpoint(small) {
      top: auto;
      bottom: -11%;
      left: auto;
      right: 0;
      width: 80%;
    }
  }

  .inner {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
    @include max-width;

    @include breakpoint(small) {
      padding: 0;
    }

    h1 {
      margin-bottom: 1em;

      @include breakpoint(small) {
        margin-bottom: 0.5em;
      }
    }

    .copy {
      position: relative;
      width: 83%;
      flex-shrink: 0;
      padding-left: 15vw;

      @include breakpoint(small) {
        width: auto;
        padding: 0;
      }

      :deep(p) {
        @include h4;
        margin-bottom: 1.5em;

        @include breakpoint(small) {
          @include body-copy-small;
        }
      }
    }

    .ctas {
      display: flex;
      align-items: flex-start;
      padding-left: 15vw;
      margin-top: 1vw;

      @include breakpoint(small) {
        flex-direction: column;
        padding: 0;
      }

      :deep(.expanding-cta) {
        width: calc(50% - 10px);
        max-width: 560px;
        margin-right: 20px;

        @include breakpoint(small) {
          width: 100%;
          max-width: none;
          margin-bottom: 10px;
        }
      }
    }
  }
}
.why-section-4 {
  position: relative;
  padding-bottom: 8vw;

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  .bg-image {
    position: absolute;
    top: -80%;
    left: 0;
    width: 43%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      top: auto;
      bottom: -15%;
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

  :deep(.toggle-btn:not(.selected)) {
    color: $white !important;
  }
}
.why-section-5 {
  position: relative;
  padding-bottom: 10vw;
  @include gutter(padding-left);
  @include gutter(padding-right);

  @include breakpoint(medium) {
    padding-bottom: 100px;
  }

  @include breakpoint(small) {
  }

  .bg-image {
    position: absolute;
    top: -110%;
    left: 0;
    width: 60%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      top: auto;
      left: auto;
      bottom: -50%;
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

  .inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    @include max-width;

    @include breakpoint(small) {
      flex-direction: column;
    }

    .copy {
      position: relative;
      width: 57%;
      max-width: 612px;
      flex-shrink: 0;

      @include breakpoint(small) {
        width: auto;
      }

      h2 {
        font-family: "Gronland";
        font-style: normal;
        font-weight: 400;
        font-size: 80px;
        @include clamp("font-size", 60px, 4.17vw, 80px);
        line-height: 105%;
        letter-spacing: -0.015em;
        margin-bottom: 0.5em;

        @include breakpoint(small) {
        }
      }

      p {
        margin-bottom: 1.5em;
      }

      a {
        @include breakpoint(small) {
          display: none;
        }
      }
    }

    .faqs {
      width: 43%;
      flex-shrink: 0;

      @include breakpoint(small) {
        width: 100%;
      }
    }

    .cta {
      display: none;
      margin-top: 1em;

      @include breakpoint(small) {
        display: block;
      }
    }
  }
}
</style>
