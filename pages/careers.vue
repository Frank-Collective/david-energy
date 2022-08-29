<template>
  <div id="top">
    <div class="careers-section-1">
      <div class="bg-image">
        <img class="desktop" src="/images/careers-section-1-bg.jpg" alt="" />
      </div>
      <div class="inner">
        <div class="copy">
          <h1>Supercharge your career</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nisi
            libero elit lacus, varius. Vivamus odio nisl et ac luctus nec. Id
            tortor sed vulputate suspendisse.
          </p>
        </div>

        <ul class="jobs-list">
          <li>
            <div class="job-info">
              <div class="job-title">Job Title</div>
              <div class="job-description">Lorem ipsum dolor sit amet</div>
            </div>
            <a class="button" href="#" target="_blank">Learn More</a>
          </li>
          <li>
            <div class="job-info">
              <div class="job-title">Job Title</div>
              <div class="job-description">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet
              </div>
            </div>
            <a class="button" href="#" target="_blank">Learn More</a>
          </li>
          <li>
            <div class="job-info">
              <div class="job-title">Job Title</div>
              <div class="job-description">Lorem ipsum dolor sit amet</div>
            </div>
            <a class="button" href="#" target="_blank">Learn More</a>
          </li>
          <li>
            <div class="job-info">
              <div class="job-title">Job Title</div>
              <div class="job-description">Lorem ipsum dolor sit amet</div>
            </div>
            <a class="button" href="#" target="_blank">Learn More</a>
          </li>
          <li>
            <div class="job-info">
              <div class="job-title">Job Title</div>
              <div class="job-description">Lorem ipsum dolor sit amet</div>
            </div>
            <a class="button" href="#" target="_blank">Learn More</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Careers",
    };
  },
};
</script>

<style lang="scss" scoped>
.careers-section-1 {
  position: relative;
  padding-top: 19vw;
  padding-bottom: 5vw;
  @include gutter(padding-left);
  @include gutter(padding-right);

  @include breakpoint(medium) {
    padding-bottom: 120px;
  }

  @include breakpoint(small) {
    padding-top: 100px;
    padding-bottom: 30px;
  }

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;

    @include breakpoint(small) {
      width: 110%;
    }

    img.desktop {
      display: block;
      width: 100%;
      height: auto;

      @include breakpoint(small) {
        display: none;
      }
    }

    img.mobile {
      display: none;
      width: 100%;
      height: auto;

      @include breakpoint(small) {
        display: block;
      }
    }
  }

  .inner {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    max-width: 1274px;

    @include breakpoint(small) {
    }

    .copy {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 3vw;

      @include breakpoint(small) {
        text-align: unset;
        align-items: flex-start;
      }

      h1 {
        @include clamp("font-size", 60px, 4.17vw, 80px);
        margin-bottom: 0.45em;

        @include breakpoint(small) {
          margin-bottom: 0.25em;
        }
      }

      p {
        @include body-copy-small;
        margin-bottom: 1.5em;
        max-width: 790px;

        @include breakpoint(small) {
          @include body-copy;
        }
      }
    }

    .jobs-list {
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid rgba($text_color, 0.5);
        padding-bottom: 28px;
        margin-bottom: 40px;

        @include breakpoint(small) {
          padding-bottom: 14px;
          margin-bottom: 29px;
          border-color: $bright_green;
        }

        .job-info {
          .job-title {
            font-size: 24px;
            margin-bottom: 0.5em;

            @include breakpoint(small) {
              line-height: 100%;
              font-size: 18px;
            }
          }
          .job-description {
            font-size: 16px;
            line-height: 160%;

            @include breakpoint(small) {
              font-size: 15px;
            }
          }
        }

        a {
          margin-left: 30px;
          flex-shrink: 0;

          @include breakpoint(small) {
            width: auto;
          }
        }
      }
    }
  }
}
</style>
