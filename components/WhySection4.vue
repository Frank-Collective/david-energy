<template>
  <div class="why-section-4">
    <div class="bg-image">
      <img class="desktop" src="/images/why-section-4-bg.png" alt="" />
    </div>
    <ToggleGraphs />
  </div>
</template>

<style lang="scss" scoped>
.why-section-4 {
  position: relative;
  padding-bottom: 8vw;

  @include breakpoint(small) {
    margin-bottom: 40px;
  }

  .bg-image {
    position: absolute;
    top: -100%;
    left: 0;
    width: 43%;
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
