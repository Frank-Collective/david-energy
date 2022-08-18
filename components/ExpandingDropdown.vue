<template>
  <div
    :id="make_id(data.title.toLowerCase())"
    v-if="data"
    class="expanding-dropdown"
    v-bind:class="[{ expanded: expanded }]"
  >
    <div
      class="expanding-dropdown-hit-area"
      v-on:click="
        (e) => openContent(e, '#' + make_id(data.title.toLowerCase()))
      "
      v-mouse-click="onMouseClick"
    ></div>
    <div class="inner">
      <div class="title">
        <h3>{{ data.title }}</h3>
        <img src="/images/icon-expanding-dropdown-down-arrow.svg" alt="" />
      </div>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
      >
        <div class="content" v-show="expanded">
          <div class="summary">
            <div class="spacer"></div>
            <p class="body-copy-small">
              {{ data.summary }}
            </p>
          </div>
          <div class="flex-content">
            <div class="spacer"></div>
            <div
              class="content-item"
              v-for="(content_item, index) in data.flex_content"
              :key="index"
            >
              <div class="paragraph" v-if="content_item.type == 'paragraph'">
                <p>{{ content_item.content }}</p>
              </div>
              <div
                class="list-item-text"
                v-if="content_item.type == 'list-item-text'"
              >
                <div class="indented-text-link--medium">
                  {{ content_item.title }}
                </div>
                <p>{{ content_item.copy }}</p>
              </div>
              <div
                class="list-item-icon"
                v-if="content_item.type == 'list-item-icon'"
              >
                <div class="icon"><img :src="content_item.icon" alt="" /></div>
                <div class="text">
                  <h4>{{ content_item.title }}</h4>
                  <p>{{ content_item.copy }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

Vue.directive("mouse-click", {
  bind(el, binding, vnode) {
    el.mouseClickEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.mouseClickEvent);
  },
  unbind(el) {
    document.body.removeEventListener("click", el.mouseClickEvent);
  },
});

export default {
  props: { data: Object },
  data() {
    return { expanded: false };
  },
  mounted() {
    if (this.data && this.data.expanded) {
      this.openContent();
    }
  },
  methods: {
    openContent: function (e, el) {
      this.expanded = true;
      if (this.data.callback != null) {
        this.data.callback(this.data.index);
      }
      // scroll to element
      if (this.expanded) {
        setTimeout(() => {
          this.$scrollTo(el, 1000, { offset: -120 });
        }, 500);
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
      if (e.target.classList.contains("expanding-dropdown-hit-area")) {
        this.closeContent();
      }
    },
    make_id(str) {
      str = str.replace(/[^\w\s]|_/g, "");
      return str.replace(/\s/g, "-");
    },
  },
};
</script>

<style lang="scss" scoped>
.expanding-dropdown {
  position: relative;
  border: 2px solid $bright_green;
  border-radius: 18px;
  background-color: $white;
  padding: 2.1vw 7.5vw;
  margin-bottom: 2.1vw;
  transition: 0.5s border-color, 0.15s box-shadow;

  &.expanded {
    border-color: transparent;
    box-shadow: 0px 0px 12px rgba(255, 229, 135, 0.7);

    .inner {
      .title {
        img {
          transform: rotate(180deg);
        }
      }
      .content {
        height: auto;
      }
    }
  }

  &:hover {
    border-color: transparent;
    box-shadow: 0px 0px 12px rgba(255, 229, 135, 0.7);

    .title {
      img {
        transform: rotate(180deg);
      }
    }
  }

  .expanding-dropdown-hit-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: pointer;
  }

  .inner {
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include body-copy-small;

      img {
        transition: 0.15s transform;
      }
    }

    .content {
      position: relative;
      height: 0px;
      overflow: hidden;
      transition: 0.5s;
      display: flex;
      justify-content: space-between;

      .spacer {
        height: 1vw;
      }

      .summary {
        width: 29%;
        flex-shrink: 0;

        p {
          @include body-copy-small;
        }
      }

      .flex-content {
        width: 60%;
        flex-shrink: 0;
        padding-right: 7vw;

        .content-item {
          .paragraph {
            p {
              @include body-copy-small;

              &:after {
                content: "";
                display: block;
                width: 100%;
                height: 1em;
              }
            }
          }

          .list-item-text {
            &:after {
              content: "";
              display: block;
              width: 100%;
              height: 1em;
            }

            .indented-text-link--medium {
              padding-left: 0.5em;
              color: $bright_green;

              &:before {
                opacity: 1;
              }
            }

            p {
              @include body-copy-small;
            }
          }

          .list-item-icon {
            display: flex;
            margin-bottom: 2em;

            .icon {
              flex-shrink: 0;
              width: 165px;
              display: flex;
              justify-content: center;

              img {
                display: block;
                width: auto;
                height: 5.8vw;
              }
            }

            .text {
              h4 {
                color: $bright_green;
                margin-bottom: 0.25em;
              }

              p {
                @include body-copy-small;
                margin-bottom: 0;

                &:after {
                  content: "";
                  display: block;
                  width: 100%;
                  height: 1em;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
