<template>
  <div class="inner" v-if="data">
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
    <div class="titles">
      <h3 ref="title0" v-if="data.tab1.title" v-html="data.tab1.title"></h3>
      <h3
        class="hidden"
        ref="title1"
        v-if="data.tab2.title"
        v-html="data.tab2.title"
      ></h3>
    </div>
    <div class="content">
      <div class="copy">
        <div class="section" ref="section0">
          <p v-if="data.tab1.copy" v-html="data.tab1.copy"></p>

          <Link
            v-for="(link, index) in data.tab1.links"
            :key="index"
            :classes="'button'"
            :link="{
              url: link.link.url,
              target: link.link.target,
              title: link.link.title,
            }"
          />
        </div>
        <div class="section hidden" ref="section1">
          <p v-if="data.tab2.copy" v-html="data.tab2.copy"></p>
          <Link
            v-for="(link, index) in data.tab2.links"
            :key="index"
            :classes="'button'"
            :link="{
              url: link.link.url,
              target: link.link.target,
              title: link.link.title,
            }"
          />
        </div>
      </div>
      <div class="graphs">
        <img
          v-if="data.tab1.image"
          :src="data.tab1.image.mediaItemUrl"
          alt=""
          v-bind:class="{ visible: selected_index == 0 }"
        />
        <img
          v-if="data.tab2.image"
          :src="data.tab2.image.mediaItemUrl"
          alt=""
          v-bind:class="{ visible: selected_index == 1 }"
        />
      </div>
      <div class="mobile-graphs-wrapper">
        <div
          class="mobile-graphs"
          v-bind:class="{ visible: selected_index == 0 }"
        >
          <div class="left">
            <FadeImage
              v-if="data.tab1.image"
              :srcset="data.tab1.image.srcSet"
              :sizes="data.tab1.image.sizes"
              :src="data.tab1.image.mediaItemUrl"
              :alt="data.tab1.image.altText"
              :width="data.tab1.image.mediaDetails.width"
              :height="data.tab1.image.mediaDetails.height"
            />
          </div>
          <div class="right">
            <FadeImage
              v-if="data.tab1.image"
              :srcset="data.tab1.image.srcSet"
              :sizes="data.tab1.image.sizes"
              :src="data.tab1.image.mediaItemUrl"
              :alt="data.tab1.image.altText"
              :width="data.tab1.image.mediaDetails.width"
              :height="data.tab1.image.mediaDetails.height"
            />
          </div>
        </div>
        <div
          class="mobile-graphs pos-abs"
          v-bind:class="{ visible: selected_index == 1 }"
        >
          <div class="left">
            <FadeImage
              v-if="data.tab2.image"
              :srcset="data.tab2.image.srcSet"
              :sizes="data.tab2.image.sizes"
              :src="data.tab2.image.mediaItemUrl"
              :alt="data.tab2.image.altText"
              :width="data.tab2.image.mediaDetails.width"
              :height="data.tab2.image.mediaDetails.height"
            />
          </div>
          <div class="right">
            <FadeImage
              v-if="data.tab2.image"
              :srcset="data.tab2.image.srcSet"
              :sizes="data.tab2.image.sizes"
              :src="data.tab2.image.mediaItemUrl"
              :alt="data.tab2.image.altText"
              :width="data.tab2.image.mediaDetails.width"
              :height="data.tab2.image.mediaDetails.height"
            />
          </div>
        </div>
      </div>
      <div class="mobile-ctas">
        <Link
          v-for="(link, index) in data.tab1.links"
          :key="`${index}0`"
          :classes="`${selected_index == 0 ? 'visible' : 'not-visible'} button`"
          :link="{
            url: link.link.url,
            target: link.link.target,
            title: link.link.title,
          }"
        />
        <Link
          v-for="(link, index) in data.tab2.links"
          :key="`${index}1`"
          :classes="`${selected_index == 1 ? 'visible' : 'not-visible'} button`"
          :link="{
            url: link.link.url,
            target: link.link.target,
            title: link.link.title,
          }"
        />
      </div>
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
.inner {
  position: relative;
  display: flex;
  flex-direction: column;
  @include gutter(padding-left);
  @include gutter(padding-right);
  @include max-width;

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

    @include breakpoint(small) {
      order: 1;
    }

    :deep(h3) {
      &.hidden {
        display: none;
      }

      @include breakpoint(small) {
        @include h2;
      }
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-shrink: 0;

    @include breakpoint(small) {
      flex-direction: column;
      order: 3;
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

        :deep(h3) {
          margin-bottom: 0.35em;

          @include breakpoint(small) {
            @include h2;
          }
        }

        p {
          margin-bottom: 1em;

          @include breakpoint(small) {
            @include body-copy-small;
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
    width: 66%;
    flex-shrink: 0;
    padding-bottom: 32%;

    @include breakpoint(small) {
      display: none;
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

  .mobile-graphs-wrapper {
    position: relative;

    .mobile-graphs {
      position: relative;
      display: none;
      width: calc(100% + 52px);
      @include neg-gutter(left);
      margin: 30px 0 0;
      opacity: 0;
      pointer-events: none;
      transition: 0.5s opacity;

      &.visible {
        pointer-events: all;
        opacity: 1;
      }

      &.pos-abs {
        position: absolute;
        top: 0;
      }

      @include breakpoint(small) {
        display: flex;
      }

      div img {
        position: relative;
        width: 143vw;
        height: auto;
      }

      .left {
        flex-shrink: 0;
        width: 30%;
        overflow: hidden;

        img {
          left: -6vw;
        }
      }

      .right {
        overflow-x: scroll;
        margin-right: -53vw;

        img {
          left: -40vw;
        }
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
