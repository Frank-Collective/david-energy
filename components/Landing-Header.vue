<template>
  <div class="header">
    <div class="bg-image">
      <img src="/images/bgs/bg-landing-header.jpg" alt="" />
    </div>
    <div class="inner">
      <h1>We’re a new kind of power company.</h1>
      <div class="content">
        <div class="copy">
          <LandingHeaderMenuItem
            :data="{
              title: 'For Home',
              copy: 'Let us manage your energy while saving money and the planet, so you can focus on what matters most.',
              link: { title: 'Get Started', url: '/get-started/' },
              callback: setSelectedImage,
              index: 0,
              expanded: true,
            }"
          />
          <LandingHeaderMenuItem
            :data="{
              title: 'For Business',
              copy: 'Let us manage your energy while saving money and the planet, so you can focus on what matters most.',
              link: { title: 'Get Started', url: '/get-started/' },
              callback: setSelectedImage,
              index: 1,
            }"
          />
          <LandingHeaderMenuItem
            :data="{
              title: 'For Partners',
              copy: 'Let us manage your energy while saving money and the planet, so you can focus on what matters most.',
              link: { title: 'Get Started', url: '/get-started/' },
              callback: setSelectedImage,
              index: 2,
            }"
          />
        </div>
        <div class="images">
          <img
            src="/images/landing-header-image-1.png"
            alt=""
            v-bind:class="{ visible: selected_image_index == 0 }"
          />
          <img
            src="/images/landing-header-image-2.png"
            alt=""
            v-bind:class="{ visible: selected_image_index == 1 }"
          />
          <img
            src="/images/landing-header-image-3.png"
            alt=""
            v-bind:class="{ visible: selected_image_index == 2 }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected_image_index: 0,
    };
  },
  methods: {
    setSelectedImage: function (index) {
      this.selected_image_index = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding-top: 11vw;

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .inner {
    position: relative;
    @include gutter(padding-left);
    @include gutter(padding-right);

    h1 {
      @include h1-large;
      width: 80%;
    }

    .content {
      display: flex;
      justify-content: space-between;
      margin-top: 4vw;

      .copy {
        width: 40%;
        flex-shrink: 0;
        max-width: 620px;
      }

      .images {
        position: relative;
        width: 60%;
        flex-shrink: 0;
        top: -21vw;

        img {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 100%;
          height: auto;
          opacity: 0;
          transition: 0.5s opacity;

          &:first-of-type {
            position: relative;
          }

          &.visible {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
