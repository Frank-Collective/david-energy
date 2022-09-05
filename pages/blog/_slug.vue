<template>
  <GeneralContent
    v-if="post"
    :data="{
      date: formatDate(post.date),
      title: post.title,
      content: post.content,
      backgroundImage:
        post.featuredImage && post.featuredImage.node
          ? { sourceUrl: post.featuredImage.node.mediaItemUrl }
          : null,
      previousPost: post.previousPost,
      nextPost: post.nextPost,
    }"
    :is_post="true"
  />
</template>

<script>
import meta from "~/plugins/meta.js";
import { gql } from "nuxt-graphql-request";
import { basics, image, featured_image, link, tags_cats } from "~/gql/common";
import dayjs from "dayjs";

const gql_content = `
  id
  slug
  featuredImage {
    node {
      ${image}
    }
  }  
  title(format: RENDERED)
  content(format: RENDERED)
  excerpt
  date
  dateGmt
  postId
  SeoFields {
    seoTitle
    seoDescription
    seoImage {
      ${image}
    }
  }
  previousPost {
    node {
      title
      link
      slug
    }
  }
  nextPost {
    node {
      title
      link
      slug
    }
  }
`;
export default {
  data() {
    return {
      post: null,
    };
  },
  async fetch() {
    const query = gql`
      query MyQuery($slug: ID!) {
        post(id: $slug, idType: SLUG, asPreview: true) {
          ${gql_content}
          isPreview
          preview {
            node {
              ${gql_content}
            }
          }  
        }
      }
    `;
    const variables = { slug: this.$route.params.slug };
    let data = await this.$graphql.default.request(query, variables);
    if (data.post == null) {
      this.$nuxt.error({ statusCode: 404, message: "your error message" });
    }
    this.post = data.post;
    // console.log(this.post);
    if (this.$route.query && this.$route.query.preview && this.post.preview) {
      this.post = data.post.preview.node;
    }
  },
  head() {
    if (this.post && this.post.SeoFields) {
      return {
        title: this.post.SeoFields.seoTitle
          ? this.post.SeoFields.seoTitle
          : this.post.title,
        meta: meta(
          this.post.SeoFields,
          this.post.featuredImage,
          this.post.content,
          this.post.title
        ),
      };
    }
  },
  methods: {
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format("MMMM D, YYYY");
    },
  },
  mounted() {},
};
</script>
