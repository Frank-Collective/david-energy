<template>
  <client-only>
    <div class="case-studies">
      <div class="inner">
        <flickity
          ref="flickity"
          :options="flickityOptions"
          class="carousel"
          v-bind:class="{ visible: selected_index == 5 }"
        >
          <div class="prev-next-btns">
            <div class="btn--prev" v-on:click="prevSlide">
              <IconCarouselArrowLeftLarge />
            </div>
            <div class="btn--next" v-on:click="nextSlide">
              <IconCarouselArrowRightLarge />
            </div>
          </div>
          <div class="slide">
            <div class="column column--1">
              <div class="eyebrow">Challenge</div>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </div>
            <div class="column column--2">
              <div class="eyebrow">partnership with DAVID energy</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nunc ultricies ac viverra nulla euismod vel.
              </p>
              <p>Quam mi amet, vel vel non vitae scelerisque.</p>
            </div>
            <div class="column column--3">
              <div class="eyebrow">savings</div>
              <div class="big-headline">42%</div>
              <h4>Reduced Costs Across Individual Savings</h4>
            </div>
          </div>
          <div class="slide">
            <div class="column column--1">
              <div class="eyebrow">Challenge</div>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </div>
            <div class="column column--2">
              <div class="eyebrow">partnership with DAVID energy</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nunc ultricies ac viverra nulla euismod vel.
              </p>
              <p>Quam mi amet, vel vel non vitae scelerisque.</p>
            </div>
            <div class="column column--3">
              <div class="eyebrow">savings</div>
              <div class="big-headline">42%</div>
              <h4>Reduced Costs Across Individual Savings</h4>
            </div>
          </div>
        </flickity>
      </div>
    </div>
  </client-only>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      selected_index: 0,
      initialized: false,
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        draggable: true,
        cellAlign: "left",
        imagesLoaded: true,
        contain: true,
        cellSelector: ".slide",
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
      console.log("nextSlide");
      this.$refs.flickity.next();
    },
    prevSlide() {
      this.$refs.flickity.previous();
    },
    toggleContent(index) {
      this.selected_index = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.case-studies {
  position: relative;
  @include gutter(padding-left);
  @include gutter(padding-right);

  .inner {
    background-color: $bright_green;
    border-radius: 22px;

    .carousel {
      width: 100%;
      height: 100%;

      .prev-next-btns {
        display: flex;
        justify-content: space-between;
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        pointer-events: none;
        padding: 0 3vw;

        .btn {
          width: 22px;
          height: 47px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          pointer-events: all;

          &:hover {
            svg {
              transform: translateX(-3px);
            }
          }

          &--prev {
            @extend .btn;
          }

          &--next {
            @extend .btn;

            &:hover {
              svg {
                transform: translateX(3px);
              }
            }
          }

          :deep(svg) {
            transition: transform 0.15s;

            path {
              stroke: $light_green;
            }
          }
        }
      }

      .slide {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        padding: 5.2vw 6.5vw 3.7vw;

        .column {
          width: calc(33.333333% - 20px);

          .eyebrow {
            font-family: "Gronland";
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 93%;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: $white;
            margin-bottom: 2em;
          }

          h4,
          h5 {
            color: $white;
          }

          .big-headline {
            color: $white;
            @include h1-large;
          }

          p {
            @include body-copy-small;
          }

          &--1 {
            width: 27%;
          }

          &--2 {
            width: 29%;
          }

          &--3 {
            width: 35%;
          }
        }
      }
    }
  }
}
</style>
