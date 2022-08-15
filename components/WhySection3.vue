<template>
  <div class="why-section-3">
    <div class="inner">
      <h1>The future is bright</h1>
      <div class="copy">
        <h4>
          We don’t believe in “conserving” energy. The Earth is teeming with it.
          We don’t have a shortage of supply, but we do have a shortage of
          intelligent energy management.
        </h4>
        <h4>
          Together we can create a powerful network of integrated energy devices
          that rapidly adapts to changing needs. A grid that’s better for you
          and better for the planet.
        </h4>
      </div>
      <div class="ctas">
        <ExpandingCTA
          :data="{
            title: 'How we do it better for Home',
            icons: ['/images/icon-house.svg', '/images/icon-house-active.svg'],
            copy: 'Let us manage your energy while saving money and the planet, so you can focus on what matters most.',
            link: { title: 'Learn More', url: '/for-home/' },
          }"
        />
        <ExpandingCTA
          :data="{
            title: 'How we do it better for Business',
            icons: ['/images/icon-cash.svg', '/images/icon-cash-active.svg'],
            copy: 'Let us manage your energy while saving money and the planet, so you can focus on what matters most.Let us manage your energy while saving money and the planet, so you can focus on what matters most.',
            link: { title: 'Learn More', url: '/for-business/' },
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
.why-section-3 {
  position: relative;
  padding-bottom: 10vw;
  @include gutter(padding-left);
  @include gutter(padding-right);

  @include breakpoint(medium) {
    margin-bottom: 130px;
  }

  @include breakpoint(small) {
    padding-top: 75px;
  }

  .inner {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;

    @include breakpoint(small) {
      padding: 0;
    }

    h1 {
      margin-bottom: 1em;

      @include breakpoint(small) {
      }
    }

    .copy {
      position: relative;
      width: 83%;
      flex-shrink: 0;
      padding-left: 15vw;

      @include breakpoint(small) {
      }

      h4 {
        margin-bottom: 1.5em;
      }
    }

    .ctas {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-left: 15vw;
      margin-top: 1vw;

      :deep(.expanding-cta) {
        width: calc(50% - 10px);
      }
    }
  }
}
</style>
