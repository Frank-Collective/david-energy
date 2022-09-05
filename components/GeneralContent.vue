<template>
  <div class="general-content">
    <div v-if="data.backgroundImage" class="hero">
      <img :src="data.backgroundImage.sourceUrl" alt="" />
    </div>
    <div class="inner" v-bind:class="`bg--${data.contentBackground}`">
      <div class="wysiwyg">
        <div v-if="data.date" class="date">{{ data.date }}</div>
        <h1 v-if="data.title">{{ data.title }}</h1>
        <div v-html="data.content"></div>
      </div>
      <div class="prev-next-posts">
        <Link
          v-if="data.previousPost"
          :classes="'button'"
          :link="{
            url: '/blog/' + data.previousPost.node.slug,
            title: 'Previous',
          }"
        />
        <div class="spacer"></div>
        <Link
          v-if="data.nextPost"
          :classes="'button'"
          :link="{
            url: '/blog/' + data.nextPost.node.slug,
            title: 'Next',
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
  props: {
    data: {
      type: Object,
      default: null,
    },
    is_post: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.general-content {
  position: relative;
  padding-top: 160px;
  padding-bottom: 100px;

  .hero {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 46.88vw;
    max-height: 675px;
    min-height: 400px;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .inner {
    position: relative;
    background-color: $white;
    border-radius: 20px;
    border: 2px solid $bright_green;
    padding: 6vw 7vw;
    margin: 0 6vw;

    @include breakpoint(small) {
      margin: 0;
      border-radius: 0;
      border-left: none;
      border-right: none;

      @include gutter(padding-left);
      @include gutter(padding-right);
    }

    .wysiwyg {
      :deep(h1),
      :deep(h2),
      :deep(h3),
      :deep(h4),
      :deep(h5),
      :deep(h6) {
        margin-bottom: 0.5em;
      }

      :deep(p) {
        margin-bottom: 1em;
      }

      .date {
        display: flex;
        align-items: center;
        font-size: 20px;
        margin-bottom: 2em;
      }
    }

    .prev-next-posts {
      display: flex;
      justify-content: space-between;
      margin-top: 3em;

      .spacer {
        flex-grow: 1;
      }
    }
  }
}
</style>
