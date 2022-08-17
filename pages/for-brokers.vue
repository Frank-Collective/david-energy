<template>
  <div id="top">
    <div class="for-brokers-section-1">
      <div class="bg-image">
        <img
          class="desktop"
          src="/images/for-brokers-section-1-bg.jpg"
          alt=""
        />
        <img
          class="mobile"
          src="/images/landing-section-1-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <div class="image">
          <img src="/images/for-brokers-section-1-image.png" alt="" />
        </div>

        <div class="copy">
          <div class="eyebrow">for brokers</div>
          <h1>Go beyond the broker’s fee.</h1>
          <p>
            A win for you and your customers. Enhance your bottom line with
            David Energy by delivering savings and lowering your customers’
            bills partner with us
          </p>
          <nuxt-link class="button" to="#">Partner with us</nuxt-link>
        </div>
      </div>
    </div>

    <div class="for-brokers-section-2">
      <div class="inner">
        <h1>Partner with David.</h1>

        <div class="info-cards">
          <InfoCard
            :data="{
              title: 'Get paid to save the planet.',
              icons: [
                '/images/icon-house.svg',
                '/images/icon-house-active.svg',
              ],
              copy: 'Purchase green energy and reduce usage at the priciest times, which also reduces the need for our dirtiest power plants.',
            }"
          />
          <InfoCard
            :data="{
              title: 'One platform to manage all your smart devices',
              icons: ['/images/icon-cash.svg', '/images/icon-cash-active.svg'],
              copy: 'Give your thumbs a rest and consolidate all your smart device apps into one centralized platform.',
            }"
          />
          <InfoCard
            :data="{
              title: 'Be picky about your energy partner',
              icons: [
                '/images/icon-house.svg',
                '/images/icon-house-active.svg',
              ],
              copy: 'Say goodbye to price spikes and outages, and say hello to power that’s tailored to fit your needs.',
            }"
          />
        </div>
      </div>
    </div>

    <div class="for-brokers-section-3">
      <div class="bg-image">
        <img
          class="desktop"
          src="/images/for-brokers-section-3-bg.jpg"
          alt=""
        />
        <img
          class="mobile"
          src="/images/landing-section-1-bg-mobile.jpg"
          alt=""
        />
      </div>
      <CaseStudies />
    </div>

    <div class="for-brokers-section-4">
      <PlatformFeatures />
    </div>

    <div class="for-brokers-section-5">
      <BrandsWeWorkWith />
    </div>

    <div class="for-brokers-section-6">
      <div class="bg-image">
        <img
          class="desktop"
          src="/images/for-brokers-section-6-bg.jpg"
          alt=""
        />
        <img
          class="mobile"
          src="/images/landing-section-4-bg1-mobile.png"
          alt=""
        />
      </div>

      <DevicesWeWorkWith />
    </div>

    <div class="for-brokers-section-7">
      <div class="bg-image">
        <img
          class="desktop"
          src="/images/for-brokers-section-7-bg.jpg"
          alt=""
        />
      </div>
      <ToggleGraphs />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Home",
    };
  },
};
</script>

<style lang="scss" scoped>
.for-brokers-section-1 {
  position: relative;
  padding-top: 13vw;
  padding-bottom: 6vw;

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
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
    z-index: 1;
    display: flex;
    justify-content: space-between;
    @include gutter(padding-right);

    @include breakpoint(small) {
      flex-direction: column;
      justify-content: flex-start;
    }

    .image {
      position: relative;
      width: 46%;

      @include breakpoint(small) {
      }

      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }

    .copy {
      width: 48%;
      flex-shrink: 0;

      @include breakpoint(small) {
      }

      .eyebrow {
        margin-bottom: 2em;
      }

      h1 {
        margin-bottom: 0.35em;
      }

      p {
        @include body-copy-small;
        margin-bottom: 1.5em;
        padding-right: 6vw;
      }
    }
  }
}

.for-brokers-section-2 {
  position: relative;
  @include gutter(padding-left);
  @include gutter(padding-right);
  padding-bottom: 12vw;

  @include breakpoint(small) {
  }

  .inner {
    position: relative;
    z-index: 1;
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

.for-brokers-section-3 {
  position: relative;
  padding-bottom: 10vw;

  .bg-image {
    position: absolute;
    top: 0;
    transform: translateY(-29%);
    right: 0;
    width: 80%;
    pointer-events: none;
    mix-blend-mode: darken;

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

.for-brokers-section-4 {
  position: relative;
  padding-bottom: 10vw;
}

.for-brokers-section-5 {
  position: relative;
  padding-bottom: 12vw;
}

.for-brokers-section-6 {
  position: relative;
  padding-bottom: 7vw;

  @include breakpoint(small) {
    margin-bottom: 40px;
  }

  .bg-image {
    position: absolute;
    top: 0%;
    left: 0;
    width: 80%;
    pointer-events: none;
    transform: translateY(-21%);
    mix-blend-mode: darken;

    @include breakpoint(small) {
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }

    img.desktop {
      @include breakpoint(small) {
        display: none;
      }
    }

    img.mobile {
      display: none;

      @include breakpoint(small) {
        display: block;
      }
    }
  }
}

.for-brokers-section-7 {
  position: relative;
  padding-bottom: 8vw;

  @include breakpoint(small) {
    margin-bottom: 40px;
  }

  .bg-image {
    position: absolute;
    bottom: -100%;
    right: 0;
    width: 80%;
    pointer-events: none;
    mix-blend-mode: darken;

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
