<template>
  <div
    v-if="data"
    class="expanding-cta"
    v-bind:class="[{ expanded: expanded }]"
  >
    <div class="expanding-cta-hit-area" v-on:click="toggleContent"></div>
    <div class="inner">
      <div class="title">
        <h4 v-if="data.title" v-html="data.title"></h4>
        <div class="icon">
          <img :src="data.icons[0]" alt="" />
          <img class="active-image" :src="data.icons[1]" alt="" />
        </div>
      </div>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
      >
        <div class="content" v-show="expanded">
          <div class="spacer"></div>
          <p v-if="data.copy" v-html="data.copy"></p>
          <nuxt-link :to="data.link.url" class="button--outline">{{
            data.link.title
          }}</nuxt-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
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
    toggleContent: function () {
      this.expanded = !this.expanded;
    },
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
  },
};
</script>

<style lang="scss" scoped>
.expanding-cta {
  position: relative;
  background-color: $white;
  border-radius: 20px;
  border: 2px solid $bright_green;
  font-size: clamp(26px, 2.3vw, 44px);
  padding: 1em;
  transition: 0.5s border-color, 0.15s box-shadow, 0.15s padding-bottom;

  @include breakpoint(small) {
    border-width: 1px;
    border-radius: 10px;
    padding: 0.75em;
  }

  &.expanded {
    border-color: transparent;
    box-shadow: 0px 0px 12px rgba(255, 229, 135, 0.7);
    padding-bottom: 40px;

    .inner {
      .title {
        h4 {
          color: $bright_green;
          transition: 0.15s color;

          @include breakpoint(small) {
            margin-bottom: 1em;
          }
        }

        .icon {
          img.active-image {
            opacity: 1;
          }

          img:not(.active-image) {
            opacity: 0;
          }
        }
      }
      .content {
        height: auto;
      }
    }
  }

  &:hover {
    h4 {
      color: $bright_green;
      transition: 0.15s all;
    }
  }

  .expanding-cta-hit-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: pointer;
  }

  .inner {
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h4 {
        width: 75%;

        @include breakpoint(small) {
          // font-size: 18px;
        }
      }

      .icon {
        position: relative;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(calc(-50% - 55%), -50%);
          width: auto;
          height: 5.8vw;
          min-height: 55px;

          &.active-image {
            opacity: 0;
            transition: 0.15s opacity;
          }
        }
      }
    }

    .content {
      position: relative;
      height: 0px;
      overflow: hidden;
      transition: 0.5s;

      .spacer {
        height: 3vw;
      }

      p {
        @include body-copy;
        margin-bottom: 1em;

        @include breakpoint(small) {
          font-size: 15px;
        }
      }

      a {
        position: relative;
        z-index: 2;
        width: 100%;
      }
    }
  }
}
</style>
