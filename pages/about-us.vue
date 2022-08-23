<template>
  <div id="top">
    <div class="about-us-section-1">
      <div class="bg-image">
        <img class="desktop" src="/images/about-us-section-1-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/about-us-section-1-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <div class="copy">
          <div class="eyebrow">About us</div>
          <h1>A better energy grid starts with a better energy provider.</h1>
          <p class="hide-small">
            David Energy is revolutionizing energy supply with an integrated
            software platform that puts the consumer in the driver’s seat.
          </p>
        </div>

        <div class="image">
          <img src="/images/about-us-section-1-image.png" alt="" />
        </div>

        <div class="copy show-small">
          <p>
            David Energy is revolutionizing energy supply with an integrated
            software platform that puts the consumer in the driver’s seat.
          </p>
        </div>
      </div>
    </div>

    <div class="about-us-section-2">
      <div class="bg-image">
        <img class="desktop" src="/images/about-us-section-1-bg.jpg" alt="" />
      </div>
      <div class="inner">
        <ExpandingDropdown
          :data="{
            title: 'How we think',
            summary: null,
            flex_content: [
              {
                type: 'paragraph',
                content:
                  'We’re entering an energy renaissance. A time when the one-way flow of energy from centralized, fossil fuel sources will be replaced by a network of renewable resources all communicating together to intelligently direct energy to where it’s needed and away from where it’s not.',
              },
              {
                type: 'paragraph',
                content:
                  'With smart management, a decentralized grid will be more efficient, more reliable, and more powerful than the old model. But this shift requires a new type of energy provider. One that understands the power of software to inform and direct the flow of energy.',
              },
            ],
          }"
        />
        <ExpandingDropdown
          :data="{
            title: 'What we do',
            summary:
              'We partner with like-minded energy users + businesses, offering them an all-in-one solution to help them build a better grid.',
            flex_content: [
              {
                type: 'list-item-text',
                title: 'Retail Energy Provider',
                copy: 'We source clean and affordable energy for our customers.',
              },
              {
                type: 'list-item-text',
                title: 'Automated Device Management',
                copy: 'Our software learns when you need energy and adjusts your devices’ usage accordingly.',
              },
              {
                type: 'list-item-text',
                title: 'Demand Response',
                copy: 'We automatically modulate your usage during times when energy is the most expensive and dirty.',
              },
              {
                type: 'list-item-text',
                title: 'Shared Savings Program',
                copy: 'By selling some of your surplus energy when you don’t need it, we generate revenue that also saves you money.',
              },
            ],
          }"
        />
        <ExpandingDropdown
          :data="{
            title: 'Who we serve',
            summary:
              'Whether you’re powering a multi-location small-business, your home, or a multi-family housing development, David Energy has the tools to help you modernize your energy.',
            flex_content: [
              {
                type: 'list-item-icon',
                icon: '/images/icon-house.svg',
                title: 'Home',
                copy: 'Save money and reduce your carbon footprint.',
              },
              {
                type: 'list-item-icon',
                icon: '/images/icon-cash.svg',
                title: 'Business',
                copy: 'Manage all your buildings and devices from a single platform.',
              },
              {
                type: 'list-item-icon',
                icon: '/images/icon-house.svg',
                title: 'Partners',
                copy: 'Boost profits and simplify your energy processes.',
              },
            ],
          }"
        />
      </div>
    </div>

    <div class="about-us-section-3">
      <div class="bg-image">
        <img class="desktop" src="/images/about-us-section-3-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/about-us-section-3-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <div class="copy">
          <h3>Leadership Team</h3>
          <p>
            Meet the folks who are putting all their energy into improving
            yours.
          </p>
        </div>
        <LeadershipTeam />
      </div>
    </div>

    <div class="about-us-section-4">
      <div class="bg-image">
        <img class="desktop" src="/images/about-us-section-4-bg.jpg" alt="" />
      </div>
      <div class="inner">
        <div class="image">
          <img src="/images/about-us-section-4-image.png" alt="" />
        </div>
        <div class="copy">
          <h3>Make a difference with David</h3>
          <p>
            We’re always looking for talented, high-energy additions to our
            team.
          </p>
          <nuxt-link class="button" to="#">Careers</nuxt-link>
        </div>
      </div>
    </div>

    <div class="about-us-section-5">
      <div class="bg-image">
        <img class="desktop" src="/images/about-us-section-5-bg.jpg" alt="" />
        <img
          class="mobile"
          src="/images/about-us-section-5-bg-mobile.jpg"
          alt=""
        />
      </div>
      <div class="inner">
        <div class="copy">
          <h3>Knowledge is Power</h3>
          <p>Stay smart on the future of energy</p>
          <nuxt-link class="button" to="#">Blog</nuxt-link>
        </div>
        <div class="articles">
          <article>
            <div class="eyebrow">Post Type</div>
            <div class="title-excerpt">
              <h4>Post title goes here</h4>
              <div class="excerpt">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <nuxt-link to="#" target="_blank">Read More</nuxt-link>
              </div>
            </div>
          </article>
          <article>
            <div class="eyebrow">Post Type</div>
            <div class="title-excerpt">
              <h4>Post title goes here</h4>
              <div class="excerpt">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <nuxt-link to="#" target="_blank">Read More</nuxt-link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About us",
    };
  },
};
</script>

