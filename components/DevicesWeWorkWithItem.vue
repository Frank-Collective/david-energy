<template>
  <div
    v-if="data"
    class="devices-we-work-with-item"
    v-bind:class="[{ expanded: expanded }, { disabled: !data.logos }]"
  >
    <div
      class="devices-we-work-with-item-hit-area"
      v-on:click="toggleContent"
      v-if="data.logos"
    ></div>
    <div class="inner">
      <h3 class="title">
        {{ data.title }}
        <span v-if="!data.logos">Coming Soon</span>
        <img
          v-if="data.logos"
          src="/images/icon-dropdown-arrow-mobile.svg"
          alt=""
        />
      </h3>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
      >
        <div class="logos" v-show="expanded">
          <img
            v-for="(logo, index) in data.logos"
            :key="index"
            :src="logo.logo.mediaItemUrl"
            alt=""
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: { data: Object },
  data() {
    return { expanded: false };
  },
  mounted() {
    if (this.data && this.data.expanded) {
      this.toggleContent();
    }
  },
  methods: {
    toggleContent: function () {
      this.expanded = !this.expanded;
      if (this.data.callback != null) {
        this.data.callback(this.data.index);
      }
    },
    closeContent: function () {
      this.expanded = false;
    },
    beforeEnter: function (el) {
      el.style.height = "0";
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    afterEnter: function (el) {
      el.style.height = "auto";
    },
    beforeLeave: function (el) {
      const height = getComputedStyle(el).height;
      el.style.height = height;
      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(el).height;
    },
    leave: function (el) {
      el.style.height = 0;
    },
    onMouseClick(e) {
      if (e.target.classList.contains("devices-we-work-with-item-hit-area")) {
        this.closeContent();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.devices-we-work-with-item {
  position: relative;
  margin-bottom: 0.4em;

  &.disabled {
    pointer-events: none;
  }

  &.expanded {
    .inner {
      padding-bottom: 0;

      .title {
        img {
          transform: rotate(180deg);
        }
      }
      .logos {
        height: auto;
        padding-top: 20px;
      }
    }
  }

  .devices-we-work-with-item-hit-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: pointer;
  }

  .inner {
    background-color: $white;
    border: 1px solid $bright_green;
    border-radius: 8px;
    padding: 26px 24px 21px;

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        transform: rotate(0deg);
        transition: 0.15s transform;
      }

      span {
        font-family: "Gronland";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0.045em;
        text-transform: uppercase;
        color: $bright_green;
      }
    }

    .logos {
      position: relative;
      height: 0px;
      overflow: hidden;
      transition: 0.5s;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-top: 0;

      img {
        flex-shrink: 0;
        display: block;
        width: 33.333333%;
        max-width: 110px;
        height: auto;
        padding: 0 10px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
