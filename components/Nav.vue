<template>
  <nav class="nav" v-if="data">
    <div
      class="leadership-modal"
      v-bind:class="{ visible: this.$store.state.team_modal_open }"
      v-if="this.$store.state.team_modal_open"
    >
      <div class="bg" v-on:click="closeTeamModal()"></div>
      <div class="inner">
        <div class="close-x-btn" v-on:click="closeTeamModal()">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M26 1L1 26" stroke="#AEB9BF" />
            <path d="M1 1L26 26" stroke="#AEB9BF" />
          </svg>
        </div>
        <div class="close-x-btn-mobile" v-on:click="closeTeamModal()">
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.5 0.5L1 8L8.5 15.5" stroke="black" />
          </svg>
          Close
        </div>
        <div class="image">
          <FadeImage
            v-if="this.$store.state.selected_team_member.image"
            :srcset="this.$store.state.selected_team_member.image.srcSet"
            :sizes="this.$store.state.selected_team_member.image.sizes"
            :src="this.$store.state.selected_team_member.image.mediaItemUrl"
            :alt="this.$store.state.selected_team_member.image.altText"
            :width="
              this.$store.state.selected_team_member.image.mediaDetails.width
            "
            :height="
              this.$store.state.selected_team_member.image.mediaDetails.height
            "
          />
        </div>
        <div class="bio">
          <div class="name">
            {{ this.$store.state.selected_team_member.firstName }}
            {{ this.$store.state.selected_team_member.lastName }}
          </div>
          <div class="title">
            {{ this.$store.state.selected_team_member.position }}
          </div>
          <div v-html="this.$store.state.selected_team_member.copy"></div>
        </div>
        <div class="history">
          <template
            v-for="(data, index) in this.$store.state.selected_team_member
              .additionalData"
          >
            <div class="eyebrow" :key="index">{{ data.title }}</div>
            <ul class="datas" :key="`${index}1`">
              <li v-for="(data_point, index2) in data.dataPoint" :key="index2">
                {{ data_point.copy }}
              </li>
            </ul>
          </template>
          <ul class="social-media-icons">
            <li
              v-for="(link, index) in this.$store.state.selected_team_member
                .socialMediaLinks"
              :key="index"
            >
              <a :href="link.url" target="_blank">
                <img v-if="link.icon" :src="link.icon.mediaItemUrl" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="inner" v-bind:class="{ mobile_menu_open: mobileMenuOpen }">
      <div class="logomark" v-if="data.logomark">
        <a v-if="currentRoute == 'index'" v-scroll-to="'#top'">
          <img :src="data.logomark.mediaItemUrl" alt="" />
        </a>
        <nuxt-link v-if="currentRoute != 'index'" to="/">
          <img :src="data.logomark.mediaItemUrl" alt="" />
        </nuxt-link>
      </div>
      <div class="logo">
        <a v-if="currentRoute == 'index'" v-scroll-to="'#top'">
          <img
            class="desktop"
            v-if="data.desktopLogo"
            :src="data.desktopLogo.mediaItemUrl"
            alt=""
          />
          <img
            class="mobile"
            v-if="data.mobileLogo"
            :src="data.mobileLogo.mediaItemUrl"
            alt=""
          />
        </a>
        <nuxt-link v-if="currentRoute != 'index'" to="/">
          <img
            class="desktop"
            v-if="data.desktopLogo"
            :src="data.desktopLogo.mediaItemUrl"
            alt=""
          />
          <img
            class="mobile"
            v-if="data.mobileLogo"
            :src="data.mobileLogo.mediaItemUrl"
            alt=""
          />
        </nuxt-link>
      </div>
      <div class="burger" v-on:click="toggleMenu">
        <img
          v-bind:class="{ hide: mobileMenuOpen }"
          src="/images/icon-burger.svg"
          alt=""
        />
        <img
          v-bind:class="{ hide: !mobileMenuOpen }"
          src="/images/icon-burger-x.svg"
          alt=""
        />
      </div>
      <ul class="routes">
        <template>
          <NavItem
            v-for="(nav_item, index) in data.navItems"
            :key="index"
            :data="
              nav_item.hasDropdown == true
                ? {
                    title: nav_item.title,
                    url: null,
                    dropdown: nav_item.dropdownItems,
                    callback: closeMenu,
                  }
                : {
                    title: nav_item.title,
                    url: nav_item.url,
                    callback: closeMenu,
                  }
            "
            :class="{ fakerollout: dropdownsHidden }"
          />
        </template>

        <li class="divider"></li>

        <li class="bright-green-button">
          <nuxt-link class="button" to="#">Get Started</nuxt-link>
        </li>

        <NavItem
          class="login-button-desktop"
          :data="{
            title: 'Log In',
            url: '#',
            callback: closeMenu,
          }"
        />

        <li class="login-button-mobile">
          <nuxt-link class="button--white" to="#">Log In</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { gql } from "nuxt-graphql-request";