<style lang="scss" scoped>
.about-us-section-1 {
  position: relative;
  padding-top: 13vw;
  padding-bottom: 5vw;

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  @include breakpoint(small) {
    padding-top: 100px;
    padding-bottom: 30px;
  }

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;

    @include breakpoint(small) {
      width: 110%;
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
      width: 63%;
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

        @include breakpoint(small) {
          @include h2;
        }
      }

      p {
        @include body-copy-small;
        margin-bottom: 1.5em;
        padding-right: 23vw;

        &:last-of-type {
          margin-bottom: 0;
        }

        @include breakpoint(small) {
          padding: 0;
          @include body-copy;
        }
      }
    }

    .image {
      position: relative;
      flex-grow: 1;
      padding-bottom: 45.2%;
      margin-top: 3vw;

      @include breakpoint(small) {
        width: 100%;
        padding-bottom: 0;
        margin-top: -28vw;
      }

      img {
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        width: 170%;
        height: auto;

        @include breakpoint(small) {
          position: relative;
          width: 165%;
          right: 27%;
        }
      }
    }
  }
}

.about-us-section-2 {
  padding-bottom: 10vw;

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  @include breakpoint(small) {
    padding-bottom: 80px;
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
    flex-direction: column;
    @include gutter(padding-left);
    @include gutter(padding-right);

    @include breakpoint(small) {
    }
  }
}

.about-us-section-3 {
  position: relative;
  padding-bottom: 12vw;

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  @include breakpoint(small) {
    padding-bottom: 80px;
  }

  .bg-image {
    position: absolute;
    top: -20%;
    left: 0;
    width: 29%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      width: 47%;
      top: -37%;
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

  .inner {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include breakpoint(small) {
      flex-direction: column;
    }

    .copy {
      width: 30%;
      flex-shrink: 0;
      padding-right: 5vw;
      @include gutter(padding-left);

      @include breakpoint(small) {
        width: 100%;
        @include gutter(padding-right);
        margin-bottom: 1em;
      }

      h3 {
        margin-bottom: 0.35em;

        @include breakpoint(small) {
          @include h2;
        }
      }

      p {
        @include body-copy-small;
      }
    }
  }
}

.about-us-section-4 {
  position: relative;
  padding-bottom: 10vw;

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  @include breakpoint(small) {
    padding-bottom: 80px;
  }

  .bg-image {
    position: absolute;
    top: -120%;
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
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include gutter(padding-right);

    @include breakpoint(small) {
      flex-direction: column;
      padding: 0;
    }

    .image {
      width: 54%;
      flex-shrink: 0;

      @include breakpoint(small) {
        order: 2;
        width: 100%;
      }

      img {
        display: block;
        width: 100%;
        height: auto;

        @include breakpoint(small) {
          width: 112%;
        }
      }
    }

    .copy {
      padding-left: 8vw;

      @include breakpoint(small) {
        @include gutter(padding-left);
        @include gutter(padding-right);
        margin-bottom: 1.5em;
      }

      h3 {
        margin-bottom: 0.35em;

        @include breakpoint(small) {
          @include h2;
        }
      }

      p {
        @include body-copy-small;
        margin-bottom: 1em;
        width: 90%;

        @include breakpoint(small) {
          width: 100%;
          @include body-copy;
          margin-bottom: 0.75em;
        }
      }
    }
  }
}

.about-us-section-5 {
  position: relative;
  padding-bottom: 10vw;

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  @include breakpoint(small) {
    padding-bottom: 80px;
  }

  .bg-image {
    position: absolute;
    top: -41%;
    left: 0;
    width: 35%;
    pointer-events: none;
    mix-blend-mode: darken;

    @include breakpoint(small) {
      top: -55%;
      width: 90%;
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

  .inner {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    @include gutter(padding-left);
    @include gutter(padding-right);

    @include breakpoint(small) {
      flex-direction: column;
    }

    .copy {
      @include breakpoint(small) {
        margin-bottom: 1.5em;
      }

      h3 {
        margin-bottom: 0.35em;

        @include breakpoint(small) {
          @include h2;
          margin-bottom: 0.1em;
        }
      }

      p {
        @include body-copy-small;
        margin-bottom: 1em;
        width: 90%;

        @include breakpoint(small) {
          width: 100%;
          @include body-copy;
        }
      }
    }

    .articles {
      display: flex;
      flex-direction: column;
      width: 50%;
      flex-shrink: 0;

      @include breakpoint(small) {
        width: 100%;
      }

      article {
        border-top: 2px solid $bright_green;
        padding-top: 1vw;
        padding-bottom: 3vw;
        color: $dark_evergreen;

        @include breakpoint(small) {
          border-width: 1px;
          padding-bottom: 25px;
        }

        .eyebrow {
          font-family: "Gronland";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1em;

          @include breakpoint(small) {
            font-size: 14px;
          }
        }

        .title-excerpt {
          display: flex;

          h4 {
            width: 50%;
            flex-shrink: 0;
            padding-right: 2vw;

            @include breakpoint(small) {
              font-size: 24px;
            }
          }

          .excerpt {
            p {
              font-family: "Gronland";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 150%;
              margin-bottom: 1em;

              @include breakpoint(small) {
                font-size: 15px;
              }
            }

            a {
              font-family: "Gronland";
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 111%;
              display: flex;
              align-items: center;
              text-align: center;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              text-decoration: none;
              color: $dark_evergreen;

              @include breakpoint(small) {
                font-size: 14px;
              }

              &:hover {
                &:after {
                  left: 10px;
                }
              }

              &:after {
                content: "";
                position: relative;
                top: -2px;
                display: inline-block;
                width: 10px;
                height: 8px;
                background-image: url("/images/icon-read-more-arrow.svg");
                left: 0.35em;
                transition: 0.15s left;
                pointer-events: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
