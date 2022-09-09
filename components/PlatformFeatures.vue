<template>
  <div class="inner" v-if="data">
    <h4 v-if="data.copy" v-html="data.copy"></h4>

    <div class="cta" v-if="data.link">
      <nuxt-link class="button" :to="data.link.url">{{
        data.link.title
      }}</nuxt-link>
    </div>

    <div class="info-cards">
      <article v-for="(card, index) in data.infoCards" :key="index">
        <div class="image">
          <FadeImage
            v-if="card.image"
            :srcset="card.image.srcSet"
            :sizes="card.image.sizes"
            :src="card.image.mediaItemUrl"
            :alt="card.image.altText"
            :width="card.image.mediaDetails.width"
            :height="card.image.mediaDetails.height"
          />
        </div>
        <div class="copy">
          <h3>{{ card.title }}</h3>
          <p>
            {{ card.copy }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
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

  h4 {
    margin-bottom: 2.5em;

    @include breakpoint(small) {
      @include body-copy;
    }
  }

  .cta {
    width: 100%;
    max-width: 840px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-bottom: 7vw;

    a {
      width: 100%;
    }
  }

  .info-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    @include breakpoint(small) {
      flex-direction: column;
    }

    article {
      width: calc(50% - 20px);
      margin-bottom: 3vw;

      @include breakpoint(small) {
        width: 100%;
        height: auto;
        min-height: 0;
        margin-bottom: 40px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      .image {
        border-radius: 18px;
        border: 1px solid $bright_green;
        background-color: $white;
        padding: 4vw;
        overflow: hidden;

        @include breakpoint(small) {
          border-width: 1px;
          border-radius: 8px;
          padding: 0;
        }

        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }

      .copy {
        display: flex;
        align-items: flex-start;
        margin-top: 1em;

        @include breakpoint(small) {
          flex-direction: column;
          margin-top: 0.5em;
        }

        h3 {
          @include body-copy-small;
          color: $green;
          width: 34%;
          flex-shrink: 0;

          @include breakpoint(small) {
            width: auto;
            @include body-copy;
            color: $green;
            margin-bottom: 0.25em;
          }
        }

        p {
          font-family: "Gronland";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 160%;
          letter-spacing: -0.01em;
          padding-left: 3em;

          @include breakpoint(small) {
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
