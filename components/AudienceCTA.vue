<template>
  <client-only>
    <div class="inner" v-if="data">
      <h1>{{ data.title }}</h1>
      <div class="content">
        <div class="copy">
          <AudienceCTAItem
            v-for="(cta, index) in data.ctas"
            :key="index"
            :data="{
              title: cta.title,
              copy: cta.copy,
              links: cta.links,
              callback: setSelectedImage,
              index: index,
              expanded: index == 0 ? true : false,
            }"
          />
        </div>
        <div class="copy-mobile">
          <div class="prev-next-btns">
            <div class="prev" v-on:click="prev">
              <IconArrowInCircleLeft />
            </div>
            <div class="next" v-on:click="next">
              <IconArrowInCircleRight />
            </div>
          </div>
          <flickity
            ref="flickity1"
            :options="flickityOptions1"
            class="titles-carousel"
          >
            <span class="h2" v-for="(cta, index) in data.ctas" :key="index">{{
              cta.title
            }}</span>
          </flickity>
          <flickity
            ref="flickity2"
            :options="flickityOptions2"
            class="content-carousel"
          >
            <div
              class="landing-header-menu-item"
              v-for="(cta, index) in data.ctas"
              :key="index"
            >
              <p class="body-copy-small">{{ cta.copy }}</p>
              <nuxt-link
                class="button"
                v-for="(link, index2) in cta.links"
                :key="index2"
                :to="link.link.url"
                >{{ link.link.title }}</nuxt-link
              >
            </div>
          </flickity>
        </div>
        <div class="images">
          <img
            v-for="(cta, index) in data.ctas"
            :key="index"
            :src="cta.image.mediaItemUrl"
            alt=""
            v-bind:class="{ visible: selected_image_index == index }"
          />
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  props: {
    data: null,
  },
  data() {
    return {
      selected_image_index: 0,
      num_items: 3,
      initialized: false,
      flickityOptions1: {
        prevNextButtons: false,
        pageDots: false,
        draggable: false,
        cellAlign: "left",
        imagesLoaded: true,
        contain: false,
        cellSelector: "span",
      },
      flickityOptions2: {
        prevNextButtons: false,
        pageDots: false,
        draggable: false,
        cellAlign: "left",
        imagesLoaded: true,
        contain: true,
        cellSelector: "div",
        adaptiveHeight: true,
        fade: true,
      },
    };
  },
  mounted() {
    this.init();
  },
  updated() {
    this.init();
  },
  methods: {
    setSelectedImage: function (index) {
      this.selected_image_index = index;
    },
    prev: function () {
      if (this.selected_image_index > 0) {
        this.selected_image_index--;
        this.prevSlide();
      }
    },
    next: function () {
      if (this.selected_image_index < this.num_items - 1) {
        this.selected_image_index++;
        this.nextSlide();
      }
    },
    init() {
      // Flickity
      if (this.$refs.flickity1 && !this.initialized) {
        this.initialized = true;

        setTimeout(() => {
          // force repaint to fix height issues
          this.$refs.flickity1.resize();

          // prevent clicking out when user is dragging
          this.$refs.flickity1.on("dragStart", () =>
            this.$refs.flickity1.$children.forEach(
              (slide) => (slide.$el.style.pointerEvents = "none")
            )
          );
          this.$refs.flickity1.on("dragEnd", () =>
            this.$refs.flickity1.$children.forEach(
              (slide) => (slide.$el.style.pointerEvents = "all")
            )
          );
        }, 1000);
      }
    },
    nextSlide() {
      this.$refs.flickity1.next();
      this.$refs.flickity2.next();
    },
    prevSlide() {
      this.$refs.flickity1.previous();
      this.$refs.flickity2.previous();
    },
  },
};
</script>

<style lang="scss" scoped>
.inner {
  position: relative;
  z-index: 1;
  @include max-width;
  @include breakpoint(small) {
    padding: 0;
  }

  h1 {
    @include h1-large;
    width: 80%;
    @include gutter(padding-left);
    @include gutter(padding-right);

    @include breakpoint(small) {
      font-size: 56px;
      line-height: 110%;
      letter-spacing: -0.03em;
      position: relative;
      z-index: 1;
      width: auto;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 4vw;

    @include breakpoint(small) {
      flex-direction: column;
      justify-content: flex-start;
    }

    .copy {
      width: 40%;
      flex-shrink: 0;
      max-width: 700px;
      @include gutter(padding-left);

      @include breakpoint(small) {
        display: none;
      }
    }

    .copy-mobile {
      position: relative;
      z-index: 1;
      display: none;
      order: 2;
      margin-top: -70px;

      @include breakpoint(small) {
        display: flex;
        flex-direction: column;

        .prev-next-btns {
          @include gutter(padding-left);
          display: flex;
          margin-bottom: 15px;

          .prev {
            margin-right: 12px;
          }

          .next {
          }
        }

        .titles-carousel {
          margin-bottom: 0.5em;

          span {
            @include gutter(padding-left);
            @include gutter(padding-right);
            opacity: 0.5;
            color: $slate_gray;
            transition: 0.5s color, 0.5s opacity;

            &.is-selected {
              color: $text_color;
              opacity: 1;
            }
          }
        }

        .content-carousel {
          @include gutter(padding-left);
          @include gutter(padding-right);

          .landing-header-menu-item {
            p {
              margin-bottom: 1em;
            }

            a {
              margin-bottom: 1em;
            }
          }
        }
      }
    }

    .images {
      position: relative;
      width: 60%;
      flex-shrink: 0;
      top: -21vw;
      @include gutter(padding-right);

      @include breakpoint(small) {
        width: 130%;
        top: -9vw;
        left: -13%;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: auto;
        opacity: 0;
        transition: 0.5s opacity;

        &:first-of-type {
          position: relative;
        }

        &.visible {
          opacity: 1;
        }
      }
    }
  }
}

:deep(.flickity-viewport) {
  transition: 0.15s height;
}
</style>
