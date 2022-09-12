<template>
  <client-only>
    <div class="inner" v-if="data">
      <h3 v-html="data.title"></h3>
      <div class="content">
        <div class="copy">
          <p class="body-copy-small">
            {{ data.copy }}
          </p>
        </div>
        <div class="toggle-btns">
          <div
            v-for="(device, index) in data.devices"
            :key="index"
            class="indented-text-link--medium"
            v-bind:class="{ selected: selected_index == index }"
            v-on:click="
              if (device.logos != null) {
                toggleContent(index);
              }
            "
          >
            {{ device.title }}
            <span v-if="device.logos == null">Coming<br />Soon</span>
          </div>
          <div
            class="indented-text-link--medium"
            v-bind:class="{ selected: selected_index == data.devices.length }"
            v-on:click="toggleContent(data.devices.length)"
          >
            View All
          </div>
        </div>
        <div class="logos">
          <ul
            v-for="(logo_group, index) in data.devices"
            :key="index"
            class="group"
            v-bind:class="[
              { visible: selected_index == index },
              logo_group.logos && `child_count--${logo_group.logos.length}`,
              !logo_group.logos && `child_count--0`,
            ]"
          >
            <li v-for="(logo, index) in logo_group.logos" :key="index">
              <img :src="logo.logo.mediaItemUrl" alt="" />
            </li>
          </ul>

          <flickity
            ref="flickity"
            :options="flickityOptions"
            class="carousel"
            v-bind:class="{ visible: selected_index == data.devices.length }"
          >
            <div class="prev-next-btns">
              <div class="btn--prev" v-on:click="prevSlide">
                <IconCarouselArrowLeft />
              </div>
              <div class="btn--next" v-on:click="nextSlide">
                <IconCarouselArrowRight />
              </div>
            </div>
            <template v-for="(logo_group, index) in all_logos">
              <div class="slide" :key="index">
                <div v-for="(logo, index2) in logo_group" :key="index2">
                  <img :src="logo.logo.mediaItemUrl" alt="" />
                </div>
              </div>
            </template>
          </flickity>
        </div>

        <div class="expandable-btns">
          <DevicesWeWorkWithItem
            v-for="(device, index) in data.devices"
            :key="index"
            :data="{
              title: device.title,
              logos: device.logos,
              callback: toggleContent,
              index: index,
            }"
          />
          <DevicesWeWorkWithItem
            v-if="logos_array"
            :data="{
              title: 'View All',
              logos: logos_array,
              callback: toggleContent,
              index: logos_array.length,
            }"
          />
        </div>
      </div>

      <div class="cta">
        <p v-if="data.cta.title">{{ data.cta.title }}</p>
        <nuxt-link
          class="button--light-green"
          v-if="data.cta.link"
          :to="data.cta.link.url"
          >{{ data.cta.link.title }}</nuxt-link
        >
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
        pageDots: false,
        draggable: true,
        cellAlign: "left",
        imagesLoaded: true,
        contain: true,
        cellSelector: ".slide",
        wrapAround: true,
        fade: 500,
      },
      logos_array: [],
      all_logos: [],
    };
  },
  mounted() {
    this.init();
    this.parseLogos();
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
    parseLogos() {
      this.data.devices.forEach((device, index) => {
        if (device.logos != null) {
          device.logos.forEach((logo, index) => {
            this.logos_array.push(logo);
          });
        }
      });

      // chunk out logos into groups of 6
      const perChunk = 6;
      const inputArray = this.logos_array;
      const result = inputArray.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk);
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []; // start a new chunk
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
      }, []);

      this.all_logos = result;
      // console.log(this.all_logos);
      // console.log(this.logos_array);
    },
  },
};
</script>

<style lang="scss" scoped>
.inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  @include gutter(padding-left);
  @include gutter(padding-right);
  @include max-width;

  h3 {
    margin-bottom: 0.75em;

    @include breakpoint(small) {
      @include h2;
      margin-bottom: 0.5em;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5vw;

    @include breakpoint(small) {
      flex-direction: column;
    }

    .copy {
      width: 24%;

      @include breakpoint(small) {
        width: 100%;
      }
    }

    .toggle-btns {
      width: 36%;
      flex-shrink: 0;
      padding-left: 10%;

      @include breakpoint(small) {
        display: none;
      }

      .indented-text-link--medium {
        display: flex;
        align-items: center;
        transition: 0.15s color, 0.15s padding-left;

        &.selected {
          padding-left: 0.5em;
          color: $bright_green;

          &:before {
            opacity: 1;
          }
        }

        span {
          margin-left: 1em;
          font-family: "Gronland";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 100%;
          color: $bright_green;
        }
      }
    }

    .logos {
      position: relative;
      width: 40%;
      flex-shrink: 0;

      @include breakpoint(small) {
        display: none;
      }

      .group {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        pointer-events: none;
        transition: 0.15s opacity;

        &.visible {
          opacity: 1;
          pointer-events: all;
        }

        &.child_count {
          &--1 {
            width: 100%;
            li {
              width: 100%;
            }
          }

          &--2 {
            width: 63%;
            li {
              width: 50%;
            }
          }

          &--3 {
            width: 63%;
            li {
              width: 50%;

              &:first-of-type {
                width: 100%;
              }
            }
          }

          &--4 {
            width: 63%;
            li {
              width: 50%;
            }
          }

          &--6 {
            width: 100%;
          }
        }

        li {
          padding: 1vw;
          text-align: center;

          img {
            width: 8.34vw;
            max-width: 160px;
          }
        }
      }

      .carousel {
        width: 100%;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        transition: 0.15s opacity;

        &.visible {
          opacity: 1;
          pointer-events: all;
        }

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
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          width: 100%;

          div {
            padding: 1vw;
            text-align: center;

            img {
              width: 8.34vw;
              max-width: 160px;
            }
          }
        }
      }
    }

    .expandable-btns {
      display: none;
      flex-direction: column;
      margin-top: 0.5em;
      @include breakpoint(small) {
        display: flex;
      }
    }
  }

  .cta {
    margin-bottom: 4.2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $bright_green;
    border-radius: 18px;
    padding: 1.32vw;

    @include breakpoint(small) {
      flex-direction: column;
      padding: 18px;
    }

    p {
      margin-right: 2em;

      @include breakpoint(small) {
        @include body-copy-small;
        margin: 0 0 0.5em;
      }
    }
  }
}
</style>
