<template>
  <div class="inner" v-if="data">
    <div class="copy">
      <div class="toggle-btns">
        <div
          class="toggle-btn desktop"
          v-bind:class="{ selected: selected_index == 0 }"
          v-on:click="toggleContent(0)"
        >
          {{ data.tab1.tabTitle }}
        </div>
        <div
          class="toggle-btn mobile button--outline"
          v-bind:class="{ selected: selected_index == 0 }"
          v-on:click="toggleContent(0)"
        >
          {{ data.tab1.tabTitle }}
        </div>
        <div
          class="toggle-btn desktop"
          v-bind:class="{ selected: selected_index == 1 }"
          v-on:click="toggleContent(1)"
        >
          {{ data.tab2.tabTitle }}
        </div>
        <div
          class="toggle-btn mobile button--outline"
          v-bind:class="{ selected: selected_index == 1 }"
          v-on:click="toggleContent(1)"
        >
          {{ data.tab2.tabTitle }}
        </div>
      </div>

      <div class="content">
        <div class="section" ref="section0">
          <h3 v-html="data.tab1.title"></h3>
          <p>
            {{ data.tab1.copy }}
          </p>
          <nuxt-link
            v-for="(link, index) in data.tab1.links"
            :key="index"
            :to="link.link.url"
            class="button"
            >{{ link.link.title }}</nuxt-link
          >
        </div>
        <div class="section hidden" ref="section1">
          <h3 v-html="data.tab2.title"></h3>
          <p>
            {{ data.tab2.copy }}
          </p>
          <nuxt-link
            v-for="(link, index) in data.tab2.links"
            :key="index"
            :to="link.link.url"
            class="button"
            >{{ link.link.title }}</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="graphs desktop" v-if="!viewingMobile">
      <div
        ref="graph0"
        class="desktop"
        v-bind:class="{ visible: selected_index == 0 }"
        v-html="data.tab1.svgImageCode"
      ></div>
      <div
        ref="graph1"
        class="desktop"
        v-bind:class="{ visible: selected_index == 1 }"
        v-html="data.tab2.svgImageCode"
      ></div>
    </div>
    <div class="graphs mobile" v-if="viewingMobile">
      <div
        ref="graphmobile0"
        class="mobile"
        v-bind:class="{ visible: selected_index == 0 }"
        v-html="data.tab1.mobileSvgImageCode"
      ></div>
      <div
        ref="graphmobile1"
        class="mobile"
        v-bind:class="{ visible: selected_index == 1 }"
        v-html="data.tab2.mobileSvgImageCode"
      ></div>
    </div>
    <div class="mobile-ctas">
      <nuxt-link
        v-for="(link, index) in data.tab1.links"
        :key="`${index}0`"
        :to="link.link.url"
        class="button"
        v-bind:class="{ visible: selected_index == 0 }"
        >{{ link.link.title }}</nuxt-link
      >
      <nuxt-link
        v-for="(link, index) in data.tab2.links"
        :key="`${index}1`"
        :to="link.link.url"
        class="button"
        v-bind:class="{ visible: selected_index == 1 }"
        >{{ link.link.title }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      currently_visible: 0,
      selected_index: 0,
      viewingMobile: false,
    };
  },
  mounted() {
    window.addEventListener("resize", () => this.onWindowResize());
    window.dispatchEvent(new Event("resize"));
  },
  methods: {
    onWindowResize() {
      let w = window.innerWidth;
      if (w < 768) {
        this.viewingMobile = true;
      } else {
        this.viewingMobile = false;
      }
    },
    toggleContent(index) {
      let fade_out_el = this.$refs["section" + this.currently_visible];
      this.selected_index = index;
      let fade_in_el = this.$refs["section" + this.selected_index];
      let draw_in_graph = this.$refs["graph" + this.selected_index];
      let draw_in_graph_mobile =
        this.$refs["graphmobile" + this.selected_index];

      gsap.to(fade_out_el, 0.25, {
        autoAlpha: 0,
        onComplete: () => {
          gsap.set(fade_out_el, { className: "section hidden" });

          gsap.set(fade_in_el, { className: "section" });
          gsap.to(fade_in_el, 0.25, { autoAlpha: 1 });

          this.currently_visible = this.selected_index;
        },
      });

      // Draw SVGs
      if (!this.viewingMobile) {
        let draw_paths = draw_in_graph.querySelectorAll(".draw-svg");
        gsap.killTweensOf(draw_paths);
        gsap.set(draw_paths, { drawSVG: 0 });
        gsap.to(draw_paths, 1.5, {
          drawSVG: "100%",
          ease: "power2",
          stagger: 0,
          delay: 0,
        });
      }

      if (this.viewingMobile) {
        let draw_paths_mobile =
          draw_in_graph_mobile.querySelectorAll(".draw-svg");
        gsap.killTweensOf(draw_paths_mobile);
        gsap.set(draw_paths_mobile, { drawSVG: 0 });
        gsap.to(draw_paths_mobile, 1.5, {
          drawSVG: "100%",
          ease: "power2",
          stagger: 0,
          delay: 0,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.inner {
  position: relative;
  display: flex;
  @include gutter(padding-left);
  @include gutter(padding-right);
  @include max-width;
  z-index: 1;

  @include breakpoint(small) {
    flex-direction: column;
  }

  .copy {
    display: flex;
    flex-direction: column;
    width: 50%;
    flex-shrink: 0;

    @include breakpoint(small) {
      width: 100%;
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

    .content {
      padding-right: 16%;

      @include breakpoint(small) {
        padding-right: 0;
      }

      .section {
        &.hidden {
          display: none;
        }

        :deep(h3) {
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
          margin-bottom: 2em;

          @include breakpoint(small) {
            @include body-copy-small;
            margin-bottom: 1em;
          }
        }

        a {
          margin-bottom: 1em;

          @include breakpoint(small) {
            display: none;
          }
        }
      }
    }
  }

  .graphs {
    position: relative;
    width: 50%;
    flex-shrink: 0;
    padding-bottom: 48.4%;

    @include breakpoint(small) {
      width: 100%;
      padding-bottom: 145%;
    }

    &.desktop {
      @include breakpoint(small) {
        display: none;
      }
    }

    &.mobile {
      display: none;

      @include breakpoint(small) {
        display: block;
      }
    }

    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: 0.5s opacity;

      &.visible {
        opacity: 1;
      }

      img,
      svg {
        position: absolute;
        display: block;
        width: 100%;
        height: auto;
        top: 0;
        left: 0;
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
</style>
