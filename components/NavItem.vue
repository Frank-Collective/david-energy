<template>
  <li
    class="nav-item"
    v-if="data"
    v-bind:class="[{ expanded: expanded }]"
    v-on:mouseover="openMenu"
    v-on:mouseout="closeMenu"
  >
    <nuxt-link :to="data.url" v-bind:class="{ green_hover: !data.dropdown }">
      {{ data.title }}
      <img
        class="desktop"
        v-if="data.dropdown"
        src="/images/icon-dropdown-arrow.svg"
        alt=""
      />
      <img
        class="mobile"
        v-if="data.dropdown"
        src="/images/icon-dropdown-arrow-mobile.svg"
        alt=""
      />
    </nuxt-link>
    <transition
      v-if="data.dropdown"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <ul class="dropdown" v-show="expanded">
        <li v-for="(item, index) in data.dropdown" :key="index">
          <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </transition>
    <transition
      v-if="data.dropdown"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <ul class="dropdown-dummy" v-show="expanded">
        <li v-for="(item, index) in data.dropdown" :key="index">
          <nuxt-link :to="item.url">&nbsp;</nuxt-link>
        </li>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  props: { data: Object },
  data() {
    return {
      expanded: false,
    };
  },
  mounted() {},
  methods: {
    openMenu: function () {
      this.expanded = true;
    },
    closeMenu: function () {
      this.expanded = false;
    },
    beforeEnter: function (el) {
      el.style.height = "0";
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    afterEnter: function (el) {
      el.style.height = "auto";
    },
    beforeLeave: function (el) {
      const height = getComputedStyle(el).height;
      el.style.height = height;
      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(el).height;
    },
    leave: function (el) {
      el.style.height = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-item {
  @include breakpoint(mobile_nav_breakpoint) {
    padding: 0 18px 0 13px;
    border-top: 2px solid rgba($slate_gray, 0.4);
  }

  &:hover {
    > a {
      border-bottom: 2px solid $bright_green;

      @include breakpoint(mobile_nav_breakpoint) {
        border: none;
      }

      img {
        transform: rotate(180deg);
      }
    }

    > a.green_hover {
      color: $bright_green;
    }
  }

  &.expanded {
    .dropdown,
    .dropdown-dummy {
      padding: 12px 0 0;
      height: auto;

      @include breakpoint(mobile_nav_breakpoint) {
        padding: 5px 0 0;
      }
    }

    > a {
      @include breakpoint(mobile_nav_breakpoint) {
        color: $bright_green;
      }
    }
  }

  a {
    display: block;
    font-family: "Gronland";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;
    color: $dark_evergreen;
    padding: 15px 0 12px;
    margin: 7px 1.5em 0;
    transition: 0.15s color;

    @include breakpoint(mobile_nav_breakpoint) {
      display: flex;
      justify-content: space-between;
      font-family: "Gronland";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 120%;
      letter-spacing: -0.02em;
      text-transform: none;
      margin: 0;
    }

    img {
      flex-shrink: 0;
      width: 14px;
      height: auto;
      transition: transform 0.15s;

      @include breakpoint(mobile_nav_breakpoint) {
        width: 22px;
      }

      &.desktop {
        @include breakpoint(mobile_nav_breakpoint) {
          display: none;
        }
      }

      &.mobile {
        display: none;
        @include breakpoint(mobile_nav_breakpoint) {
          display: block;
        }
      }
    }
  }

  .dropdown,
  .dropdown-dummy {
    position: absolute;
    height: 0px;
    overflow: hidden;
    transition: 0.15s;
    z-index: 2;

    li {
      a {
        display: block;
        margin: 0 0 0 1.5em;
        padding: 0;
        line-height: 180%;
        transition: 0.15s color;

        &:hover {
          color: $bright_green !important;
        }

        @include breakpoint(mobile_nav_breakpoint) {
          margin: 0 0 10px 0;
          @include h4;
        }
      }
    }
  }

  .dropdown-dummy {
    height: 0;
    position: relative;
    z-index: 1;
  }
}
</style>
