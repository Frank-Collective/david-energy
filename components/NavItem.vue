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
      <img v-if="data.dropdown" src="/images/icon-dropdown-arrow.svg" alt="" />
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
  &:hover {
    > a {
      border-bottom: 2px solid $bright_green;

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

    img {
      transition: transform 0.15s;
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
