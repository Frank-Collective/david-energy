<template>
  <div class="landing-section-5">
    <div class="inner">
      <h4>Companies<br />Powered by David <br />Energy</h4>
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
  padding-top: 10vw;
  padding-bottom: 10vw;

  .inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include gutter(padding-left);
    @include gutter(padding-right);
    z-index: 1;

    h4 {
      width: 27%;
      border-right: 2px solid $bright_green;
    }

    .logos {
      display: flex;

      img {
        display: block;
        width: 10.4vw;
        height: auto;
        margin-left: 1.4vw;
      }
    }
  }
}
</style>
