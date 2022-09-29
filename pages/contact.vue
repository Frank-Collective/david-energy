<template>
  <div id="top" v-if="page">
    <div class="careers-section-1">
      <div class="bg-image">
        <img class="desktop" src="/images/careers-section-1-bg.jpg" alt="" />
      </div>
      <div class="inner">
        <div class="copy">
          <h1
            v-if="page.contactSection1.title"
            v-html="page.contactSection1.title"
          ></h1>
          <div v-if="!form_embed" id="form-container" class="form"></div>
          <div v-else class="form" v-html="form_embed"></div>
          <!-- 
          <div class="form">
            <form action="">
              <div class="row">
                <div class="label">Name <span>*</span></div>
                <div class="fields">
                  <input type="text" placeholder="First name" />
                  <input type="text" placeholder="Last name" />
                </div>
              </div>
              <div class="row">
                <div class="label">Email <span>*</span></div>
                <div class="fields">
                  <input type="text" placeholder="Enter email" />
                </div>
              </div>
              <div class="row">
                <div class="label">Phone <span>*</span></div>
                <div class="fields">
                  <input type="text" placeholder="(123) 456-7890" />
                </div>
              </div>
              <div class="row">
                <div class="label">How can we help? <span>*</span></div>
                <div class="description">
                  Please do not include confidential or sensitive information in
                  your message. In the event that we are representing a party
                  with opposing interests to your own, we may have a duty to
                  disclose any information you provide to our client.
                </div>
                <div class="fields">
                  <textarea type="text" placeholder="Enter text here" />
                </div>
              </div>
              <div class="row">
                <button type="submit" class="button">Submit</button>
              </div>
            </form>
          </div>
          -->
        </div>
      </div>
    </div>

    <div class="careers-section-2">
      <div class="inner">
        <div class="item">
          <div class="title">
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.50004 4.50002C9.50004 7.77303 5.69237 11.6183 5.53046 11.7804C5.38978 11.921 5.19902 12 5.00011 12C4.80121 12 4.61045 11.921 4.46977 11.7804C4.30767 11.6182 0.5 7.77303 0.5 4.50002C0.5 3.30654 0.974108 2.16194 1.81802 1.31802C2.66194 0.474108 3.80654 0 5.00002 0C6.1935 0 7.3381 0.474108 8.18201 1.31802C9.02593 2.16194 9.50004 3.30654 9.50004 4.50002ZM5.00002 6.75003C5.44503 6.75003 5.88005 6.61807 6.25006 6.37083C6.62007 6.1236 6.90846 5.7722 7.07876 5.36106C7.24905 4.94992 7.29361 4.49752 7.2068 4.06106C7.11998 3.6246 6.90569 3.22369 6.59102 2.90902C6.27635 2.59435 5.87543 2.38006 5.43897 2.29324C5.00251 2.20643 4.55011 2.25098 4.13898 2.42128C3.72784 2.59158 3.37644 2.87997 3.1292 3.24998C2.88197 3.61999 2.75001 4.05501 2.75001 4.50002C2.75 4.7955 2.80819 5.08809 2.92126 5.36107C3.03433 5.63406 3.20006 5.88211 3.40899 6.09104C3.61793 6.29998 3.86597 6.46571 4.13896 6.57878C4.41195 6.69185 4.70454 6.75004 5.00002 6.75003Z"
                fill="#25444A"
              />
            </svg>
            Location
          </div>
          <div class="info" v-if="page.contactSection2.address">
            <a :href="page.contactSection2.mapLink" target="_blank">{{
              page.contactSection2.address
            }}</a>
          </div>
        </div>
        <div class="item">
          <div class="title">
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.36159 2.75357C5.2054 0.955916 3.33113 0.0738601 3.25181 0.0378579C3.17765 0.00297963 3.09456 -0.00816394 3.01384 0.00594679C0.850091 0.365151 0.524628 1.62523 0.511544 1.6776C0.493743 1.75057 0.496574 1.82706 0.519722 1.89852C3.10052 9.91066 8.46411 11.3958 10.2272 11.8842C10.3629 11.9219 10.4749 11.9522 10.56 11.98C10.657 12.0117 10.7625 12.0056 10.8552 11.9628C10.9092 11.9382 12.1832 11.3377 12.4948 9.37881C12.5086 9.29329 12.4948 9.2056 12.4555 9.12843C12.4277 9.07442 11.7613 7.80534 9.91315 7.35695C9.85046 7.34091 9.7848 7.34034 9.72184 7.35531C9.65888 7.37028 9.6005 7.40032 9.55171 7.44287C8.96866 7.94117 8.16318 8.4722 7.81564 8.52703C5.48588 7.38723 4.18485 5.20009 4.13579 4.78525C4.10717 4.55205 4.64115 3.733 5.25528 3.06696C5.29388 3.02504 5.32328 2.9755 5.34159 2.92153C5.3599 2.86755 5.36671 2.81034 5.36159 2.75357Z"
                fill="#25444A"
              />
            </svg>
            Phone
          </div>
          <div class="info" v-if="page.contactSection2.phone">
            <a :href="`tel:${page.contactSection2.phone}`" target="_blank">{{
              page.contactSection2.phone
            }}</a>
          </div>
        </div>
        <div class="item">
          <div class="title">
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 0H1.5C0.675 0 0.00749999 0.675 0.00749999 1.5L0 10.5C0 11.325 0.675 12 1.5 12H13.5C14.325 12 15 11.325 15 10.5V1.5C15 0.675 14.325 0 13.5 0ZM13.2 3.1875L7.8975 6.5025C7.6575 6.6525 7.3425 6.6525 7.1025 6.5025L1.8 3.1875C1.6125 3.0675 1.5 2.865 1.5 2.6475C1.5 2.145 2.0475 1.845 2.475 2.1075L7.5 5.25L12.525 2.1075C12.9525 1.845 13.5 2.145 13.5 2.6475C13.5 2.865 13.3875 3.0675 13.2 3.1875Z"
                fill="#25444A"
              />
            </svg>
            Email
          </div>
          <div class="info" v-if="page.contactSection2.email">
            <a :href="`mailto:${page.contactSection2.email}`" target="_blank">{{
              page.contactSection2.email
            }}</a>
          </div>
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
  PageContactFields {
    contactSection1 {
      title
      hubspotregion
      hubspotportalid
      hubspotformid
      formType
      genericEmbed
    }
    contactSection2 {
      address
      mapLink
      phone
      email
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
        page(id: "contact", idType: URI, asPreview: true) {
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
    page = page.PageContactFields;

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
  data() {
    return {
      form_embed: null,
    };
  },
  mounted() {
    this.$store.commit("setFooterCtaVisible", false);
    if (
      this.page &&
      this.page.contactSection1.formType == "hubspot" &&
      this.page.contactSection1.hubspotformid
    ) {
      hbspt.forms.create({
        region: this.page.contactSection1.hubspotregion,
        portalId: this.page.contactSection1.hubspotportalid,
        formId: this.page.contactSection1.hubspotformid,
        target: "#form-container",
      });
    } else {
      this.form_embed = this.page.contactSection1.genericEmbed;
    }
  },
  beforeDestroy() {
    this.$store.commit("setFooterCtaVisible", true);
  },
};
</script>

<style lang="scss" scoped>
.careers-section-1 {
  position: relative;
  padding-top: 10.4vw;
  padding-bottom: 5vw;
  @include gutter(padding-left);
  @include gutter(padding-right);

  @include breakpoint(medium) {
    // padding-bottom: 120px;
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
    @include max-width;
    @include breakpoint(small) {
    }

    .copy {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      @include breakpoint(small) {
        text-align: unset;
        align-items: flex-start;
      }

      h1 {
        @include clamp("font-size", 60px, 4.17vw, 80px);
        margin-bottom: 0.75em;

        @include breakpoint(small) {
          margin-bottom: 0.5em;
        }
      }

      .form {
        max-width: 552px;
        width: 100%;

        @include breakpoint(small) {
          max-width: none;
        }

        .row {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 1.25em;
        }

        .label {
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 93%;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 0.5em;

          @include breakpoint(small) {
            font-size: 14px;
          }

          span {
            color: #ff2c2c;
          }
        }

        .description {
          font-size: 14px;
          text-align: left;
          line-height: 150%;
          margin-bottom: 0.5em;

          @include breakpoint(small) {
            font-size: 12px;
          }
        }

        .fields {
          width: 100%;
          display: flex;
          justify-content: space-between;
          gap: 1em;

          @include breakpoint(small) {
            flex-direction: column;
            gap: 10px;
          }
        }

        .button {
          width: 100%;
          cursor: pointer;
          margin-top: -1em;
        }
        input[type="submit"] {
          @include buttonstyles;
        }
        input:not([type="button"]):not([type="submit"]),
        textarea {
          flex-grow: 1;
          font-family: "Gronland";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          color: $text_color;
          border-radius: 6px;
          border: 1px solid $bright_green;
          background-color: $white;
          padding: 0.85em 1em 0.65em;

          @include breakpoint(small) {
            font-size: 15px;
          }
        }
        .hs-error-msgs label,
        .hs-error-msg {
          font-size: 0.9em;
          margin-bottom: 15px;
        }
        textarea {
          @include breakpoint(small) {
            font-size: 18px;
          }
        }
      }
    }
  }
}
.careers-section-2 {
  position: relative;
  display: flex;
  align-items: center;
  background-color: $bright_green;
  height: 166px;

  @include breakpoint(small) {
    height: auto;
    padding: 60px 0;
  }

  .inner {
    display: flex;
    justify-content: center;
    @include gutter(padding-left);
    @include gutter(padding-right);
    @include max-width;
    @include breakpoint(small) {
      flex-direction: column;
    }

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 3vw;

      @include breakpoint(small) {
        margin-bottom: 40px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      .title {
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 93%;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 0.5em;

        svg {
          margin-right: 0.25em;
        }
      }

      .info {
        @include body-copy-small;
        font-size: 24px;
        color: $white;
        text-align: center;

        a {
          color: $white;
          text-decoration: none;

          &:hover {
            color: $sun_glow;
          }
        }
      }
    }
  }
}
</style>
