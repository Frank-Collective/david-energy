<template>
  <div class="for-business-section-2">
    <div class="inner">
      <h1>Do more with David.</h1>

      <div class="info-cards">
        <InfoCard
          :data="{
            title: 'One simple platform, all your energy needs',
            icons: ['/images/icon-house.svg', '/images/icon-house-active.svg'],
            copy: 'Purchase green energy and reduce usage at the priciest times, which also reduces the need for our dirtiest power plants.',
          }"
        />
        <InfoCard
          :data="{
            title: 'Groundbreaking shared savings program',
            icons: ['/images/icon-cash.svg', '/images/icon-cash-active.svg'],
            copy: 'Give your thumbs a rest and consolidate all your smart device apps into one centralized platform.',
          }"
        />
        <InfoCard
          :data="{
            title: 'More green in the bank, more green on the Earth',
            icons: ['/images/icon-house.svg', '/images/icon-house-active.svg'],
            copy: 'Say goodbye to price spikes and outages, and say hello to power that’s tailored to fit your needs.',
          }"
        />
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
.for-business-section-2 {
  position: relative;
  @include gutter(padding-left);
  @include gutter(padding-right);
  padding-bottom: 12vw;

  @include breakpoint(small) {
  }

  .inner {
    display: flex;
    flex-direction: column;
    padding: 0 8vw;

    @include breakpoint(small) {
      padding: 0;
    }

    h1 {
      text-align: right;
      margin-bottom: 0.5em;
    }

    .info-cards {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      @include breakpoint(small) {
        flex-direction: column;
      }

      :deep(.expanding-cta) {
        width: calc(33.333333% - 20px);
        min-height: 29.5vw;

        @include breakpoint(small) {
          width: 100%;
          height: auto;
          min-height: 0;
        }
      }
    }
  }
}
</style>
