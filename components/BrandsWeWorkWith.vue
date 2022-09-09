<template>
  <div class="inner" v-if="data">
    <h4 v-html="data.title"></h4>
    <div class="line"></div>
    <div class="logos">
      <img
        v-for="(logo, index) in data.logos"
        :key="index"
        :src="logo.logo.mediaItemUrl"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props: { data: Object },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.inner {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include gutter(padding-left);
  @include gutter(padding-right);
  @include max-width;
  z-index: 1;
  @include breakpoint(small) {
    flex-direction: column;
  }

  :deep(h4) {
    width: 27%;

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

  .line {
    flex-shrink: 0;
    width: 2px;
    height: 10.4vw;
    background-color: $bright_green;

    @include breakpoint(small) {
      display: none;
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
      max-width: 200px;
      max-height: 200px;
      margin-left: 1.4vw;

      @include breakpoint(small) {
        width: calc(50% - 28px);
        max-width: 150px;
        max-height: 150px;
        margin: 0 14px 28px;
      }
    }
  }
}
</style>
