<script>
export default {
  data() {
    return {
      nbspSelectors: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "blockquote"],
      nbspWordMin: 6,
    };
  },
  mounted() {
    setTimeout(() => {
      if (document) {
        this.killWidows();
      }
    }, 1000);
  },
  methods: {
    killWidows() {
      console.log("killWidows");
      var that = this;
      this.nbspSelectors.forEach(function (selector) {
        var nbspElements = document.querySelectorAll(selector);
        nbspElements.forEach(function (element) {
          console.log(element);
          var wordCount = element.innerHTML.split(" ").length;
          console.log("wordCount: " + wordCount);
          if (
            wordCount >= that.nbspWordMin &&
            !element.classList.contains("keep-widow")
          ) {
            element.innerHTML = element.innerHTML.replace(
              / ([^ ]*)$/,
              "&nbsp;$1"
            );
          }
        });
      });
    },
  },
};
</script>
