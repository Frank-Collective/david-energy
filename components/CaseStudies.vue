<template>
  <client-only>
    <div class="case-studies" v-if="data">
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
          <div
            class="slide"
            v-for="(case_study, index) in data.caseStudies"
            :key="index"
          >
            <div class="column column--1">
              <div class="eyebrow" v-if="case_study.column1.title">
                {{ case_study.column1.title }}
              </div>
              <div
                v-if="case_study.column1.copy"
                v-html="case_study.column1.copy"
              ></div>
            </div>
            <div class="column column--2">
              <div class="eyebrow" v-if="case_study.column2.title">
                {{ case_study.column2.title }}
              </div>
              <div
                v-if="case_study.column2.copy"
                v-html="case_study.column2.copy"
              ></div>
            </div>
            <div class="column column--3">
              <div class="eyebrow" v-if="case_study.column3.title">
                {{ case_study.column3.title }}
              </div>
              <div class="big-headline" v-if="case_study.column3.percentage">
                {{ case_study.column3.percentage }}
              </div>
              <div
                v-if="case_study.column3.copy"
                v-html="case_study.column3.copy"
              ></div>
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
  props: { data: Object },
  data() {
    return {
      selected_index: 0,
      initialized: false,
      flickityOptions: {
        prevNextButtons: false,
        pageDots: true,
        draggable: true,
        cellAlign: "left",
        imagesLoaded: true,
        contain: true,
        cellSelector: ".slide",
        adaptiveHeight: true,
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
  @include max-width;

  .inner {
    background-color: $bright_green;
    border-radius: 22px;

    @include breakpoint(small) {
      border-radius: 8px;
    }

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

        @include breakpoint(small) {
          display: none;
        }

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

        @include breakpoint(small) {
          flex-direction: column;
          padding: 44px 30px 70px;
        }

        .column {
          width: calc(33.333333% - 20px);

          @include breakpoint(small) {
            width: 100%;
            margin-bottom: 40px;

            &:last-of-type {
              margin-bottom: 0;
            }
          }

          .eyebrow {
            font-family: "Gronland";
            font-style: normal;
            font-weight: 500;
            font-size: 11px;
            line-height: 93%;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: $white;
            margin-bottom: 2em;

            @include breakpoint(small) {
              border-bottom: 1px solid $white;
              font-size: 14px;
              padding-bottom: 0.75em;
              margin-bottom: 1em;
            }
          }

          h4,
          h5 {
            color: $white;
          }

          h4 {
            @include breakpoint(small) {
              @include body-copy-small;
            }
          }

          &--1 {
            width: 27%;

            @include breakpoint(small) {
              width: 100%;
            }

            div {
              :deep(p) {
                @include h4;
                color: $white;

                @include breakpoint(small) {
                  @include body-copy-small;
                }
              }
            }
          }

          &--2 {
            width: 29%;

            @include breakpoint(small) {
              width: 100%;
            }

            :deep(p) {
              @include body-copy-small;
              margin-bottom: 1em;
            }
          }

          &--3 {
            width: 35%;

            @include breakpoint(small) {
              width: 100%;
            }

            .big-headline {
              color: $white;
              @include h1-large;

              @include breakpoint(small) {
                font-size: 96px;
                margin-top: 0.25em;
              }
            }

            div {
              :deep(p) {
                @include h4;
                color: $white;

                @include breakpoint(small) {
                  @include body-copy-small;
                }
              }
            }
          }
        }
      }
    }
  }
}

:deep(.flickity-viewport) {
  pointer-events: none;

  @include breakpoint(small) {
    pointer-events: all;
  }
}

:deep(.flickity-page-dots) {
  display: none;

  @include breakpoint(small) {
    display: block;
    bottom: 15px;
  }

  .dot {
    width: 11px;
    height: 11px;
    background-color: transparent;
    border: 1px solid $white;
    opacity: 1;
    margin: 0 4px;

    &.is-selected {
      background-color: $white;
    }
  }
}
</style>
