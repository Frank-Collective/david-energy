<template>
  <div class="inner" v-if="data">
    <div class="title">
      <h3 v-if="data.title" v-html="data.title"></h3>
    </div>
    <div class="content">
      <div class="copy">
        <div class="section">
          <p>
            {{ data.copy }}
          </p>
          <nuxt-link
            v-for="(link, index) in data.links"
            :key="index"
            :to="link.link.url"
            class="button"
          >
            {{ link.link.title }}</nuxt-link
          >
        </div>
      </div>
      <div class="graph">
        <FadeImage
          v-if="data.image"
          :srcset="data.image.srcSet"
          :sizes="data.image.sizes"
          :src="data.image.mediaItemUrl"
          :alt="data.image.altText"
          :width="data.image.mediaDetails.width"
          :height="data.image.mediaDetails.height"
        />
      </div>
      <div class="mobile-ctas">
        <nuxt-link
          v-for="(link, index) in data.links"
          :key="index"
          :to="link.link.url"
          class="button"
        >
          {{ link.link.title }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props: { data: Object },
};
</script>

<style lang="scss" scoped>
.inner {
  position: relative;
  display: flex;
  flex-direction: column;
  @include gutter(padding-left);
  @include gutter(padding-right);
  @include max-width;

  z-index: 1;

  @include breakpoint(small) {
    flex-direction: column;
  }

  .title {
    margin-bottom: 3.5vw;

    @include breakpoint(small) {
      order: 1;
    }

    h3 {
      @include breakpoint(small) {
        @include h2;
      }

      br {
        @include breakpoint(small) {
          display: none;
        }
      }
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-shrink: 0;

    @include breakpoint(small) {
      flex-direction: column;
      order: 3;
    }

    .copy {
      padding-right: 5%;

      @include breakpoint(small) {
        padding-right: 0;
      }

      .section {
        h3 {
          margin-bottom: 0.35em;

          @include breakpoint(small) {
            @include h2;
          }

          br {
            @include breakpoint(small) {
              display: none;
            }
          }
        }

        p {
          margin-bottom: 1em;

          @include breakpoint(small) {
            @include body-copy-small;
          }
        }

        a {
          margin-bottom: 1em;

          @include breakpoint(small) {
            display: none;
          }
        }
      }
    }
  }

  .graph {
    position: relative;
    width: 66%;
    flex-shrink: 0;
    padding-bottom: 32%;

    @include breakpoint(small) {
      width: 100%;
      padding-bottom: 44%;
    }

    img {
      position: absolute;
      display: block;
      width: 100%;
      height: auto;
      top: 0;
      left: 0;
    }
  }

  .mobile-ctas {
    display: none;
    margin-top: 25px;

    @include breakpoint(small) {
      display: flex;
      flex-direction: column;
    }

    a {
      margin-bottom: 1em;
    }
  }
}
</style>
