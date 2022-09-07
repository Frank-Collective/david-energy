import { request, gql } from "graphql-request";

const generate_query = gql`
  query Pages {
    pages(first: 1000) {
      nodes {
        slug
      }
    }
  }
`;

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "david-energy",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "David Energy",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/global.scss"],
  // Sass resources available to VUE files
  styleResources: {
    scss: [
      "~/assets/styles/resources/_vars.scss",
      "~/assets/styles/resources/_mixins.scss",
      "~/assets/styles/resources/_typography_mixins.scss",
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/flickity", ssr: false },
    { src: "~/plugins/vuescrollto", ssr: false },
    "~/plugins/preview.client.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources", "nuxt-graphql-request"],

  graphql: {
    clients: {
      default: {
        endpoint: process.env.WP_GRAPHQL_ENDPOINT,
        options: {
          credentials: "include",
          mode: "cors",
          headers: {
            authorization: "Basic ZGVtbzplbmVyZ3k=",
          },
        },
      },
    },
  },
  generate: {
    fallback: true,
    interval: 50,
    concurrency: 10,
    routes() {
      return request(process.env.WP_GRAPHQL_ENDPOINT, generate_query).then(
        (res) => {
          return res.pages.nodes.map((page) => {
            return {
              route: `/${page.slug}`,
            };
          });
        }
      );
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
