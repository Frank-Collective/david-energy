<template>
  <div id="top" v-if="page">
    <div class="about-us-section-1">
      <div class="bg-image">
        <img class="desktop" src="/images/about-us-section-1-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/about-us-section-1-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <div class="copy">
          <div class="eyebrow" v-if="page.aboutSection1.eyebrow">
            {{ page.aboutSection1.eyebrow }}
          </div>
          <h1
            v-if="page.aboutSection1.title"
            v-html="page.aboutSection1.title"
          ></h1>
          <p class="hide-small" v-if="page.aboutSection1.copy">
            {{ page.aboutSection1.copy }}
          </p>
        </div>

        <div class="image">
          <FadeImage
            v-if="page.aboutSection1.image"
            :srcset="page.aboutSection1.image.srcSet"
            :sizes="page.aboutSection1.image.sizes"
            :src="page.aboutSection1.image.mediaItemUrl"
            :alt="page.aboutSection1.image.altText"
            :width="page.aboutSection1.image.mediaDetails.width"
            :height="page.aboutSection1.image.mediaDetails.height"
          />
        </div>

        <div class="copy show-small">
          <p v-if="page.aboutSection1.copy">{{ page.aboutSection1.copy }}</p>
        </div>
      </div>
    </div>

    <div class="about-us-section-2">
      <div class="bg-image">
        <img class="desktop" src="/images/about-us-section-1-bg.jpg" alt="" />
      </div>
      <div class="inner">
        <ExpandingDropdown
          v-for="(dropdown, index) in page.aboutSection2.expandingDropdowns"
          :key="index"
          :data="{
            title: dropdown.title,
            summary: dropdown.summary,
            flex_content: dropdown.flexContent,
          }"
        />
      </div>
    </div>

    <div class="about-us-section-3">
      <div class="bg-image">
        <img class="desktop" src="/images/about-us-section-3-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/about-us-section-3-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <div class="copy">
          <h3
            v-if="page.aboutSection3.title"
            v-html="page.aboutSection3.title"
          ></h3>
          <p v-if="page.aboutSection3.copy">
            {{ page.aboutSection3.copy }}
          </p>
        </div>
        <LeadershipTeam :data="page.aboutSection3" />
      </div>
    </div>

    <div class="about-us-section-4">
      <div class="bg-image">
        <img class="desktop" src="/images/about-us-section-4-bg.jpg" alt="" />
      </div>
      <div class="inner">
        <div class="image">
          <img src="/images/about-us-section-4-image.png" alt="" />
        </div>
        <div class="copy">
          <h3
            v-if="page.aboutSection4.title"
            v-html="page.aboutSection4.title"
          ></h3>
          <p
            v-if="page.aboutSection4.copy"
            v-html="page.aboutSection4.copy"
          ></p>
          <Link :classes="'button'" :link="page.aboutSection4.link" />
        </div>
      </div>
    </div>

    <div class="about-us-section-5">
      <div class="bg-image">
        <img class="desktop" src="/images/about-us-section-5-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/about-us-section-5-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <div class="copy">
          <h3
            v-if="page.aboutSection5.title"
            v-html="page.aboutSection5.title"
          ></h3>
          <p
            v-if="page.aboutSection5.copy"
            v-html="page.aboutSection5.copy"
          ></p>
          <Link :classes="'button'" :link="page.aboutSection5.link" />
        </div>
        <div class="articles">
          <article
            v-for="(article, index) in page.aboutSection5.featuredPosts"
            :key="index"
          >
            <div class="eyebrow">Post Type</div>
            <div class="title-excerpt">
              <h4>{{ article.title }}</h4>
              <div class="excerpt">
                <div v-html="article.excerpt"></div>
                <Link :link="{ title: 'Read More', url: '/' + article.slug }" />
              </div>
            </div>
          </article>
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
  PageAboutUsFields {
    aboutSection1 {
      eyebrow
      title
      copy
      image {
        ${image}
      }
    }
    aboutSection2 {
      expandingDropdowns {
        title
        summary
        flexContent {
          ... on Page_Pageaboutusfields_AboutSection2_expandingDropdowns_FlexContent_Paragraph {
            fieldGroupName
            copy
          }
          ... on Page_Pageaboutusfields_AboutSection2_expandingDropdowns_FlexContent_ListItemText {
            fieldGroupName
            title
            copy
          }
          ... on Page_Pageaboutusfields_AboutSection2_expandingDropdowns_FlexContent_ListItemIcon {
            fieldGroupName
            icon {
              mediaItemUrl
            }
            title
            copy
          }
        }
      }
    }
    aboutSection3 {
      title
      copy
      teamMembers {
        image {
          ${image}
        }
        firstName
        lastName
        position
        copy
        additionalData {
          title
          dataPoint {
            copy
          }
        }
        socialMediaLinks {
          icon {
            ${image}
          }
          url
        }
      }
    }
    aboutSection4 {
      title
      copy
      link {
        ${link}
      }
      image {
        ${image}
      }
    }
    aboutSection5 {
      title
      copy
      link {
        ${link}
      }
      featuredPosts {
        __typename
        ... on Post {
          title
          excerpt
          slug
        }
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
        page(id: "about-us", idType: URI, asPreview: true) {
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
    page = page.PageAboutUsFields;

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
.about-us-section-1 {
  position: relative;
  padding-top: 13vw;
  padding-bottom: 5vw;

  @include breakpoint(medium) {
    padding-bottom: 120px;
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
    justify-content: space-between;
    @include gutter(padding-left);
    @include max-width;
    @include breakpoint(small) {
      padding: 0;
      flex-direction: column;
      justify-content: flex-start;
    }

    .copy {
      width: 63%;
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

        @include breakpoint(small) {
          @include h2;
        }
      }

      p {
        @include body-copy-small;
        margin-bottom: 1.5em;
        padding-right: 23vw;

        &:last-of-type {
          margin-bottom: 0;
        }

        @include breakpoint(small) {
          padding: 0;
          @include body-copy;
        }
      }
    }

    .image {
      position: relative;
      flex-grow: 1;
      padding-bottom: 45.2%;
      margin-top: 3vw;

      @include breakpoint(small) {
        width: 100%;
        padding-bottom: 0;
        margin-top: -28vw;
      }

      img {
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        width: 170%;
        height: auto;

        @include breakpoint(small) {
          position: relative;
          width: 165%;
          right: 27%;
        }
      }
    }
  }
}

.about-us-section-2 {
  padding-bottom: 10vw;

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  @include breakpoint(small) {
    padding-bottom: 80px;
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
    flex-direction: column;
    @include gutter(padding-left);
    @include gutter(padding-right);
    @include max-width;
    @include breakpoint(small) {
    }
  }
}

.about-us-section-3 {
  position: relative;
  padding-bottom: 12vw;

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  @include breakpoint(small) {
    padding-bottom: 80px;
  }

  .bg-image {
    position: absolute;
    top: -20%;
    left: 0;
    width: 29%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      width: 47%;
      top: -37%;
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
    align-items: center;
    justify-content: space-between;
    @include max-width;
    @include breakpoint(small) {
      flex-direction: column;
    }

    .copy {
      width: 30%;
      flex-shrink: 0;
      padding-right: 5vw;
      @include gutter(padding-left);

      @include breakpoint(small) {
        width: 100%;
        @include gutter(padding-right);
        margin-bottom: 1em;
      }

      h3 {
        margin-bottom: 0.35em;

        @include breakpoint(small) {
          @include h2;
        }
      }

      p {
        @include body-copy-small;
      }
    }
  }
}

.about-us-section-4 {
  position: relative;
  padding-bottom: 10vw;

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  @include breakpoint(small) {
    padding-bottom: 80px;
  }

  .bg-image {
    position: absolute;
    top: -120%;
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
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include gutter(padding-right);
    @include max-width;
    @include breakpoint(small) {
      flex-direction: column;
      padding: 0;
    }

    .image {
      width: 54%;
      flex-shrink: 0;

      @include breakpoint(small) {
        order: 2;
        width: 100%;
      }

      img {
        display: block;
        width: 100%;
        height: auto;

        @include breakpoint(small) {
          width: 112%;
        }
      }
    }

    .copy {
      padding-left: 8vw;

      @include breakpoint(small) {
        @include gutter(padding-left);
        @include gutter(padding-right);
        margin-bottom: 1.5em;
      }

      h3 {
        margin-bottom: 0.35em;

        @include breakpoint(small) {
          @include h2;
        }
      }

      p {
        @include body-copy-small;
        margin-bottom: 1em;
        width: 90%;

        @include breakpoint(small) {
          width: 100%;
          @include body-copy;
          margin-bottom: 0.75em;
        }
      }
    }
  }
}

.about-us-section-5 {
  position: relative;
  padding-bottom: 10vw;

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  @include breakpoint(small) {
    padding-bottom: 80px;
  }

  .bg-image {
    position: absolute;
    top: -41%;
    left: 0;
    width: 35%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      top: -55%;
      width: 90%;
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
    justify-content: space-between;
    @include gutter(padding-left);
    @include gutter(padding-right);
    @include max-width;
    @include breakpoint(small) {
      flex-direction: column;
    }

    .copy {
      @include breakpoint(small) {
        margin-bottom: 1.5em;
      }

      h3 {
        margin-bottom: 0.35em;

        @include breakpoint(small) {
          @include h2;
          margin-bottom: 0.1em;
        }
      }

      p {
        @include body-copy-small;
        margin-bottom: 1em;
        width: 90%;

        @include breakpoint(small) {
          width: 100%;
          @include body-copy;
        }
      }
    }

    .articles {
      display: flex;
      flex-direction: column;
      width: 50%;
      flex-shrink: 0;

      @include breakpoint(small) {
        width: 100%;
      }

      article {
        border-top: 2px solid $bright_green;
        padding-top: 1vw;
        padding-bottom: 3vw;
        color: $dark_evergreen;

        @include breakpoint(small) {
          border-width: 1px;
          padding-bottom: 25px;
        }

        .eyebrow {
          font-family: "Gronland";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1em;

          @include breakpoint(small) {
            font-size: 14px;
          }
        }

        .title-excerpt {
          display: flex;

          h4 {
            width: 50%;
            flex-shrink: 0;
            padding-right: 2vw;

            @include breakpoint(small) {
              font-size: 24px;
            }
          }

          .excerpt {
            :deep(p) {
              font-family: "Gronland";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 150%;
              margin-bottom: 1em;

              @include breakpoint(small) {
                font-size: 15px;
              }
            }

            a {
              font-family: "Gronland";
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 111%;
              display: flex;
              align-items: center;
              text-align: center;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              text-decoration: none;
              color: $dark_evergreen;

              @include breakpoint(small) {
                font-size: 14px;
              }

              &:hover {
                &:after {
                  left: 10px;
                }
              }

              &:after {
                content: "";
                position: relative;
                top: -2px;
                display: inline-block;
                width: 10px;
                height: 8px;
                background-image: url("/images/icon-read-more-arrow.svg");
                left: 0.35em;
                transition: 0.15s left;
                pointer-events: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
