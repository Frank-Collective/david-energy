<template>
  <div v-if="data" class="faq-item" v-bind:class="[{ expanded: expanded }]">
    <div
      class="faq-item-hit-area"
      v-on:click="openContent"
      v-mouse-click="onMouseClick"
    ></div>
    <div class="inner">
      <div class="question">
        {{ data.question }}
        <img src="/images/icon-faq-down-arrow.svg" alt="" />
      </div>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
      >
        <div
          class="answer"
          v-show="expanded"
          v-if="data.answer"
          v-html="data.answer"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

Vue.directive("mouse-click", {
  bind(el, binding, vnode) {
    el.mouseClickEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    if (document) {
      document.body.addEventListener("click", el.mouseClickEvent);
    }
  },
  unbind(el) {
    if (document) {
      document.body.removeEventListener("click", el.mouseClickEvent);
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
    onMouseClick(e) {
      if (e.target.classList.contains("faq-item-hit-area")) {
        this.closeContent();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.faq-item {
  position: relative;
  border-top: 2px solid $bright_green;
  padding: 0.5em 0 0.8em;

  @include breakpoint(small) {
    border-width: 1px;
  }

  &.expanded {
    .inner {
      .question {
        padding-bottom: 0.5em;

        img {
          transform: rotate(180deg);
        }
      }

      .answer {
        height: auto;
      }
    }
  }

  &:hover {
    .question {
      img {
        transform: rotate(180deg);
      }
    }
  }

  .faq-item-hit-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: pointer;
  }

  .inner {
    .question {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include body-copy-small;
      transition: 0.5s padding-bottom;

      img {
        display: block;
        height: auto;
        transition: 0.15s transform;

        @include breakpoint(small) {
          width: 12px;
        }
      }
    }

    .answer {
      position: relative;
      height: 0px;
      overflow: hidden;
      transition: 0.5s;

      :deep(p) {
        font-family: "Gronland";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        margin-bottom: 1em;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
