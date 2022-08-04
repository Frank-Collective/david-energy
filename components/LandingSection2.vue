<template>
  <div class="landing-section-2">
    <div class="bg-image-1">
      <img src="/images/landing-section-2-bg1.png" alt="" />
    </div>
    <div class="bg-image-2">
      <img src="/images/landing-section-2-bg2.png" alt="" />
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
  margin-top: -13vw;
  padding-bottom: 10vw;

  .bg-image-1 {
    position: absolute;
    top: -60%;
    left: 0;
    width: 67%;
    pointer-events: none;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .bg-image-2 {
    position: absolute;
    bottom: -21%;
    right: 0;
    width: 32%;
    pointer-events: none;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .inner {
    position: relative;
    @include gutter(padding-left);
    @include gutter(padding-right);

    h1 {
      width: 80%;
      margin-bottom: 1em;
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .image {
        width: 56%;

        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
      .copy {
        width: 40%;

        h4 {
          margin-bottom: 1.5em;

          &:last-of-type {
            margin-bottom: 0.75em;
          }
        }
      }
    }
  }
}
</style>
