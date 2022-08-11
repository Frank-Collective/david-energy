<template>
  <div class="why-section-2">
    <div class="bg-image">
      <img class="desktop" src="/images/why-section-2-bg.png" alt="" />
      <img
        class="mobile"
        src="/images/landing-section-1-bg-mobile.jpg"
        alt=""
      />
    </div>
    <div class="inner">
      <h3>How we think about energy</h3>
      <div class="copy">
        <p>
          We’re entering an energy renaissance. A time when the one-way flow of
          energy from centralized, fossil fuel sources will be replaced by a
          network of renewable resources all communicating together to
          intelligently direct energy to where it’s needed and away from where
          it’s not.
        </p>
        <p>
          With smart management, a decentralized grid will be more efficient,
          more reliable, and more powerful than the old model. But this shift
          requires a new kind of energy company – one that leverages the power
          of software and integrates with and manages customer devices.
        </p>
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
.why-section-2 {
  position: relative;
  padding-top: 6vw;
  padding-bottom: 10vw;
  @include gutter(padding-left);
  @include gutter(padding-right);

  @include breakpoint(medium) {
    margin-bottom: 130px;
  }

  @include breakpoint(small) {
    padding-top: 75px;
  }

  .bg-image {
    position: absolute;
    top: 30%;
    right: 0;
    width: 80%;
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
    display: flex;
    justify-content: space-between;
    padding: 0 11vw;

    @include breakpoint(small) {
      padding: 0;
    }

    h3 {
      // width: 38%;
      // flex-shrink: 0;

      @include breakpoint(small) {
      }
    }

    .copy {
      position: relative;
      width: 57%;
      flex-shrink: 0;
      @include gutter(padding-left);
      padding-left: 32px;

      &:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        width: 2px;
        height: calc(100% - 1.5em);
        background-color: $bright_green;
      }

      @include breakpoint(small) {
      }

      p {
        margin-bottom: 1.5em;
      }
    }
  }
}
</style>
