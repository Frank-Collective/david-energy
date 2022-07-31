<template>
  <nav class="nav">
    <div class="inner">
      <div class="logo">
        <a v-if="currentRoute == 'index'" v-scroll-to="'#top'"
          ><img src="/images/logo-desktop.svg" alt=""
        /></a>
        <nuxt-link v-if="currentRoute != 'index'" to="/"
          ><img src="/images/logo-desktop.svg" alt=""
        /></nuxt-link>
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
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: null,
    };
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
nav.nav {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 20px 32px 0;

  .inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: $white;
    border-radius: 18px;
    padding: 14px 35px;

    .logo {
      cursor: pointer;
      align-self: flex-start;

      img {
        display: block;
        width: 130px;
        height: auto;
      }
    }

    .routes {
      display: flex;

      > li {
        &.divider {
          width: 2px;
          // height: 50px;
          background-color: $bright_green;
          margin: 0 30px;
        }

        &.bright-green-button {
          display: flex;
          align-items: center;
          align-self: flex-start;
          padding: 3px 0;

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
          }
        }
      }
    }
  }
}
</style>
