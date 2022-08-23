<template>
  <div class="wrapper">
    <client-only>
      <flickity ref="flickity" :options="flickityOptions" class="carousel">
        <div class="prev-next-btns">
          <div class="btn--prev" v-on:click="prevSlide">
            <IconCarouselArrowLeft />
          </div>
          <div class="btn--next" v-on:click="nextSlide">
            <IconCarouselArrowRight />
          </div>
        </div>
        <div class="slide ghost"></div>
        <div
          class="slide"
          v-bind:class="{
            faded: selected_index != 0 && selected_index != null,
          }"
          v-on:mouseover="setSelectedIndex(0)"
          v-on:mouseout="resetSelectedIndex"
          v-on:click="openModal(0)"
        >
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-James.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div
          class="slide"
          v-bind:class="{
            faded: selected_index != 1 && selected_index != null,
          }"
          v-on:mouseover="setSelectedIndex(1)"
          v-on:mouseout="resetSelectedIndex"
          v-on:click="openModal(1)"
        >
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-Ahmed.jpeg" alt="" />
            <div class="info">
              <div class="name">Ahmed<br />Salman</div>
              <div class="name-and-title">
                <div class="title">CTO & Co-Founder</div>
                <div class="the-name">Ahmed Salman</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div
          class="slide"
          v-bind:class="{
            faded: selected_index != 2 && selected_index != null,
          }"
          v-on:mouseover="setSelectedIndex(2)"
          v-on:mouseout="resetSelectedIndex"
        >
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-Chaitu.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div
          class="slide"
          v-bind:class="{
            faded: selected_index != 3 && selected_index != null,
          }"
          v-on:mouseover="setSelectedIndex(3)"
          v-on:mouseout="resetSelectedIndex"
        >
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-Sophia.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div
          class="slide"
          v-bind:class="{
            faded: selected_index != 4 && selected_index != null,
          }"
          v-on:mouseover="setSelectedIndex(4)"
          v-on:mouseout="resetSelectedIndex"
        >
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-Abhishek.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div
          class="slide"
          v-bind:class="{
            faded: selected_index != 5 && selected_index != null,
          }"
          v-on:mouseover="setSelectedIndex(5)"
          v-on:mouseout="resetSelectedIndex"
        >
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-Sam.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div
          class="slide"
          v-bind:class="{
            faded: selected_index != 6 && selected_index != null,
          }"
          v-on:mouseover="setSelectedIndex(6)"
          v-on:mouseout="resetSelectedIndex"
        >
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-JJ.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div
          class="slide"
          v-bind:class="{
            faded: selected_index != 7 && selected_index != null,
          }"
          v-on:mouseover="setSelectedIndex(7)"
          v-on:mouseout="resetSelectedIndex"
        >
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-Ted.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div
          class="slide"
          v-bind:class="{
            faded: selected_index != 8 && selected_index != null,
          }"
          v-on:mouseover="setSelectedIndex(8)"
          v-on:mouseout="resetSelectedIndex"
        >
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-Diana.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div class="slide ghost"></div>
      </flickity>
      <flickity
        ref="flickity2"
        :options="flickityOptions2"
        class="carousel-mobile"
      >
        <div class="slide" v-on:click="openModal(0)">
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-James.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div class="slide" v-on:click="openModal(1)">
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-Ahmed.jpeg" alt="" />
            <div class="info">
              <div class="name">Ahmed<br />Salman</div>
              <div class="name-and-title">
                <div class="title">CTO & Co-Founder</div>
                <div class="the-name">Ahmed Salman</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-Chaitu.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-Sophia.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-Abhishek.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-Sam.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-JJ.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-Ted.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="inner">
            <div class="cover"></div>
            <img src="/images/team-Diana.jpeg" alt="" />
            <div class="info">
              <div class="name">James<br />McGinniss</div>
              <div class="name-and-title">
                <div class="title">CEO & Co-Founder</div>
                <div class="the-name">James McGinniss</div>
              </div>
              <div class="button--outline">Read More</div>
            </div>
          </div>
        </div>
      </flickity>
    </client-only>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      selected_index: null,
      dragging: false,
      initialized: false,
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        draggable: true,
        cellAlign: "left",
        imagesLoaded: true,
        contain: true,
        cellSelector: ".slide",
        wrapAround: false,
        freeScroll: false,
      },
      flickityOptions2: {
        prevNextButtons: false,
        pageDots: false,
        draggable: true,
        cellAlign: "left",
        imagesLoaded: true,
        contain: true,
        cellSelector: ".slide",
        wrapAround: true,
        freeScroll: false,
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
          this.$refs.flickity2.resize();
        }, 1000);

        // prevent clicking out when user is dragging
        this.$refs.flickity.on("dragStart", () => {
          this.dragging = true;
        });
        this.$refs.flickity.on("dragEnd", () => {
          setTimeout(() => {
            this.dragging = false;
          }, 250);
        });

        this.$refs.flickity2.on("dragStart", () => {
          this.dragging = true;
        });
        this.$refs.flickity2.on("dragEnd", () => {
          setTimeout(() => {
            this.dragging = false;
          }, 250);
        });
      }
    },
    nextSlide() {
      this.$refs.flickity.next();
    },
    prevSlide() {
      this.$refs.flickity.previous();
    },
    setSelectedIndex(index) {
      this.selected_index = index;
    },
    resetSelectedIndex() {
      this.selected_index = null;
    },
    openModal(index) {
      if (!this.dragging) {
        this.$store.commit("setTeamModalOpen", true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  @include gutter(padding-left);

  @include breakpoint(small) {
    padding: 0;
  }
}

.carousel {
  width: 100%;
  height: 100%;
  transition: 0.15s opacity;

  @include breakpoint(small) {
    display: none;
  }

  .prev-next-btns {
    display: flex;
    display: none;
    justify-content: space-between;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    pointer-events: none;

    @include breakpoint(medium) {
      display: none;
    }

    .btn {
      width: 16px;
      height: 35px;
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

      svg {
        transition: transform 0.15s;
      }
    }
  }

  .slide {
    position: relative;
    width: 14.25vw;
    height: 30vw;
    transition: 0.25s opacity;

    @include breakpoint(medium) {
      width: 25vw;
      height: 48.4vw;
    }

    &:hover {
      z-index: 1;

      .inner {
        width: calc(100% + 4.7vw);
        height: calc(100% - 2vw);
        box-shadow: 0px 0px 12px rgba(255, 229, 135, 0.7);

        .info {
          .name {
            opacity: 0;
          }

          .name-and-title {
            opacity: 1;
            transition: 0.15s opacity;
            transition-delay: 0.15s;
          }

          .button--outline {
            opacity: 1;
            transition: 0.15s opacity;
            transition-delay: 0.15s;
          }
        }
      }
    }

    &.faded {
      .inner {
        .cover {
          opacity: 0.5;
        }
      }
    }

    &.ghost {
      width: 3vw;
    }

    .inner {
      position: absolute;
      width: calc(100% - 1.25vw);
      height: calc(100% - 3.7vw);
      top: 50%;
      left: 50%;
      @include clamp("border-radius", 14px, 1vw, 20px);
      overflow: hidden;
      background-color: $white;
      transform: translate(-50%, -50%);
      transform-origin: center;
      transition: 0.15s width, 0.15s height;

      .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $dark_evergreen;
        z-index: 1;
        opacity: 0;
        transition: 0.25s opacity;
      }

      img {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 19vw;
        height: auto;

        @include breakpoint(medium) {
          width: 32vw;
        }
      }

      .info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .name {
          position: absolute;
          bottom: 1.5vw;
          left: 1vw;
          width: calc(100% - 2vw);
          background-color: $dark_evergreen;
          border-radius: 10px;
          color: $bright_green;
          font-family: "Gronland";
          font-style: normal;
          font-weight: 400;
          @include clamp("font-size", 18px, 1.25vw, 24px);
          line-height: 130%;
          letter-spacing: -0.015em;
          padding: 0.39em 0.75em;
        }

        .name-and-title {
          position: absolute;
          bottom: 1.5vw;
          left: 1vw;
          width: calc(100% - 2vw);
          background-color: $dark_evergreen;
          border-radius: 10px;
          padding: 0.8em 0.9em 0.6em;
          color: $bright_green;
          opacity: 0;

          .title {
            font-family: "Gronland";
            font-style: normal;
            font-weight: 500;
            @include clamp("font-size", 14px, 1vw, 18px);
            line-height: 111%;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 0.75em;
          }

          .the-name {
            font-family: "Gronland";
            font-style: normal;
            font-weight: 400;
            @include clamp("font-size", 15px, 1.25vw, 24px);
            line-height: 130%;
            letter-spacing: -0.015em;
          }
        }

        .button--outline {
          position: absolute;
          top: 1.5vw;
          left: 1vw;
          min-width: 0;
          width: auto;
          opacity: 0;
          transition: none;

          @include breakpoint(large) {
            height: unset;
            padding: 1em 2em 0.7em;
          }
        }
      }
    }
  }
}

