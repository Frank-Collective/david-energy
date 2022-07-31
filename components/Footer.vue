<template>
  <footer class="footer">
    <div class="cta">
      <div class="inner">
        <h4>Join the Better Grid Movement</h4>
        <nuxt-link class="button--light-green" to="#"
          >Get Started Today</nuxt-link
        >
      </div>
    </div>
    <div class="footer-content">
      <div class="inner">
        <div class="logo">
          <a v-if="currentRoute == 'index'" v-scroll-to="'#top'"
            ><img src="/images/logo-desktop.svg" alt=""
          /></a>
          <nuxt-link v-if="currentRoute != 'index'" to="/"
            ><img src="/images/logo-desktop.svg" alt=""
          /></nuxt-link>
          <ul class="social-media-links">
            <li>
              <a href="/" target="_blank">
                <LogoLinkedin />
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <LogoTwitter />
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <LogoMedium />
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-1">
          <ul>
            <li><nuxt-link to="#">For Home</nuxt-link></li>
            <li><nuxt-link to="#">For Business</nuxt-link></li>
          </ul>
          <span>For Partners</span>
          <ul>
            <li><nuxt-link to="#">For Brokers</nuxt-link></li>
            <li><nuxt-link to="#">For Developers</nuxt-link></li>
          </ul>
        </div>
        <div class="menu-2">
          <ul>
            <li><nuxt-link to="#">Why David Energy?</nuxt-link></li>
            <li><nuxt-link to="#">FAQ</nuxt-link></li>
            <li><nuxt-link to="#">About Us</nuxt-link></li>
            <li><nuxt-link to="#">Careers</nuxt-link></li>
            <li><nuxt-link to="#">Contact Us</nuxt-link></li>
            <li><nuxt-link to="#">Blog</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="legal">
      <div class="inner">
        <nuxt-link to="#">Terms & Conditions</nuxt-link>
        <span>© 2022 David Energy. All rights reserved</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: null,
    };
  },
  mounted() {
    this.currentRoute = this.$route.name;
  },
  methods: {},
  watch: {
    $route(to, from) {
      this.currentRoute = to.name;
    },
  },
};
</script>

<style lang="scss" scoped>
footer.footer {
  .cta {
    @include gutter(padding-left);
    @include gutter(padding-right);
    margin-bottom: 4.2vw;

    .inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: $bright_green;
      border-radius: 18px;
      padding: 2.4vw 4.6vw;
    }
  }
  .footer-content {
    background-color: $soft_white;
    @include gutter(padding-left);
    @include gutter(padding-right);
    padding-top: 4.2vw;
    padding-bottom: 260px;

    .inner {
      display: flex;
      align-items: flex-start;

      .logo {
        flex-grow: 1;
        display: flex;
        flex-direction: column;

        a {
          cursor: pointer;
          align-self: flex-start;
          > img,
          > svg {
            display: block;
            width: 20vw;
            height: auto;
          }
        }

        .social-media-links {
          display: flex;
          margin-top: 60px;

          li {
            margin-right: 16px;

            a {
              &:hover {
                svg {
                  :deep(path) {
                    fill: $dark_evergreen;
                  }
                }
              }
              svg {
                width: auto;
                height: 27px;

                :deep(path) {
                  transition: 0.15s fill;
                }
              }
            }
          }
        }
      }

      .menu-1 {
        position: relative;
        padding-left: 24px;
        width: 33%;

        &:before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          width: 2px;
          height: 100%;
          background-color: $bright_green;
        }

        ul {
          li {
            margin: 0 0 0.25em;

            a {
              @include h4;
              line-height: 140%;
              text-decoration: none;
              color: $text_color;
              transition: 0.15s color;

              &:hover {
                color: $bright_green;
              }
            }
          }
        }

        span {
          display: block;
          font-family: "Gronland";
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 20px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: $bright_green;
          margin: 2em 0 1em;
        }
      }

      .menu-2 {
        position: relative;
        padding-left: 24px;
        width: 25%;

        &:before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          width: 2px;
          height: 100%;
          background-color: $bright_green;
        }

        ul {
          li {
            margin: 0 0 0.5em;

            a {
              font-family: "Gronland";
              font-style: normal;
              font-weight: 400;
              font-size: 28px;
              line-height: 150%;
              text-decoration: none;
              color: $text_color;
              transition: 0.15s color;

              &:hover {
                color: $bright_green;
              }
            }
          }
        }
      }
    }
  }
  .legal {
    background-color: $dark_evergreen;
    @include gutter(padding-left);
    @include gutter(padding-right);

    .inner {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 18px;
      color: $bright_green;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 17px 0 13px;

      a {
        text-decoration: none;
        color: $bright_green;

        &:hover {
          color: $light_green;
        }
      }

      span {
        margin-left: 2em;
      }
    }
  }
}
</style>
