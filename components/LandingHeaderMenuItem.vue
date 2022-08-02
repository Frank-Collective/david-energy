<template>
  <div
    v-if="data"
    class="landing-header-menu-item"
    v-bind:class="[{ expanded: expanded }]"
  >
    <div
      class="landing-header-menu-item-hit-area"
      v-on:mouseover="openContent"
      v-mouse-over="onMouseOver"
    ></div>
    <div class="inner">
      <div class="indented-text-link">{{ data.title }}</div>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
      >
        <div class="content" v-show="expanded">
          <p class="body-copy-small">
            {{ data.copy }}
          </p>
          <nuxt-link :to="data.link.url" class="button">{{
            data.link.title
          }}</nuxt-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

Vue.directive("mouse-over", {
  bind(el, binding, vnode) {
    el.mouseOverEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("mouseover", el.mouseOverEvent);
  },
  unbind(el) {
    document.body.removeEventListener("mouseover", el.mouseOverEvent);
  },
});

export default {
  props: { data: Object },
  data() {
    return { expanded: false };
  },
  mounted() {
    if (this.data && this.data.expanded) {
      this.openContent();
    }
  },
  methods: {
    openContent: function () {
      this.expanded = true;
      if (this.data.callback != null) {
        this.data.callback(this.data.index);
      }
    },
    closeContent: function () {
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
    onMouseOver(e) {
      if (e.target.classList.contains("landing-header-menu-item-hit-area")) {
        this.closeContent();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.landing-header-menu-item {
  position: relative;

  &.expanded {
    .inner {
      .indented-text-link {
        color: $bright_green;
        padding-left: 0.5em;
        transition: 0.15s padding-left, 0.15s color;

        &:before {
          opacity: 1;
        }
      }
      .content {
        height: auto;
      }
    }
  }

  &:hover {
    .indented-text-link {
      color: $bright_green;
      padding-left: 0.5em;
      transition: 0.15s all;

      &:before {
        opacity: 1;
      }
    }
  }

  .landing-header-menu-item-hit-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .inner {
    padding-bottom: 0.75em;

    .indented-text-link {
    }
    .content {
      position: relative;
      height: 0px;
      overflow: hidden;
      transition: 0.5s;
      padding-left: 40px;

      &:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        width: 2px;
        height: calc(100% - 40px);
        background-color: $light_green;
      }

      &:after {
        content: "";
        display: block;
        height: 40px;
      }

      p {
        margin-bottom: 1em;
      }

      a {
        position: relative;
        z-index: 2;
      }
    }
  }
}
</style>
