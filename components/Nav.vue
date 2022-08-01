<template>
  <nav class="nav">
    <div class="inner" v-bind:class="{ mobile_menu_open: mobileMenuOpen }">
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
          }"
        />

        <NavItem
          :data="{
            title: 'For Business',
            url: '/for-business',
          }"
        />

        <NavItem
          :data="{
            title: 'For Home',
            url: '/for-home',
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
          }"
        />

        <NavItem
          :data="{
            title: 'About Us',
            url: '/about-us',
            dropdown: [
              { title: 'Who We Are', url: '/who-we-are' },
              { title: 'Careers', url: '/careers' },
              { title: 'Who We Are', url: '/who-we-are' },
              { title: 'Careers', url: '/careers' },
              { title: 'Who We Are', url: '/who-we-are' },
              { title: 'Careers', url: '/careers' },
              { title: 'Who We Are', url: '/who-we-are' },
              { title: 'Careers', url: '/careers' },
            ],
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
  },
  watch: {
    $route(to, from) {
      this.currentRoute = to.name;
    },
  },
};
</script>

<style lang="scss" scoped>
nav.nav {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 20px 32px 0;

  @include breakpoint(mobile_nav_breakpoint) {
    padding: 0;
  }

  .inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: $white;
    border-radius: 18px;
    padding: 14px 10px 14px 35px;

    @include breakpoint(mobile_nav_breakpoint) {
      border-radius: 0;
      padding: 0 15px 0 20px;
      height: 56px;
      align-items: center;
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
        width: 130px;
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
      position: relative;
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
          // height: 50px;
          background-color: $bright_green;
          margin: 0 30px;

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
            padding: 30px 18px 10px;
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
            padding: 0px 18px 30px;

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
