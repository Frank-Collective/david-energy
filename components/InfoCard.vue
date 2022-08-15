<template>
  <div
    v-if="data"
    class="expanding-cta"
    v-bind:class="[{ expanded: expanded }]"
  >
    <div class="expanding-cta-hit-area" v-on:click="toggleContent"></div>
    <div class="inner">
      <div class="title">
        <h4>{{ data.title }}</h4>
        <div class="icon">
          <img :src="data.icons[0]" alt="" />
          <img class="active-image" :src="data.icons[1]" alt="" />
        </div>
      </div>
      <div class="copy">
        <p>
          {{ data.copy }}
        </p>
      </div>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
      >
        <div class="expanding-content" v-show="expanded">
          <div class="spacer"></div>
          <p>
            {{ data.copy }}
          </p>
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

  &.expanded {
    @include breakpoint(small) {
      border-color: transparent;
      box-shadow: 0px 0px 12px rgba(255, 229, 135, 0.7);
      padding-bottom: 40px;

      .inner {
        .title {
          h4 {
            color: $bright_green;
            transition: 0.15s color;
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
        .expanding-content {
          height: auto;
        }
      }
    }
  }

  &:hover {
    border-color: transparent;
    box-shadow: 0px 0px 12px rgba(255, 229, 135, 0.7);

    .inner {
      .title {
        h4 {
          opacity: 0;

          @include breakpoint(small) {
            opacity: 1;
          }
        }

        .icon {
          img {
            opacity: 0;

            @include breakpoint(small) {
              opacity: 1;
            }

            &.active-image {
              opacity: 1;
            }
          }
        }
      }

      .copy {
        opacity: 1;
      }
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
        font-family: "Gronland";
        font-style: normal;
        font-weight: 400;
        @include clamp("font-size", 18px, 2.19vw, 42px);
        line-height: 130%;
        letter-spacing: -0.01em;
        opacity: 1;
        transition: 0.25s opacity;
      }

      .icon {
        position: absolute;
        right: 1em;
        bottom: 1em;

        img {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(-100%, -100%);
          width: auto;
          height: 5.8vw;

          &.active-image {
            opacity: 0;
            transition: 0.15s opacity;
          }
        }
      }
    }

    .copy {
      position: absolute;
      top: 1em;
      left: 1em;
      width: calc(100% - 2em);
      opacity: 0;
      transition: 0.25s opacity;

      @include breakpoint(small) {
        display: none;
      }

      p {
        @include body-copy-small;
      }
    }

    .expanding-content {
      display: none;
      position: relative;
      height: 0px;
      overflow: hidden;
      transition: 0.5s;

      @include breakpoint(small) {
        display: block;
      }

      .spacer {
        height: 3vw;
      }

      p {
        @include body-copy;
        margin-bottom: 1em;
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
