<template>
  <div class="inner" v-if="data">
    <div class="title">
      <h3 v-if="data.title" v-html="data.title"></h3>
    </div>
    <div class="content">
      <div class="copy">
        <div class="section">
          <p v-if="data.copy" v-html="data.copy"></p>
          <Link
            v-for="(link, index) in data.links"
            :key="index"
            :classes="'button'"
            :link="{
              url: link.link.title,
              target: link.link.target,
              title: link.link.title,
            }"
          />
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
      <div class="mobile-graph">
        <div class="left">
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
        <div class="right">
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
      </div>
      <div class="mobile-ctas">
        <Link
          v-for="(link, index) in data.links"
          :key="index"
          :classes="'button'"
          :link="{
            url: link.link.title,
            target: link.link.target,
            title: link.link.title,
          }"
        />
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
    max-width: 850px;
    margin-bottom: 3.5vw;

    @include breakpoint(small) {
      order: 1;
    }

    :deep(h3) {
      @include breakpoint(small) {
        @include h2;
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
        :deep(h3) {
          margin-bottom: 0.35em;

          @include breakpoint(small) {
            @include h2;
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
      display: none;
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

  .mobile-graph {
    position: relative;
    display: none;
    width: calc(100% + 52px);
    @include neg-gutter(left);
    margin: 30px 0 0;

    @include breakpoint(small) {
      display: flex;
    }

    div img {
      position: relative;
      width: 143vw;
      height: auto;
    }

    .left {
      flex-shrink: 0;
      width: 30%;
      overflow: hidden;

      img {
        left: -6vw;
      }
    }

    .right {
      overflow-x: scroll;
      margin-right: -53vw;

      img {
        left: -40vw;
      }
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
