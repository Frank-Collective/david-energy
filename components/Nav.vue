<template>
  <nav class="nav">
    <div
      class="leadership-modal"
      v-bind:class="{ visible: this.$store.state.team_modal_open }"
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
        <div class="image">
          <img src="/images/team-James.jpeg" alt="" />
        </div>
        <div class="bio">
          <div class="name">James McGinniss</div>
          <div class="title">CEO & Co-Founder</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc
            ultricies ac viverra nulla euismod vel. Quam mi amet, vel vel non
            vitae scelerisque. Quis tristique feugiat feugiat lacus risus est
            enim nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc
            ultricies ac viverra nulla euismod vel. Quam mi amet, vel vel non
            vitae scelerisque. Quis tristique feugiat feugiat lacus risus est
            enim nisi. Donec nunc ultricies ac viverra nulla euismod vel.
          </p>
        </div>
        <div class="history">
          <div class="eyebrow">Education</div>
          <ul class="datas">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
          <div class="eyebrow">Experience</div>
          <ul class="datas">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
          <ul class="social-media-icons">
            <li><a href="#" target="_blank"></a></li>
            <li><a href="#" target="_blank"></a></li>
            <li><a href="#" target="_blank"></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="inner" v-bind:class="{ mobile_menu_open: mobileMenuOpen }">
      <div class="logomark">
        <a v-if="currentRoute == 'index'" v-scroll-to="'#top'">
          <img src="/images/logomark.svg" alt="" />
        </a>
        <nuxt-link v-if="currentRoute != 'index'" to="/">
          <img src="/images/logomark.svg" alt="" />
        </nuxt-link>
      </div>
      <div class="logo">
        <a v-if="currentRoute == 'index'" v-scroll-to="'#top'">
          <img class="desktop" src="/images/logo-desktop.svg" alt="" />
          <img class="mobile" src="/images/logo-mobile.svg" alt="" />
        </a>
        <nuxt-link v-if="currentRoute != 'index'" to="/">
          <img class="desktop" src="/images/logo-desktop.svg" alt="" />
          <img class="mobile" src="/images/logo-mobile.svg" alt="" />
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
        <NavItem
          :data="{
            title: 'Why David Energy',
            url: '/why-david-energy',
            dropdown: [
              { title: 'Charge The Future', url: '/charge-the-future' },
              { title: 'FAQ', url: '/faq' },
            ],
            callback: closeMenu,
          }"
        />

        <NavItem
          :data="{
            title: 'For Business',
            url: '/for-business',
            callback: closeMenu,
          }"
        />

        <NavItem
          :data="{
            title: 'For Home',
            url: '/for-home',
            callback: closeMenu,
          }"
        />

        <NavItem
          :data="{
            title: 'Partners',
            url: '/partners',
            dropdown: [
              { title: 'For Brokers', url: '/for-brokers' },
              { title: 'For Developers', url: '/for-developers' },
            ],
            callback: closeMenu,
          }"
        />

        <NavItem
          :data="{
            title: 'About Us',
            url: '/about-us',
            dropdown: [
              { title: 'Who We Are', url: '/who-we-are' },
              { title: 'Careers', url: '/careers' },
            ],
            callback: closeMenu,
          }"
        />

        <li class="divider"></li>
        <li class="bright-green-button">
          <nuxt-link class="button" to="#">Get Started</nuxt-link>
        </li>

        <NavItem
          class="login-button-desktop"
          :data="{
            title: 'Log In',
            url: '/login',
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
export default {
  data() {
    return {
      currentRoute: null,
      mobileMenuOpen: false,
    };
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
    padding: 65px 75px;
    max-width: 1575px;

    .close-x-btn {
      position: absolute;
      top: 40px;
      right: 40px;
      cursor: pointer;
    }

    .image {
      width: 31.1%;
      flex-shrink: 0;
      border-radius: 20px;
      overflow: hidden;

      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }

    .bio {
      flex-grow: 1;
      padding: 0 6vw 0 2vw;

      .name {
        color: $dark_evergreen;
        margin-bottom: 0.75em;
      }

      .title {
        color: $slate_gray;
        margin-bottom: 3em;
      }

      p {
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
            display: block;
            width: 34px;
            height: 34px;
            border-radius: 100%;
            background-color: $slate_gray;
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
    padding: 14px 10px 14px 32px;

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
        width: 180px;
        height: auto;

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
