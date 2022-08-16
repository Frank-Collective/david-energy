<template>
  <div class="for-business-section-5">
    <div class="bg-image">
      <img class="desktop" src="/images/for-business-section-5-bg.png" alt="" />
    </div>
    <ToggleGraphs />
  </div>
</template>

<style lang="scss" scoped>
.for-business-section-5 {
  position: relative;
  padding-bottom: 8vw;

  @include breakpoint(small) {
    margin-bottom: 40px;
  }

  .bg-image {
    position: absolute;
    top: -11%;
    left: 0;
    width: 50%;
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
}
</style>
