<template>
  <div class="landing-section-3">
    <div class="inner">
      <div class="copy">
        <div class="toggle-btns">
          <div
            class="toggle-btn"
            v-bind:class="{ selected: selected_index == 0 }"
            v-on:click="toggleContent(0)"
          >
            For Business
          </div>
          <div
            class="toggle-btn"
            v-bind:class="{ selected: selected_index == 1 }"
            v-on:click="toggleContent(1)"
          >
            For Home
          </div>
        </div>

        <div class="content">
          <div class="section" ref="section0">
            <h3>
              One platform.<br />One bill.<br />One less thing to worry about.
            </h3>
            <p>
              We consolidate 5+ point solutions, streamlining energy supply,
              device management, billing and more. It’s never been so easy to
              keep the lights on.
            </p>
            <nuxt-link to="#" class="button">About Us</nuxt-link>
          </div>
          <div class="section hidden" ref="section1">
            <h3>For Home. For You.</h3>
            <p>
              We consolidate 5+ point solutions, streamlining energy supply,
              device management, billing and more. It’s never been so easy to
              keep the lights on.
            </p>
            <nuxt-link to="#" class="button">About Us</nuxt-link>
          </div>
        </div>
      </div>
      <div class="graphs">
        <img
          src="/images/landing-section-3-graph2.png"
          alt=""
          v-bind:class="{ visible: selected_index == 0 }"
        />
        <img
          src="/images/landing-section-3-graph.png"
          alt=""
          v-bind:class="{ visible: selected_index == 1 }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      currently_visible: 0,
      selected_index: 0,
    };
  },
  methods: {
    toggleContent(index) {
      let fade_out_el = this.$refs["section" + this.currently_visible];
      this.selected_index = index;
      let fade_in_el = this.$refs["section" + this.selected_index];

      gsap.to(fade_out_el, 0.25, {
        autoAlpha: 0,
        onComplete: () => {
          gsap.set(fade_out_el, { className: "section hidden" });

          gsap.set(fade_in_el, { className: "section" });
          gsap.to(fade_in_el, 0.25, { autoAlpha: 1 });

          this.currently_visible = this.selected_index;
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.landing-section-3 {
  position: relative;
  // margin-top: -13vw;
  // padding-bottom: 10vw;

  .inner {
    position: relative;
    display: flex;
    @include gutter(padding-left);
    @include gutter(padding-right);
    z-index: 1;

    .copy {
      display: flex;
      flex-direction: column;
      width: 50%;
      flex-shrink: 0;

      .toggle-btns {
        display: flex;
        margin-bottom: 3vw;

        .toggle-btn {
          font-family: "Gronland";
          font-style: normal;
          font-weight: 400;
          font-size: 44px;
          line-height: 140%;
          letter-spacing: -0.01em;
          cursor: pointer;
          color: $bright_green;
          border-bottom: 4px solid transparent;
          transition: 0.15s color, 0.15s border-color;
          margin-right: 1.25em;

          &:hover {
            color: $text_color;
            border-color: $bright_green;
          }

          &.selected {
            color: $text_color;
            border-color: $bright_green;
          }
        }
      }

      .content {
        padding-right: 16%;

        .section {
          &.hidden {
            display: none;
          }

          h3 {
            margin-bottom: 0.35em;
          }

          p {
            margin-bottom: 1em;
          }

          a {
            margin-top: 3em;
          }
        }
      }
    }

    .graphs {
      position: relative;
      width: 50%;
      flex-shrink: 0;
      padding-bottom: 48.4%;

      img {
        position: absolute;
        display: block;
        width: 100%;
        height: auto;
        top: 0;
        left: 0;
        opacity: 0;
        transition: 0.5s opacity;

        &.visible {
          opacity: 1;
        }
      }
    }
  }
}
</style>
