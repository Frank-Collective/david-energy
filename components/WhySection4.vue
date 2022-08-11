<template>
  <div class="why-section-4">
    <div class="bg-image">
      <img class="desktop" src="/images/why-section-4-bg.png" alt="" />
    </div>
    <div class="inner">
      <div class="toggle-btns">
        <div
          class="toggle-btn desktop"
          v-bind:class="{ selected: selected_index == 0 }"
          v-on:click="toggleContent(0)"
        >
          For Business
        </div>
        <div
          class="toggle-btn mobile button--outline"
          v-bind:class="{ selected: selected_index == 0 }"
          v-on:click="toggleContent(0)"
        >
          For Business
        </div>
        <div
          class="toggle-btn desktop"
          v-bind:class="{ selected: selected_index == 1 }"
          v-on:click="toggleContent(1)"
        >
          For Home
        </div>
        <div
          class="toggle-btn mobile button--outline"
          v-bind:class="{ selected: selected_index == 1 }"
          v-on:click="toggleContent(1)"
        >
          For Home
        </div>
      </div>
      <div class="titles">
        <h3 ref="title0">
          One platform. One bill. <br />One less thing to worry about.
        </h3>
        <h3 class="hidden" ref="title1">For Home. For You.</h3>
      </div>
      <div class="content">
        <div class="copy">
          <div class="section" ref="section0">
            <p>
              We automatically manage your smart devices to reduce costs and
              ensure you have the power you need, when you need it.
            </p>
            <nuxt-link to="#" class="button">About Us</nuxt-link>
          </div>
          <div class="section hidden" ref="section1">
            <p>
              We consolidate 5+ point solutions, streamlining energy supply,
              device management, billing and more. It’s never been so easy to
              keep the lights on.
            </p>
            <nuxt-link to="#" class="button">About Us</nuxt-link>
          </div>
        </div>
        <div class="graphs">
          <img
            src="/images/chart-business.svg"
            alt=""
            v-bind:class="{ visible: selected_index == 0 }"
          />
          <img
            src="/images/chart-home.svg"
            alt=""
            v-bind:class="{ visible: selected_index == 1 }"
          />
        </div>
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
      let fade_out_content = this.$refs["section" + this.currently_visible];
      let fade_out_title = this.$refs["title" + this.currently_visible];
      this.selected_index = index;
      let fade_in_content = this.$refs["section" + this.selected_index];
      let fade_in_title = this.$refs["title" + this.selected_index];

      gsap.to(fade_out_content, 0.25, {
        autoAlpha: 0,
        onComplete: () => {
          gsap.set(fade_out_content, { className: "section hidden" });

          gsap.set(fade_in_content, { className: "section" });
          gsap.to(fade_in_content, 0.25, { autoAlpha: 1 });

          this.currently_visible = this.selected_index;
        },
      });

      gsap.to(fade_out_title, 0.25, {
        autoAlpha: 0,
        onComplete: () => {
          gsap.set(fade_out_title, { className: "hidden" });

          gsap.set(fade_in_title, { className: "" });
          gsap.to(fade_in_title, 0.25, { autoAlpha: 1 });

          this.currently_visible = this.selected_index;
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.why-section-4 {
  position: relative;

  @include breakpoint(small) {
    margin-bottom: 40px;
  }

  .bg-image {
    position: absolute;
    top: -100%;
    left: 0;
    width: 43%;
    pointer-events: none;

    img.desktop {
      display: block;
      width: 100%;
      height: auto;

      @include breakpoint(small) {
        display: none;
      }
    }

    img.mobile {
      display: none;
      width: 100%;
      height: auto;

      @include breakpoint(small) {
        display: block;
      }
    }
  }

  .inner {
    position: relative;
    display: flex;
    flex-direction: column;
    @include gutter(padding-left);
    @include gutter(padding-right);
    z-index: 1;

    @include breakpoint(small) {
      flex-direction: column;
    }

    .toggle-btns {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 2vw;

      @include breakpoint(small) {
        order: 2;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 35px;
      }

      .toggle-btn.desktop {
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
        margin-bottom: 1vw;
        white-space: nowrap;

        &:hover {
          color: $text_color;
          border-color: $bright_green;
        }

        &.selected {
          color: $text_color;
          border-color: $bright_green;
        }

        @include breakpoint(small) {
          display: none;
        }
      }

      .toggle-btn.mobile {
        display: none;
        cursor: pointer;
        width: calc(50% - 10px);

        &.selected {
          background-color: $dark_evergreen;
          color: $light_green;
          border-color: $dark_evergreen;
        }

        @include breakpoint(small) {
          display: flex;
        }
      }
    }

    .titles {
      margin-bottom: 3.5vw;

      h3 {
        &.hidden {
          display: none;
        }
      }
    }

    .content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      flex-shrink: 0;

      @include breakpoint(small) {
        // width: 100%;
      }

      .copy {
        padding-right: 5%;

        @include breakpoint(small) {
          padding-right: 0;
        }

        .section {
          &.hidden {
            display: none;
          }

          h3 {
            margin-bottom: 0.35em;

            @include breakpoint(small) {
              @include h2;
            }

            br {
              @include breakpoint(small) {
                display: none;
              }
            }
          }

          p {
            margin-bottom: 1em;

            @include breakpoint(small) {
              @include body-copy-small;
            }
          }

          a {
            margin-top: 2em;

            @include breakpoint(small) {
              display: none;
            }
          }
        }
      }
    }

    .graphs {
      position: relative;
      width: 66%;
      flex-shrink: 0;
      padding-bottom: 32%;

      @include breakpoint(small) {
        width: 100%;
        padding-bottom: 97%;
      }

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

    .mobile-ctas {
      display: none;
      margin-top: 25px;

      @include breakpoint(small) {
        display: flex;
        flex-direction: column;
      }

      a {
        display: none;
        margin-bottom: 1em;

        &.visible {
          display: flex;
        }
      }
    }
  }
}
</style>
