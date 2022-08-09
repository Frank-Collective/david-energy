<template>
  <div class="landing-section-2">
    <div class="bg-image-1">
      <img class="desktop" src="/images/landing-section-2-bg1.png" alt="" />
      <img
        class="mobile"
        src="/images/landing-section-2-bg1-mobile.jpg"
        alt=""
      />
    </div>
    <div class="bg-image-2">
      <img class="desktop" src="/images/landing-section-2-bg2.png" alt="" />
      <img
        class="mobile"
        src="/images/landing-section-2-bg2-mobile.png"
        alt=""
      />
    </div>
    <div class="inner">
      <h1>We’re building a better future by building a better grid.</h1>
      <div class="content">
        <div class="image">
          <img src="/images/landing-section-2-image.png" alt="" />
        </div>
        <div class="copy">
          <h4>
            Together we can create a powerful network of integrated energy
            devices that rapidly adapt to changing needs.
          </h4>
          <h4>A grid that’s better for you and better for the planet.</h4>
          <nuxt-link class="button" to="#">Why David Energy?</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.landing-section-2 {
  position: relative;
  padding-bottom: 10vw;

  @include breakpoint(medium) {
    margin-bottom: 50px;
  }

  .bg-image-1 {
    position: absolute;
    top: -60%;
    left: 0;
    width: 67%;
    pointer-events: none;

    @include breakpoint(small) {
      top: -40%;
      width: 100%;
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

  .bg-image-2 {
    position: absolute;
    bottom: -21%;
    right: 0;
    width: 32%;
    pointer-events: none;

    @include breakpoint(small) {
      bottom: -70%;
      right: 0%;
      width: 120%;
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
    @include gutter(padding-left);
    @include gutter(padding-right);

    h1 {
      width: 80%;
      margin-bottom: 1em;

      @include breakpoint(small) {
        @include h2;
        width: auto;
      }
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include breakpoint(small) {
        flex-direction: column;
        justify-content: flex-start;
      }

      .image {
        width: 56%;

        @include breakpoint(small) {
          width: auto;
          margin-bottom: 50px;
        }

        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }

      .copy {
        width: 40%;

        @include breakpoint(small) {
          width: auto;
        }

        h4 {
          margin-bottom: 1.5em;

          &:last-of-type {
            margin-bottom: 0.75em;
          }

          @include breakpoint(small) {
            @include body-copy-small;
          }
        }
      }
    }
  }
}
</style>