.carousel-mobile {
  display: none;
  width: 100%;
  height: 100%;
  transition: 0.15s opacity;

  @include breakpoint(small) {
    display: block;
  }

  .slide {
    position: relative;
    width: 80%;
    height: 110vw;
    transition: 0.25s opacity;

    &.is-selected {
      .inner {
        width: calc(100% - 30px);
        height: calc(100% - 20px);
        left: 50%;
        box-shadow: 0px 0px 12px rgba(255, 229, 135, 0.7);

        .info {
          .name {
            opacity: 0;
          }

          .name-and-title {
            opacity: 1;
            transition: 0.15s opacity;
            transition-delay: 0.15s;
          }

          .button--outline {
            opacity: 1;
            transition: 0.15s opacity;
            transition-delay: 0.15s;
          }
        }
      }
    }

    .inner {
      position: absolute;
      width: calc(90% - 30px);
      height: calc(90% - 20px);
      top: 50%;
      left: calc(50% - 30px);
      @include clamp("border-radius", 14px, 1vw, 20px);
      overflow: hidden;
      background-color: $white;
      transform: translate(-50%, -50%);
      transform-origin: center;
      transition: 0.15s width, 0.15s height, 0.75s left;

      .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $dark_evergreen;
        z-index: 1;
        opacity: 0;
        transition: 0.25s opacity;
      }

      img {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: auto;
      }

      .info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .name {
          position: absolute;
          bottom: 20px;
          left: 20px;
          width: calc(100% - 40px);
          background-color: $dark_evergreen;
          border-radius: 7px;
          color: $bright_green;
          font-family: "Gronland";
          font-style: normal;
          font-weight: 400;
          @include clamp("font-size", 18px, 1.25vw, 24px);
          line-height: 130%;
          letter-spacing: -0.015em;
          padding: 0.39em 0.75em;
        }

        .name-and-title {
          position: absolute;
          bottom: 20px;
          left: 20px;
          width: calc(100% - 40px);
          background-color: $dark_evergreen;
          border-radius: 10px;
          padding: 0.8em 0.9em 0.6em;
          color: $bright_green;
          opacity: 0;

          .title {
            font-family: "Gronland";
            font-style: normal;
            font-weight: 500;
            @include clamp("font-size", 14px, 1vw, 18px);
            line-height: 111%;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 0.75em;
          }

          .the-name {
            font-family: "Gronland";
            font-style: normal;
            font-weight: 400;
            @include clamp("font-size", 15px, 1.25vw, 24px);
            line-height: 130%;
            letter-spacing: -0.015em;
          }
        }

        .button--outline {
          position: absolute;
          top: 20px;
          left: 20px;
          min-width: 0;
          width: auto;
          opacity: 0;
          transition: none;
          height: unset !important;
          // padding: 1em 2em 0.7em !important;
        }
      }
    }
  }
}
</style>
