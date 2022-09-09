<template>
  <client-only>
    <div class="inner" v-if="data">
      <flickity ref="flickity" :options="flickityOptions" class="carousel">
        <blockquote
          v-for="(testimonial, index) in data.testimonials"
          :key="index"
          v-on:click="nextSlide"
        >
          <p>
            {{ testimonial.quote }}
          </p>
          <cite>{{ testimonial.author }}</cite>
        </blockquote>
      </flickity>
    </div>
  </client-only>
</template>

<script>
export default {
  props: { data: Object },
  data() {
    return {
      initialized: false,
      flickityOptions: {
        prevNextButtons: false,
        pageDots: true,
        draggable: false,
        cellAlign: "center",
        imagesLoaded: true,
        contain: true,
        cellSelector: "blockquote",
        autoPlay: 5000,
        pauseAutoPlayOnHover: false,
        adaptiveHeight: true,
        fade: true,
        wrapAround: true,
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
    init() {
      // Flickity
      if (this.$refs.flickity && !this.initialized) {
        this.initialized = true;

        setTimeout(() => {
          // force repaint to fix height issues
          this.$refs.flickity.resize();

          // prevent clicking out when user is dragging
          this.$refs.flickity.on("dragStart", () =>
            this.$refs.flickity.$children.forEach(
              (slide) => (slide.$el.style.pointerEvents = "none")
            )
          );
          this.$refs.flickity.on("dragEnd", () =>
            this.$refs.flickity.$children.forEach(
              (slide) => (slide.$el.style.pointerEvents = "all")
            )
          );

          this.$refs.flickity.on("pointerUp", (event, pointer) => {
            console.log("pointerUp");
            this.$refs.flickity.playPlayer();
          });
        }, 1000);
      }
    },
    nextSlide() {
      this.$refs.flickity.next();
    },
    prevSlide() {
      this.$refs.flickity.previous();
    },
  },
};
</script>

<style>
@import "node_modules/flickity-fade/flickity-fade.css";
</style>

<style lang="scss" scoped>
.inner {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10vw;
  @include max-width;
  @include breakpoint(small) {
    @include gutter(padding-left);
    @include gutter(padding-right);
  }

  .carousel {
    width: 100%;
    blockquote {
      text-align: center;

      p {
        @include h4;
        margin-bottom: 0.75em;
      }

      cite {
        font-family: "Gronland";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: $text_color;

        @include breakpoint(small) {
          font-size: 15px;
          color: $text_color;
          text-transform: none;
          font-weight: 400;
          letter-spacing: -0.01em;
        }
      }
    }
  }
}
:deep(.flickity-viewport) {
  transition: 0.15s height;
}
:deep(.flickity-page-dots) {
  bottom: -50px;

  .dot {
    width: 16px;
    height: 16px;
    background-color: $light_green;
    margin: 0 5px;

    &.is-selected {
      background-color: $bright_green;
    }

    &:focus {
      outline: none !important;
      box-shadow: none;
      border: none;
      appearance: none;
    }
  }
}
</style>
