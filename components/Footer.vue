<template>
  <footer class="footer" v-if="data">
    <div
      class="cta"
      v-bind:class="{ visible: this.$store.state.footer_cta_visible }"
    >
      <div class="inner">
        <h4 v-if="data.cta.text">{{ data.cta.text }}</h4>
        <nuxt-link
          v-if="data.cta.link"
          class="button--light-green"
          :to="data.cta.link.url"
          >{{ data.cta.link.title }}</nuxt-link
        >
      </div>
    </div>
    <div class="footer-content">
      <div class="inner">
        <div class="logo">
          <a v-if="currentRoute == 'index'" v-scroll-to="'#top'">
            <img
              v-if="data.logoDesktop"
              class="desktop"
              :src="data.logoDesktop.mediaItemUrl"
              alt=""
            />
            <img
              v-if="data.logoMobile"
              class="mobile"
              :src="data.logoMobile.mediaItemUrl"
              alt=""
            />
          </a>
          <nuxt-link v-if="currentRoute != 'index'" to="/">
            <img
              v-if="data.logoDesktop"
              class="desktop"
              :src="data.logoDesktop.mediaItemUrl"
              alt=""
            />
            <img
              v-if="data.logoMobile"
              class="mobile"
              :src="data.logoMobile.mediaItemUrl"
              alt=""
            />
          </nuxt-link>
          <ul class="social-media-links">
            <li v-for="(item, index) in data.socialMediaLinks" :key="index">
              <a :href="item.url" target="_blank" v-html="item.iconSvgCode"></a>
            </li>
          </ul>
        </div>
        <div class="menu-1">
          <template v-for="(menu, index) in data.menu1.linkList">
            <span v-if="menu.title" :key="index">{{ menu.title }}</span>
            <ul :key="`${index}1`">
              <li v-for="(item, index2) in menu.menuItems" :key="index2">
                <nuxt-link
                  class="indented-text-link--medium"
                  :to="item.link.url"
                  >{{ item.link.title }}</nuxt-link
                >
              </li>
            </ul>
          </template>
        </div>
        <div class="menu-2">
          <ul>
            <li v-for="(item, index) in data.menu2.menuItems" :key="index">
              <nuxt-link
                class="indented-text-link--small"
                :to="item.link.url"
                >{{ item.link.title }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="legal">
      <div class="inner">
        <nuxt-link
          v-for="(link, index) in data.legalLinks"
          :key="index"
          :to="link.link.url"
          v-html="link.link.title"
        ></nuxt-link>
        <span>{{ data.copyrightText }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
import { gql } from "nuxt-graphql-request";
import { image, link } from "~/gql/common";

export default {
  data() {
    return {
      data: null,
      currentRoute: null,
    };
  },
  async fetch() {
    const query = gql`
      query MyQuery {
        globalContent {
          FooterFields {
            footerFields {
              cta {
                text
                link {
                  ${link}
                }
              }
              logoDesktop {
                ${image}
              }
              logoMobile {
                ${image}
              }
              socialMediaLinks {
                iconSvgCode
                url
              }
              menu1 {
                linkList {
                  title
                  menuItems {
                    link {
                      ${link}
                    }
                  }
                }
              }
              menu2 {
                menuItems {
                  link {
                    ${link}
                  }
                }
              }
              legalLinks {
                link {
                  ${link}
                }
              }
              copyrightText
            }
          }
        }
      }
    `;
    const data = await this.$graphql.default.request(query);
    this.data = data.globalContent.FooterFields.footerFields;
  },
  mounted() {
    this.currentRoute = this.$route.name;
  },
  methods: {},
  watch: {
    $route(to, from) {
      this.currentRoute = to.name;
    },
  },
};
</script>

<style lang="scss" scoped>
footer.footer {
  position: relative;

  .cta {
    display: none;
    @include gutter(padding-left);
    @include gutter(padding-right);
    @include max-width;
    margin-bottom: 4.2vw;

    @include breakpoint(small) {
      margin-bottom: 30px;
    }

    &.visible {
      display: block;
    }

    .inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: $bright_green;
      border-radius: 18px;
      padding: 2.4vw 4.6vw;

      @include breakpoint(small) {
        flex-direction: column;
        padding: 27px 15px;
      }

      h4 {
        padding-right: 1em;

        @include breakpoint(small) {
          text-align: center;
          padding-right: 0;
          margin-bottom: 0.5em;
        }
      }
    }
  }

  .footer-content {
    background-color: $soft_white;
    @include gutter(padding-left);
    @include gutter(padding-right);
    padding-top: 4.2vw;
    padding-bottom: 13.5vw;

    @include breakpoint(medium) {
      padding-top: 60px;
      padding-bottom: 67px;
    }

    .inner {
      display: flex;
      align-items: flex-start;
      @include max-width;

      @include breakpoint(medium) {
        flex-direction: column;
      }

      .logo {
        flex-grow: 1;
        display: flex;
        flex-direction: column;

        @include breakpoint(medium) {
          width: 100%;
        }

        a {
          cursor: pointer;
          align-self: flex-start;

          @include breakpoint(medium) {
            align-self: unset;
          }

          > img.desktop {
            display: block;
            width: 20vw;
            height: auto;

            @include breakpoint(medium) {
              display: none;
            }
          }

          > img.mobile {
            display: none;
            width: 100%;
            max-width: 374px;
            height: auto;

            @include breakpoint(medium) {
              display: block;
            }
          }
        }

        .social-media-links {
          display: flex;
          margin-top: 60px;

          @include breakpoint(medium) {
            margin-top: 34px;
            margin-bottom: 50px;
          }

          li {
            margin-right: 16px;

            a {
              &:hover {
                :deep(svg) {
                  path {
                    fill: $dark_evergreen;
                  }
                }
              }

              :deep(svg) {
                width: auto;
                height: 27px;

                path {
                  transition: 0.15s fill;
                }
              }
            }
          }
        }
      }

      .menu-1 {
        position: relative;
        padding-left: 24px;
        width: 33%;

        @include breakpoint(medium) {
          padding-left: 0;
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

          @include breakpoint(medium) {
            display: none;
          }
        }

        ul {
          li {
            margin: 0 0 0.25em;

            @include breakpoint(medium) {
              margin: 0 0 0.5em;
            }
          }
        }

        span {
          display: block;
          font-family: "Gronland";
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 20px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: $bright_green;
          margin: 2.5em 0 1em;

          @include breakpoint(medium) {
            font-size: 15px;
          }
        }
      }

      .menu-2 {
        position: relative;
        padding-left: 24px;
        width: 25%;

        @include breakpoint(medium) {
          padding-left: 0;
          width: auto;
          margin-top: 45px;
        }

        &:before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          width: 2px;
          height: 100%;
          background-color: $bright_green;

          @include breakpoint(medium) {
            display: none;
          }
        }

        ul {
          li {
            margin: 0 0 0.5em;

            @include breakpoint(medium) {
              margin: 0 0 0.25em;
            }
          }
        }
      }
    }
  }
  .legal {
    background-color: $dark_evergreen;
    @include gutter(padding-left);
    @include gutter(padding-right);

    .inner {
      @include max-width;
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 15px;
      color: $bright_green;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 17px 0 13px;

      @include breakpoint(medium) {
        font-weight: 400;
        text-transform: none;
        flex-wrap: wrap;
        justify-content: center;
        padding: 30px 0;
      }

      a {
        text-decoration: none;
        color: $bright_green;

        &:hover {
          color: $light_green;
        }
      }

      span {
        margin-left: 2em;

        @include breakpoint(medium) {
          margin-left: 0;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