import { image, link } from "~/gql/common";

export default {
  data() {
    return {
      data: null,
      currentRoute: null,
      mobileMenuOpen: false,
      dropdownsHidden: false,
    };
  },
  async fetch() {
    const query = gql`
      query MyQuery {
        globalContent {
          NavFields {
            navFields {
              desktopLogo {
                ${image}
              }
              mobileLogo {
                ${image}
              }
              logomark {
                ${image}
              }
              navItems {
                title
                url
                hasDropdown
                dropdownItems {
                  title
                  url
                }
              }
            }
          }
        }
      }
    `;
    const data = await this.$graphql.default.request(query);
    this.data = data.globalContent.NavFields.navFields;
  },
  mounted() {
    this.currentRoute = this.$route.name;
  },
  methods: {
    toggleMenu: function () {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    hideDropdown: function () {
      this.dropdownsHidden = true;
      setTimeout(() => {
        this.dropdownsHidden = false;
      }, 500);
    },
    closeMenu: function () {
      this.mobileMenuOpen = false;
      // this.hideDropdown();
    },
    closeTeamModal: function () {
      this.$store.commit("setTeamModalOpen", false);
    },
  },
  watch: {
    $route(to, from) {
      this.currentRoute = to.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.leadership-modal {
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  @include gutter(padding-left);
  @include gutter(padding-right);
  @include max-width;
  @include breakpoint(small) {
    padding: 0;
  }

  &.visible {
    display: flex;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .inner {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: $white;
    border-radius: 20px;
    background: $white;
    box-shadow: 0px 0px 8px $sun_glow;
    padding: 3.8vw 4vw 2.5vw;
    max-width: 1575px;
    @include max-width;
    max-height: calc(100vh - 50px);
    overflow-y: auto;

    @include breakpoint(medium) {
      flex-direction: column;
      align-items: center;
      padding-bottom: 60px;
      @include gutter(padding-left);
      @include gutter(padding-right);
    }

    @include breakpoint(small) {
      max-height: 100vh;
      border-radius: 0;
      box-shadow: none;
      padding-top: 65px;
    }

    .close-x-btn {
      position: absolute;
      top: 40px;
      right: 40px;
      cursor: pointer;

      @include breakpoint(medium) {
        top: 20px;
        right: 20px;
      }

      @include breakpoint(small) {
        display: none;
      }
    }

    .close-x-btn-mobile {
      display: none;
      position: fixed;
      top: 0;
      width: 100%;
      height: 46px;
      background-color: $white;
      z-index: 1;
      @include gutter(padding-left);
      @include gutter(padding-right);
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.045em;
      text-transform: uppercase;

      color: $black;

      @include breakpoint(small) {
        display: flex;
        align-items: center;
      }

      svg {
        position: relative;
        top: -2px;
        width: 8px;
        height: 15px;
        margin-right: 1.25em;
      }
    }

    .image {
      position: relative;
      width: 31.1%;
      height: 29.2vw;
      flex-shrink: 0;
      border-radius: 20px;
      overflow: hidden;

      @include breakpoint(medium) {
        width: 100%;
        max-width: 374px;
        height: auto;
        margin-bottom: 40px;
      }

      img {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;

        @include breakpoint(medium) {
          position: relative;
          height: auto;
          object-fit: unset;
        }
      }
    }

    .bio {
      flex-grow: 1;
      padding: 0 6vw 0 2vw;

      @include breakpoint(medium) {
        margin-bottom: 30px;
        padding: 0;
      }

      .name {
        color: $dark_evergreen;
        margin-bottom: 0.5em;
      }

      .title {
        color: $slate_gray;
        margin-bottom: 2.5em;

        @include breakpoint(medium) {
          @include body-copy-small;
        }
      }

      :deep(p) {
        color: $dark_evergreen;
        font-weight: 400;
        font-size: 24px;
        line-height: 130%;
        letter-spacing: -0.015em;
        margin-bottom: 1em;
      }
    }

    .history {
      width: 25%;
      flex-shrink: 0;

      @include breakpoint(medium) {
        width: 100%;
      }

      .eyebrow {
        color: $slate_gray;
        margin-bottom: 1.5em;
      }

      ul.datas {
        margin-bottom: 1em;

        li {
          position: relative;
          font-family: "Gronland";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          margin-bottom: 1em;
          margin-left: 2em;

          &:before {
            content: "";
            position: absolute;
            display: inline-block;
            width: 10px;
            height: 10px;
            transform: translate(-2em, 50%);
            background-color: $dark_evergreen;
            border-radius: 100%;
          }
        }
      }

      ul.social-media-icons {
        display: flex;
        margin-top: 4vw;

        li {
          margin-right: 14px;

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 100%;
            background-color: $slate_gray;

            img {
              display: block;
              width: 70%;
              height: auto;
            }
          }
        }
      }
    }
  }
}
nav.nav {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 20px 32px 0;

  @include breakpoint(mobile_nav_breakpoint) {
    padding: 0;
  }

  > .inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: $white;
    border-radius: 18px;
    padding: 10px 10px 10px 32px;
    @include max-width;

    @include breakpoint(mobile_nav_breakpoint) {
      border-radius: 0;
      padding: 0 15px 0 13px;
      height: 56px;
      align-items: center;
      justify-content: center;
    }

    &.mobile_menu_open {
      @include breakpoint(mobile_nav_breakpoint) {
        .routes {
          display: block;
        }
      }
    }

    &:before {
      content: "";
      position: absolute;
      z-index: 1;
      display: none;
      top: 0;
      left: 0;
      width: 100%;
      height: 56px;
      background-color: $white;

      @include breakpoint(mobile_nav_breakpoint) {
        display: block;
      }
    }

    .logomark {
      display: none;
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
      z-index: 1;
      cursor: pointer;

      @include breakpoint(mobile_nav_breakpoint) {
        display: block;
      }

      a {
        display: block;
        width: 20px;
        height: 26px;

        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
    }

    .logo {
      cursor: pointer;
      align-self: flex-start;

      @include breakpoint(mobile_nav_breakpoint) {
        align-self: unset;
        position: relative;
        z-index: 1;
      }

      img.desktop {
        display: block;
        width: 162px;
        height: auto;
        margin-top: 3px;

        @include breakpoint(mobile_nav_breakpoint) {
          display: none;
        }
      }

      img.mobile {
        display: none;
        width: 200px;
        height: auto;

        @include breakpoint(mobile_nav_breakpoint) {
          display: block;
        }
      }
    }

    .burger {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      z-index: 1;
      display: none;
      align-items: center;
      cursor: pointer;

      @include breakpoint(mobile_nav_breakpoint) {
        display: flex;
      }

      img.hide {
        display: none;
      }
    }

    .routes {
      display: flex;

      @include breakpoint(mobile_nav_breakpoint) {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 0px;
        left: 0;
        padding: 56px 0 0;
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        background-color: $white;
      }

      > li {
        &.divider {
          width: 2px;
          height: 52px;
          background-color: $bright_green;
          margin: 0 1.55vw;

          @include breakpoint(mobile_nav_breakpoint) {
            display: none;
          }
        }

        &.bright-green-button {
          display: flex;
          align-items: center;
          align-self: flex-start;
          padding: 3px 0;
          margin-right: 0.4em;

          @include breakpoint(mobile_nav_breakpoint) {
            padding: 30px 13px 10px;
            align-self: unset;
            border-top: 2px solid rgba($slate_gray, 0.4);
            margin: 0;
          }

          a {
            font-family: "Gronland";
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            letter-spacing: 0.06em;
            background-color: $bright_green;
            color: $white;
            border: none;
            border-radius: 6px;
            padding: 16px 34px 15px;
            margin: 0;
            white-space: nowrap;
            text-transform: uppercase;
            text-decoration: none;
            transition: 0.15s;
            width: auto;
            height: auto;

            &:hover {
              color: $light_green;
              background-color: $dark_evergreen;
            }

            @include breakpoint(mobile_nav_breakpoint) {
              width: 100%;
              height: 50px;
            }
          }
        }

        &.login-button-desktop {
          display: block;
          @include breakpoint(mobile_nav_breakpoint) {
            display: none;
          }
        }

        &.login-button-mobile {
          display: none;
          align-items: center;

          @include breakpoint(mobile_nav_breakpoint) {
            display: flex;
            padding: 0px 13px 30px;

            a {
              width: 100%;
              height: 50px;
            }
          }
        }
      }
    }
  }
}
</style>
