<template>
  <div id="top">
    <div class="for-home-section-1">
      <div class="bg-image">
        <img class="desktop" src="/images/for-home-section-1-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/for-home-section-1-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <div class="copy">
          <div class="eyebrow">For Home</div>
          <h1>Your home powered your way.</h1>
          <p class="hide-small">
            David Energy gives you total control over how much energy you use
            and where it comes from.
          </p>
          <nuxt-link class="button hide-small" to="#">Get Started</nuxt-link>
        </div>

        <div class="image">
          <img src="/images/for-home-section-1-image.png" alt="" />
        </div>

        <div class="copy show-small">
          <p>
            David Energy gives you total control over how much energy you use
            and where it comes from.
          </p>
          <nuxt-link class="button" to="#">Get Started</nuxt-link>
        </div>
      </div>
    </div>

    <div class="for-home-section-2">
      <div class="bg-image">
        <img
          class="mobile"
          src="/images/for-home-section-2-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <h1>Take charge with David.</h1>

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

    <div class="for-home-section-3">
      <div class="bg-image">
        <img class="desktop" src="/images/for-home-section-3-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/for-home-section-3-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="bg-image bg-image2">
        <img
          src="/images/for-home-section-3-bg2-mobile.jpg"
          alt=""
          class="mobile"
        />
      </div>
      <PlatformFeatures />
    </div>

    <div class="for-home-section-4">
      <div class="bg-image">
        <img class="desktop" src="/images/for-home-section-4-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/for-home-section-4-bg-mobile.jpg"
          alt=""
        />
      </div>

      <DevicesWeWorkWith />
    </div>

    <div class="for-home-section-5">
      <div class="bg-image">
        <img class="desktop" src="/images/for-home-section-5-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/for-home-section-5-bg-mobile.jpg"
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
.for-home-section-1 {
  position: relative;
  padding-top: 13vw;
  padding-bottom: 14vw;

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  @include breakpoint(small) {
    padding-top: 100px;
    padding-bottom: 70px;
  }

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
    @include gutter(padding-left);

    @include breakpoint(small) {
      padding: 0;
      flex-direction: column;
      justify-content: flex-start;
    }

    .copy {
      width: 43%;
      flex-shrink: 0;

      @include breakpoint(small) {
        width: auto;
        @include gutter(padding-left);
        @include gutter(padding-right);
      }

      .eyebrow {
        margin-bottom: 2em;

        @include breakpoint(small) {
          margin-bottom: 1.5em;
        }
      }

      h1 {
        margin-bottom: 0.35em;
      }

      p {
        @include body-copy-small;
        margin-bottom: 1.5em;
        padding-right: 6vw;

        @include breakpoint(small) {
          @include body-copy;
          margin-bottom: 1em;
          padding-right: 0;
        }
      }
    }

    .image {
      position: relative;
      flex-grow: 1;
      padding-bottom: 40.5%;

      @include breakpoint(small) {
        width: 100%;
        padding-bottom: 0;
      }

      img {
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        width: 120%;
        height: auto;

        @include breakpoint(small) {
          position: relative;
          right: 17%;
          width: 152%;
        }
      }
    }
  }
}
.for-home-section-2 {
  position: relative;
  @include gutter(padding-left);
  @include gutter(padding-right);
  padding-bottom: 12vw;

  @include breakpoint(small) {
    padding-bottom: 80px;
  }

  .bg-image {
    position: absolute;
    top: -112vw;
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

      @include breakpoint(small) {
        text-align: left;
        @include h2;
        margin-bottom: 0.25em;
      }
    }

    .info-cards {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      @include breakpoint(small) {
        flex-direction: column;
      }

      :deep(.info-card) {
        width: calc(33.333333% - 20px);
        min-height: 29.5vw;
      }
    }
  }
}
.for-home-section-3 {
  position: relative;
  padding-bottom: 9vw;

  @include breakpoint(small) {
  }

  .bg-image {
    position: absolute;
    top: -17%;
    right: 0;
    width: 70%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      right: auto;
      left: 0;
      top: -9%;
      width: 100%;
    }

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

  .bg-image2 {
    top: 25%;
    left: auto;
    right: 0;
    width: 100%;
  }
}
.for-home-section-4 {
  position: relative;
  padding-bottom: 10vw;

  @include breakpoint(small) {
    margin-bottom: 40px;
  }

  .bg-image {
    position: absolute;
    top: -70%;
    left: 0;
    width: 80%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      top: -92vw;
      left: 0;
      width: 120%;
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
.for-home-section-5 {
  position: relative;
  padding-bottom: 8vw;

  @include breakpoint(small) {
    margin-bottom: 40px;
  }

  .bg-image {
    position: absolute;
    top: -50%;
    right: 0;
    width: 50%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      top: auto;
      right: auto;
      bottom: -57%;
      left: 0;
      width: 100%;
    }

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
