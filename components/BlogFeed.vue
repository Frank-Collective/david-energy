<template>
  <div class="blog-feed">
    <div v-if="data && data.backgroundImage" class="bg-image">
      <img :src="data.backgroundImage.sourceUrl" alt="" />
    </div>
    <div class="inner">
      <div v-if="data && data.title" class="title">
        <h2>{{ data.title }}</h2>
      </div>
      <div class="info">
        <h3>
          <span v-if="search_term"> Results for: {{ search_term }}</span>
          <span v-if="search_year"> From: {{ search_year - 1 }}</span>
        </h3>
        <div v-if="posts.length == 0" class="no-results">
          <h2>Sorry, no posts found.</h2>
        </div>
      </div>
      <div class="grid">
        <article
          v-for="(post, index) in posts"
          :key="post.node.id + index"
          class="slide"
        >
          <Link
            :classes="''"
            :link="{
              url: '/blog/' + post.node.slug,
              title: '',
            }"
          />
          <div class="date">{{ formatDate(post.node.date) }}</div>
          <h4>{{ post.node.title }}</h4>
          <div class="read">Read Article</div>
        </article>

        <!-- Keep this ghost slide at the end -->
        <article class="slide ghost"></article>
        <!-- Keep this ghost slide at the end -->
      </div>
      <div v-if="pageInfo && pageInfo.hasNextPage && paginate" class="loadmore">
        <div class="load-more" @click="fetchMore()">
          <span class="button">Load More</span>
        </div>
      </div>
    </div>
    <div v-if="data && data.cta" class="cta">
      <Link
        :classes="'button'"
        :link="{
          url: data.cta.url,
          target: data.cta.target,
          title: data.cta.title,
        }"
      />
    </div>
  </div>
</template>

<script>
import { gql } from "nuxt-graphql-request";
import { basics, image, featured_image, tags_cats, link } from "~/gql/common";
import FadeImage from "~/components/FadeImage.vue";
import dayjs from "dayjs";

const query = gql`
  query PostsQuery(
      $first: Int
      $after: String
      $cat: String
      $catIn: [ID]
      $tag: String
      $term: String
      $notIn: [ID]
      $year: Int
    ){
    posts(first: $first, after: $after, where: {dateQuery: {before: {year: $year}}, orderby: {field: MENU_ORDER, order: ASC}, categoryName: $cat, search: $term, tag: $tag, categoryIn: $catIn, notIn: $notIn})  {
      edges {
        node {
          ${basics}
          date
          ${featured_image}
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }          
    }
  }
`;
export default {
  mounted() {},
  components: {
    FadeImage,
  },
  props: {
    is_page: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: null,
    },
    paginate: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      default: null,
    },
    category_in: {
      type: Array,
      default: null,
    },
    not_in: {
      type: Array,
      default: null,
    },
    search_term: {
      type: String,
      default: null,
    },
    search_year: {
      type: Number,
      default: 3000,
    },
    tag: {
      type: String,
      default: null,
    },
    posts_per_page: {
      type: Number,
      default: 30,
    },
    callback: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      posts: null,
      pageInfo: null,
    };
  },
  watch: {
    category: function (newVal, oldVal) {
      this.$fetch();
    },
    search_term: function (newVal, oldVal) {
      this.$fetch();
    },
    search_year: function (newVal, oldVal) {
      this.$fetch();
    },
  },
  methods: {
    async fetchMore() {
      const variables = {
        first: this.posts_per_page,
        after: this.pageInfo.endCursor,
        cat: this.category,
        catIn: this.category_in,
        tag: this.tag,
        term: this.search_term,
        notIn: this.not_in,
        year: this.search_year || 3000,
      };
      const data = await this.$graphql.default.request(query, variables);
      this.posts = [...this.posts, ...data.posts.edges];
      this.pageInfo = data.posts.pageInfo;
      console.log("FETCH MORE");
    },
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format("MMMM D, YYYY");
    },
  },
  async fetch() {
    const variables = {
      first: this.posts_per_page,
      after: null,
      cat: this.category,
      catIn: this.category_in,
      tag: this.tag,
      term: this.search_term,
      notIn: this.not_in,
      year: this.search_year || 3000,
    };
    const data = await this.$graphql.default.request(query, variables);
    this.posts = data.posts.edges;
    // console.log("posts:", this.posts);
    console.log("FETCH IT");

    this.pageInfo = data.posts.pageInfo;
  },
};
</script>

<style lang="scss" scoped>
.blog-feed {
  position: relative;

  &.bg--purple {
    background-color: $dark-purple;
  }
  &.bg--black {
    background-color: $black;
  }
  &.bg--white {
    background-color: $white;
    > .inner {
      .title,
      .grid .slide {
        color: $black;
        &:hover {
          background-color: $grey;
        }
      }
    }
  }

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  > .inner {
    position: relative;

    padding-bottom: 5vw;

    @include breakpoint(small) {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    .title {
      @include gutter(padding-left);
      color: $white;
      display: flex;
      align-items: center;
      margin-bottom: 60px;
      text-transform: uppercase;

      @include breakpoint(small) {
        margin-bottom: 30px;
      }

      h2 {
        margin: 0;
      }

      &:after {
        content: "";
        position: relative;
        display: block;
        @include clamp("width", 80px, 13.9vw, 200px);
        height: 2px;
        background-color: $purple;
        margin-left: 20px;

        @include breakpoint(medium) {
          margin-left: 15px;
        }
      }
    }

    .grid {
      @include gutter(padding-left);
      @include gutter(padding-right);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @include breakpoint(small) {
        margin: 0 0 0;
      }

      .slide {
        display: flex;
        flex-direction: column;
        position: relative;
        width: calc(33.333333% - 18px);
        flex-shrink: 0;
        background-color: $white;
        border-radius: 20px;
        border: 2px solid $bright_green;
        padding: 1em;
        overflow: hidden;
        color: $text_color;
        margin-bottom: 30px;
        transition: 0.5s border-color, 0.15s box-shadow, 0.15s padding-bottom;

        @include breakpoint(medium) {
          width: calc(50% - 18px);
        }

        @include breakpoint(small) {
          width: 100%;
        }

        &.ghost {
          opacity: 0;
          pointer-events: none;
          padding: 0;
          margin: 0;
          border: none;
        }

        a {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: all 0.2s ease-in-out;

          img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .date {
          position: relative;
          display: flex;
          align-items: center;
          font-size: 14px;
          margin-bottom: 0.5em;

          @include breakpoint(small) {
            font-size: 14px;
          }
        }

        h4 {
          color: $bright_green;
          position: relative;
          flex-grow: 1;
          margin-bottom: 0.5em;
        }

        .read {
          font-family: "Gronland";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 111%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
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

        &:hover {
          border-color: transparent;
          box-shadow: 0px 0px 12px rgba(255, 229, 135, 0.7);

          .read {
            img {
              transform: translateX(10px);
            }
          }
        }
      }
    }
  }

  .cta {
    position: absolute;
    top: 10vw;
    @include gutter(right);

    @include breakpoint(small) {
      right: auto;
      top: auto;
      left: 30px;
      bottom: 60px;
    }
  }
}
.info {
  @include gutter(padding-left);
  @include gutter(padding-right);
  //margin: 2vw 0;
  color: $white;
}
.loadmore {
  display: flex;
  justify-content: flex-end;
  @include gutter(padding-left);
  @include gutter(padding-right);
  margin: 2vw 0;

  @include breakpoint(small) {
    justify-content: flex-start;
  }

  .load-more {
  }
}
</style>
