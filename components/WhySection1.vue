<template>
  <div class="why-section-1">
    <div class="bg-image">
      <img class="desktop" src="/images/why-section-1-bg.jpg" alt="" />
      <img
        class="mobile"
        src="/images/landing-section-1-bg-mobile.jpg"
        alt=""
      />
    </div>
    <div class="inner">
      <h1>It’s not only better for the planet.<br />It’s just better.</h1>
      <div class="content">
        <div class="copy">
          <h4>
            We’re empowering customers to build a cleaner, cheaper and more
            resilient energy grid by working with the planet rather than against
            it.
          </h4>
        </div>

        <div class="image">
          <img src="/images/why-section-1-house.png" alt="" />
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
  mounted() {},
  updated() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.why-section-1 {
  position: relative;
  padding-top: 11vw;

  @include breakpoint(medium) {
    margin-bottom: 130px;
  }

  @include breakpoint(small) {
    padding-top: 75px;
  }

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

    @include breakpoint(small) {
      padding: 0;
    }

    h1 {
      @include h1-medium;
      @include gutter(padding-left);
      @include gutter(padding-right);

      @include breakpoint(small) {
        // font-size: 56px;
        // line-height: 110%;
        // letter-spacing: -0.03em;
        // position: relative;
        // z-index: 1;
        // width: auto;
      }
    }

    .content {
      display: flex;
      justify-content: space-between;
      margin-top: 4vw;

      @include breakpoint(small) {
        flex-direction: column;
        justify-content: flex-start;
      }

      .copy {
        width: 42%;
        flex-shrink: 0;
        @include gutter(padding-left);

        @include breakpoint(small) {
        }
      }

      .image {
        position: relative;
        margin-top: -13vw;
        width: 58%;
        flex-shrink: 0;
        padding-bottom: 44%;

        @include breakpoint(small) {
        }

        img {
          position: absolute;
          display: block;
          top: 0;
          right: 0;
          width: 112%;
          height: auto;
        }
      }
    }
  }
}
</style>
