<template>
  <div
    v-if="data"
    class="audience-cta-item"
    v-bind:class="[{ expanded: expanded }]"
  >
    <div
      class="audience-cta-item-hit-area"
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
        <!-- <div class="content" v-show="expanded"> -->
        <div class="content">
          <p class="body-copy-small" v-html="data.copy"></p>
          <Link
            v-for="(link, index) in data.links"
            :key="index"
            :classes="'button'"
            :link="{
              url: link.link.url,
              target: link.link.target,
              title: link.link.title,
            }"
          />
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
    if (document) {
      document.body.addEventListener("mouseover", el.mouseOverEvent);
    }
  },
  unbind(el) {
    if (document) {
      document.body.removeEventListener("mouseover", el.mouseOverEvent);
    }
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
      if (e.target.classList.contains("audience-cta-item-hit-area")) {
        this.closeContent();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.audience-cta-item {
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
        opacity: 1;
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

  .audience-cta-item-hit-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .inner {
    padding-bottom: 0.75em;

    .content {
      position: relative;
      height: 0px;
      overflow: hidden;
      opacity: 0;
      transition: 0.5s opacity;
      padding-left: 2.1vw;

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
        margin-bottom: 1em;
      }
    }
  }
}
</style>
