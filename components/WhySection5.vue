<template>
  <div class="why-section-5">
    <div class="bg-image">
      <img class="desktop" src="/images/why-section-5-bg.png" alt="" />
      <img
        class="mobile"
        src="/images/landing-section-1-bg-mobile.jpg"
        alt=""
      />
    </div>
    <div class="inner">
      <div class="copy">
        <h2>Frequently Asked Questions</h2>
        <nuxt-link class="button" to="">See More</nuxt-link>
      </div>
      <div class="faqs">
        <FAQItem
          :data="{
            question: 'FAQ question goes here',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          }"
        />
        <FAQItem
          :data="{
            question: 'FAQ question goes here',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          }"
        />
        <FAQItem
          :data="{
            question: 'FAQ question goes here',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          }"
        />
        <FAQItem
          :data="{
            question: 'FAQ question goes here',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          }"
        />
        <FAQItem
          :data="{
            question: 'FAQ question goes here',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
.why-section-5 {
  position: relative;
  padding-top: 8vw;
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
    top: -30%;
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

  .inner {
    position: relative;
    display: flex;
    justify-content: space-between;

    @include breakpoint(small) {
      padding: 0;
    }

    .copy {
      position: relative;
      width: 57%;
      flex-shrink: 0;

      @include breakpoint(small) {
      }

      h2 {
        font-family: "Gronland";
        font-style: normal;
        font-weight: 400;
        font-size: 80px;
        @include clamp("font-size", 60px, 4.17vw, 80px);
        line-height: 105%;
        letter-spacing: -0.015em;
        margin-bottom: 0.5em;

        @include breakpoint(small) {
        }
      }

      p {
        margin-bottom: 1.5em;
      }
    }

    .faqs {
      width: 43%;
      flex-shrink: 0;
    }
  }
}
</style>
