<template>
  <!-- Scroll To Element Using Hash -->
  <a
    v-if="link.url && link.url.substr(0, 1) === '#'"
    v-scroll-to="{ el: link.url, offset: -50 }"
    :class="classes"
    >{{ link.title }}</a
  >

  <!-- Scroll To Element Using Full URL + Hash on same page -->
  <a
    v-else-if="
      link.url &&
      link.url.includes('#') &&
      $route.path == link.url.substr(0, link.url.indexOf('#'))
    "
    v-scroll-to="{
      el: link.url.substr(link.url.indexOf('#')),
      offset: -50,
    }"
    :class="classes"
    >{{ link.title }}</a
  >

  <!-- Internal link -->
  <nuxt-link
    v-else-if="link.target != '_blank' && link.url"
    :to="link.url"
    :target="link.target"
    :class="classes"
    >{{ link.title }}</nuxt-link
  >

  <!-- External link -->
  <a v-else :class="classes" :href="link.url" :target="link.target">{{
    link.title
  }}</a>
</template>

<script>
export default {
  props: {
    link: Object,
    classes: String,
  },
};
</script>
