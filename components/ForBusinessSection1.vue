<template>
  <div class="for-business-section-1">
    <div class="bg-image">
      <img
        class="desktop"
        src="/images/for-business-section-1-bg1.png"
        alt=""
      />
      <img
        class="mobile"
        src="/images/landing-section-1-bg-mobile.jpg"
        alt=""
      />
    </div>
    <div class="inner">
      <div class="copy">
        <div class="eyebrow">For Businesses</div>
        <h1>The power of simplicity.</h1>
        <p>
          With David Energy you can manage the energy of all your facilities and
          pay your bills from one convenient platform.
        </p>
        <nuxt-link class="button" to="#">Get Started</nuxt-link>
      </div>

      <div class="image">
        <img src="/images/for-business-section-1-image.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  updated() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.for-business-section-1 {
  position: relative;
  padding-top: 13vw;
  padding-bottom: 14vw;

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;

    img.desktop {
      display: block;
      width: 100%;
      height: auto;

      @include breakpoint(small) {
        display: none;
      }
    }

    img.mobile {
      display: none;
      width: 100%;
      height: auto;

      @include breakpoint(small) {
        display: block;
      }
    }
  }

  .inner {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    @include gutter(padding-left);

    @include breakpoint(small) {
      flex-direction: column;
      justify-content: flex-start;
    }

    .copy {
      width: 41%;
      flex-shrink: 0;

      @include breakpoint(small) {
      }

      .eyebrow {
        margin-bottom: 2em;
      }

      h1 {
        margin-bottom: 0.35em;
      }

      p {
        @include body-copy-small;
        margin-bottom: 1.5em;
      }
    }

    .image {
      position: relative;
      width: 59%;
      flex-shrink: 0;
      padding-bottom: 39.5%;

      @include breakpoint(small) {
      }

      img {
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        width: 116%;
        height: auto;
      }
    }
  }
}
</style>
