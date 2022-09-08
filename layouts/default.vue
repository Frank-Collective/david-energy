<template>
  <div class="page-wrapper">
    <Nav />
    <div>
      <div class="inner">
        <div class="page-content">
          <Nuxt />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import VueScrollTo from "vue-scrollto";

export default {
  mounted() {
    // Safari needs this for initial page load w/ anchors
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        if (window.location.hash != "") {
          VueScrollTo.scrollTo(window.location.hash, 500);
        }
      }
    };
  },
};
</script>

<style lang="scss">
.page-wrapper {
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;

  .page-content {
    width: 100%;
    min-height: 100vh;

    .inner {
      margin: 0 auto;
    }
  }
}
</style>
