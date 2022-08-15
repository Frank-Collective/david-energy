<template>
  <client-only>
    <div class="landing-section-6">
      <div class="bg-image-1">
        <img class="desktop" src="/images/landing-section-6-bg1.png" alt="" />
        <img
          class="mobile"
          src="/images/landing-section-6-bg1-mobile.png"
          alt=""
        />
      </div>
      <div class="inner">
        <flickity ref="flickity" :options="flickityOptions" class="carousel">
          <blockquote>
            <p>
              “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet”
            </p>
            <cite>Lorem Ipsum</cite>
          </blockquote>
          <blockquote>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
              posuere ac ut consequat semper viverra. Risus pretium quam
              vulputate dignissim suspendisse in est ante in. Viverra vitae
              congue eu consequat ac felis donec et. ”
            </p>
            <cite>Lorem Ipsum</cite>
          </blockquote>
          <blockquote>
            <p>
              “Risus pretium quam vulputate dignissim suspendisse in est ante
              in. Viverra vitae congue eu consequat ac felis donec et. ”
            </p>
            <cite>Lorem Ipsum</cite>
          </blockquote>
        </flickity>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      initialized: false,
      flickityOptions: {
        prevNextButtons: false,
        pageDots: true,
        draggable: true,
        cellAlign: "center",
        imagesLoaded: true,
        contain: true,
        cellSelector: "blockquote",
        autoPlay: 15000,
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
.landing-section-6 {
  position: relative;
  padding-bottom: 12vw;
  @include gutter(padding-left);
  @include gutter(padding-right);

  @include breakpoint(small) {
    padding-bottom: 140px;
  }

  .bg-image-1 {
    position: absolute;
    bottom: -52%;
    right: 0;
    width: 50%;
    pointer-events: none;

    @include breakpoint(small) {
      bottom: -80%;
      right: 0%;
      width: 90%;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }

    img.desktop {
      @include breakpoint(small) {
        display: none;
      }
    }

    img.mobile {
      display: none;

      @include breakpoint(small) {
        display: block;
      }
    }
  }

  .inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;

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
