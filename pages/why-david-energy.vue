<template>
  <div id="top">
    <div class="why-section-1">
      <div class="bg-image">
        <img class="desktop" src="/images/why-section-1-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/landing-section-1-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <h1>It’s not only better for the planet.<br />It’s just better.</h1>
        <div class="content">
          <div class="copy">
            <h4>
              We’re empowering customers to build a cleaner, cheaper and more
              resilient energy grid by working with the planet rather than
              against it.
            </h4>
          </div>

          <div class="image">
            <img src="/images/why-section-1-house.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="why-section-2">
      <div class="bg-image">
        <img class="desktop" src="/images/why-section-2-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/landing-section-1-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <h3>How we think about energy</h3>
        <div class="copy">
          <p>
            We’re entering an energy renaissance. A time when the one-way flow
            of energy from centralized, fossil fuel sources will be replaced by
            a network of renewable resources all communicating together to
            intelligently direct energy to where it’s needed and away from where
            it’s not.
          </p>
          <p>
            With smart management, a decentralized grid will be more efficient,
            more reliable, and more powerful than the old model. But this shift
            requires a new kind of energy company – one that leverages the power
            of software and integrates with and manages customer devices.
          </p>
        </div>
      </div>
    </div>
    <div class="why-section-3">
      <div class="inner">
        <h1>The future is bright</h1>
        <div class="copy">
          <h4>
            We don’t believe in “conserving” energy. The Earth is teeming with
            it. We don’t have a shortage of supply, but we do have a shortage of
            intelligent energy management.
          </h4>
          <h4>
            Together we can create a powerful network of integrated energy
            devices that rapidly adapts to changing needs. A grid that’s better
            for you and better for the planet.
          </h4>
        </div>
        <div class="ctas">
          <ExpandingCTA
            :data="{
              title: 'How we do it better for Home',
              icons: [
                '/images/icon-house.svg',
                '/images/icon-house-active.svg',
              ],
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
    <div class="why-section-4">
      <div class="bg-image">
        <img class="desktop" src="/images/why-section-4-bg.jpg" alt="" />
      </div>
      <ToggleGraphs />
    </div>
    <div class="why-section-5">
      <div class="bg-image">
        <img class="desktop" src="/images/why-section-5-bg.jpg" alt="" />
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
.why-section-1 {
  position: relative;
  padding-top: 11vw;
  padding-bottom: 6vw;

  @include breakpoint(medium) {
    margin-bottom: 130px;
  }

  @include breakpoint(small) {
    padding-top: 75px;
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

    @include breakpoint(small) {
      padding: 0;
    }

    h1 {
      @include h1-medium;
      @include gutter(padding-left);
      @include gutter(padding-right);

      @include breakpoint(small) {
        // font-size: 56px;
        // line-height: 110%;
        // letter-spacing: -0.03em;
        // position: relative;
        // z-index: 1;
        // width: auto;
      }
    }

    .content {
      display: flex;
      justify-content: space-between;
      margin-top: 4vw;

      @include breakpoint(small) {
        flex-direction: column;
        justify-content: flex-start;
      }

      .copy {
        width: 42%;
        flex-shrink: 0;
        @include gutter(padding-left);

        @include breakpoint(small) {
        }
      }

      .image {
        position: relative;
        margin-top: -13vw;
        width: 58%;
        flex-shrink: 0;
        padding-bottom: 44%;

        @include breakpoint(small) {
        }

        img {
          position: absolute;
          display: block;
          top: 0;
          right: 0;
          width: 112%;
          height: auto;
        }
      }
    }
  }
}
.why-section-2 {
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

  .bg-image {
    position: absolute;
    top: 30%;
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
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0 11vw;

    @include breakpoint(small) {
      padding: 0;
    }

    h3 {
      // width: 38%;
      // flex-shrink: 0;

      @include breakpoint(small) {
      }
    }

    .copy {
      position: relative;
      width: 57%;
      flex-shrink: 0;
      @include gutter(padding-left);
      padding-left: 32px;

      &:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        width: 2px;
        height: calc(100% - 1.5em);
        background-color: $bright_green;
      }

      @include breakpoint(small) {
      }

      p {
        margin-bottom: 1.5em;
      }
    }
  }
}
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
.why-section-5 {
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

  .bg-image {
    position: absolute;
    top: -30%;
    left: 0;
    width: 50%;
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
