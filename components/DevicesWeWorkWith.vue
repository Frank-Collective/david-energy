<template>
  <client-only>
    <div class="inner">
      <h3>Seamless integration<br />with your devices</h3>
      <div class="content">
        <div class="copy">
          <p class="body-copy-small">
            We automatically manage your smart devices to reduce costs and
            ensure you have the power you need, when you need it
          </p>
        </div>
        <div class="toggle-btns">
          <div
            class="indented-text-link--medium"
            v-bind:class="{ selected: selected_index == 0 }"
            v-on:click="toggleContent(0)"
          >
            Thermostats
          </div>
          <div
            class="indented-text-link--medium"
            v-bind:class="{ selected: selected_index == 1 }"
            v-on:click="toggleContent(1)"
          >
            Electric Vehicles
          </div>
          <div
            class="indented-text-link--medium"
            v-bind:class="{ selected: selected_index == 2 }"
            v-on:click="toggleContent(2)"
          >
            Solar
          </div>
          <div
            class="indented-text-link--medium"
            v-bind:class="{ selected: selected_index == 3 }"
          >
            Batteries
            <span>Coming<br />Soon</span>
          </div>
          <div
            class="indented-text-link--medium"
            v-bind:class="{ selected: selected_index == 4 }"
            v-on:click="toggleContent(4)"
          >
            Generators
          </div>
          <div
            class="indented-text-link--medium"
            v-bind:class="{ selected: selected_index == 5 }"
            v-on:click="toggleContent(5)"
          >
            View All
          </div>
        </div>
        <div class="logos">
          <!-- TODO: when wiring, get number of children in this case its child_count--4 -->
          <ul
            class="group"
            v-bind:class="[
              { visible: selected_index == 0 },
              `child_count--${4}`,
            ]"
          >
            <li><img src="/images/Sensibo.svg" alt="" /></li>
            <li><img src="/images/Senisi.svg" alt="" /></li>
            <li><img src="/images/Ecobee.svg" alt="" /></li>
            <li><img src="/images/Honeywell.svg" alt="" /></li>
          </ul>
          <ul
            class="group"
            v-bind:class="[
              { visible: selected_index == 1 },
              `child_count--${6}`,
            ]"
          >
            <li><img src="/images/Tesla.svg" alt="" /></li>
            <li><img src="/images/Ford.svg" alt="" /></li>
            <li><img src="/images/BMW.svg" alt="" /></li>
            <li><img src="/images/Volkswagen.svg" alt="" /></li>
            <li><img src="/images/Audi.svg" alt="" /></li>
            <li><img src="/images/Jaguar.svg" alt="" /></li>
          </ul>
          <ul
            class="group"
            v-bind:class="[
              { visible: selected_index == 2 },
              `child_count--${3}`,
            ]"
          >
            <li><img src="/images/SolarEdge.svg" alt="" /></li>
            <li><img src="/images/Enphase.svg" alt="" /></li>
            <li><img src="/images/SMA.svg" alt="" /></li>
          </ul>
          <ul
            class="group"
            v-bind:class="[
              { visible: selected_index == 3 },
              `child_count--${0}`,
            ]"
          ></ul>
          <ul
            class="group"
            v-bind:class="[
              { visible: selected_index == 4 },
              `child_count--${1}`,
            ]"
          >
            <li><img src="/images/Generac.svg" alt="" /></li>
          </ul>
          <flickity
            ref="flickity"
            :options="flickityOptions"
            class="carousel"
            v-bind:class="{ visible: selected_index == 5 }"
          >
            <div class="prev-next-btns">
              <div class="btn--prev" v-on:click="prevSlide">
                <IconCarouselArrowLeft />
              </div>
              <div class="btn--next" v-on:click="nextSlide">
                <IconCarouselArrowRight />
              </div>
            </div>
            <div class="slide">
              <div><img src="/images/Sensibo.svg" alt="" /></div>
              <div><img src="/images/Senisi.svg" alt="" /></div>
              <div><img src="/images/Ecobee.svg" alt="" /></div>
              <div><img src="/images/Honeywell.svg" alt="" /></div>
              <div><img src="/images/Tesla.svg" alt="" /></div>
              <div><img src="/images/Ford.svg" alt="" /></div>
            </div>
            <div class="slide">
              <div><img src="/images/BMW.svg" alt="" /></div>
              <div><img src="/images/Volkswagen.svg" alt="" /></div>
              <div><img src="/images/Audi.svg" alt="" /></div>
              <div><img src="/images/Jaguar.svg" alt="" /></div>
              <div><img src="/images/SolarEdge.svg" alt="" /></div>
              <div><img src="/images/Enphase.svg" alt="" /></div>
            </div>
            <div class="slide">
              <div><img src="/images/SMA.svg" alt="" /></div>
              <div><img src="/images/Generac.svg" alt="" /></div>
            </div>
          </flickity>
        </div>
        <div class="expandable-btns">
          <DevicesWeWorkWithItem
            :data="{
              title: 'Thermostats',
              logos: [
                '/images/Sensibo.svg',
                '/images/Senisi.svg',
                '/images/Ecobee.svg',
                '/images/Honeywell.svg',
              ],
              callback: toggleContent,
              index: 0,
            }"
          />
          <DevicesWeWorkWithItem
            :data="{
              title: 'Electric Vehicles',
              logos: [
                '/images/Tesla.svg',
                '/images/Ford.svg',
                '/images/BMW.svg',
                '/images/Volkswagen.svg',
                '/images/Audi.svg',
                '/images/Jaguar.svg',
              ],
              callback: toggleContent,
              index: 1,
            }"
          />
          <DevicesWeWorkWithItem
            :data="{
              title: 'Solar',
              logos: [
                '/images/SolarEdge.svg',
                '/images/Enphase.svg',
                '/images/SMA.svg',
              ],
              callback: toggleContent,
              index: 2,
            }"
          />
          <DevicesWeWorkWithItem
            :data="{
              title: 'Batteries',
            }"
          />
          <DevicesWeWorkWithItem
            :data="{
              title: 'Generators',
              logos: ['/images/Generac.svg'],
              callback: toggleContent,
              index: 4,
            }"
          />
        </div>
      </div>
      <div class="cta">
        <p>Don’t see your device here?</p>
        <nuxt-link class="button--light-green" to="#">Request It</nuxt-link>
      </div>
    </div></client-only
  >
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
.inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  @include gutter(padding-left);
  @include gutter(padding-right);

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
