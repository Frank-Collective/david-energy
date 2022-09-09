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
            <p v-if="data.summary">
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
              <div
                class="paragraph"
                v-if="content_item.fieldGroupName.includes('Paragraph')"
              >
                <p>{{ content_item.copy }}</p>
              </div>
              <div
                class="list-item-text"
                v-if="content_item.fieldGroupName.includes('ListItemText')"
              >
                <div class="indented-text-link--medium">
                  {{ content_item.title }}
                </div>
                <p>{{ content_item.copy }}</p>
              </div>
              <div
                class="list-item-icon"
                v-if="content_item.fieldGroupName.includes('ListItemIcon')"
              >
                <div class="icon">
                  <img :src="content_item.icon.mediaItemUrl" alt="" />
                </div>
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
    if (document) {
      document.body.addEventListener("click", el.mouseClickEvent);
    }
  },
  unbind(el) {
    if (document) {
      document.body.removeEventListener("click", el.mouseClickEvent);
    }
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
    toggleContent: function () {
      this.expanded = !this.expanded;
    },
    openContent: function (e, el) {
      if (this.expanded) {
        this.closeContent();
      } else {
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

  @include breakpoint(small) {
    border-width: 1px;
    border-radius: 8px;
    padding: 19px 17px 15px;
  }

  &:hover {
    border-color: transparent;
    box-shadow: 0px 0px 12px rgba(255, 229, 135, 0.7);

    @include breakpoint(small) {
      border-color: $bright_green;
      box-shadow: none;
    }

    .title {
      img {
        transform: rotate(180deg);
      }
    }
  }

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

      h3 {
        @include breakpoint(small) {
          @include h4;
        }
      }

      img {
        transition: 0.15s transform;

        @include breakpoint(small) {
          width: 20px;
          height: 11px;
        }
      }
    }

    .content {
      position: relative;
      height: 0px;
      overflow: hidden;
      transition: 0.5s;
      display: flex;
      justify-content: space-between;

      @include breakpoint(small) {
        flex-direction: column;
      }

      .spacer {
        height: 1vw;

        @include breakpoint(small) {
          height: 18px;
        }
      }

      .summary {
        width: 29%;
        flex-shrink: 0;

        @include breakpoint(small) {
          width: auto;
        }

        p {
          @include body-copy-small;
        }
      }

      .flex-content {
        width: 60%;
        flex-shrink: 0;
        padding-right: 7vw;

        @include breakpoint(small) {
          width: auto;
          padding: 0;
        }

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

              @include breakpoint(small) {
                font-size: 18px;
                margin-bottom: 0.25em;
              }

              &:before {
                opacity: 1;

                @include breakpoint(small) {
                  width: 4px;
                  height: 7px;
                }
              }
            }

            p {
              @include body-copy-small;

              @include breakpoint(small) {
                font-size: 15px;
              }
            }
          }

          .list-item-icon {
            display: flex;
            margin-bottom: 2em;

            @include breakpoint(small) {
              margin-bottom: 0.5em;
            }

            .icon {
              flex-shrink: 0;
              width: 165px;
              display: flex;
              justify-content: center;

              @include breakpoint(small) {
                width: 70px;
                margin-right: 20px;
              }

              img {
                display: block;
                width: auto;
                height: 5.8vw;

                @include breakpoint(small) {
                  height: 60px;
                }
              }
            }

            .text {
              h4 {
                color: $bright_green;
                margin-bottom: 0.25em;

                @include breakpoint(small) {
                  font-size: 18px;
                }
              }

              p {
                @include body-copy-small;
                margin-bottom: 0;

                @include breakpoint(small) {
                  font-size: 15px;
                }

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
