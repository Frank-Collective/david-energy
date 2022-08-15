<template>
  <div class="landing-section-5">
    <div class="bg-image-1">
      <img
        class="mobile"
        src="/images/landing-section-5-bg1-mobile.png"
        alt=""
      />
    </div>
    <div class="inner">
      <h4>Companies <br />Powered by David <br />Energy</h4>
      <div class="logos">
        <img src="/images/NAYA.svg" alt="" />
        <img src="/images/BarrysBootcamp.svg" alt="" />
        <img src="/images/NYSC.svg" alt="" />
        <img src="/images/FiveIronGolf.svg" alt="" />
        <img src="/images/Crunch.svg" alt="" />
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
.landing-section-5 {
  position: relative;
  padding-bottom: 12vw;

  @include breakpoint(small) {
    padding-bottom: 80px;
  }

  .bg-image-1 {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    pointer-events: none;

    @include breakpoint(small) {
      top: 7%;
      left: 0%;
      width: 60%;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
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
    @include gutter(padding-left);
    @include gutter(padding-right);
    z-index: 1;

    @include breakpoint(small) {
      flex-direction: column;
    }

    h4 {
      width: 27%;
      border-right: 2px solid $bright_green;

      @include breakpoint(small) {
        @include h3;
        width: 100%;
        border: none;
        text-align: center;
        padding: 0 1em;
        margin-bottom: 1.5em;
      }

      br {
        @include breakpoint(small) {
          display: none;
        }
      }
    }

    .logos {
      display: flex;

      @include breakpoint(small) {
        flex-wrap: wrap;
        justify-content: center;
      }

      img {
        display: block;
        width: 10.4vw;
        height: auto;
        margin-left: 1.4vw;

        @include breakpoint(small) {
          width: calc(50% - 28px);
          max-width: 150px;
          margin: 0 14px 28px;
        }
      }
    }
  }
}
</style>
