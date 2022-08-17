<template>
  <div class="inner">
    <h4>
      Our powerful platform is the one-stop shop for all your energy needs.
      We’ve combined intelligent DER management, deep insights & analytics, and
      consolidated billing into one intuitive workspace.
    </h4>

    <div class="cta">
      <nuxt-link class="button" to="">See Plans</nuxt-link>
    </div>

    <div class="info-cards">
      <article>
        <div class="image">
          <img src="/images/fpo-feature.jpg" alt="" />
        </div>
        <div class="copy">
          <h3>Reduce multi-location operational complexity.</h3>
          <p>
            Easily manage all the devices across your portfolio from one
            dashboard. Set schedules, monitor each location’s climate, and
            override onsite changes remotely.
          </p>
        </div>
      </article>
      <article>
        <div class="image">
          <img src="/images/fpo-feature.jpg" alt="" />
        </div>
        <div class="copy">
          <h3>Simplify energy finances</h3>
          <p>
            Easily manage billing for all your locations, audit your bill, and
            reduce your risk of late payment with a modern centralized billing
            experience.
          </p>
        </div>
      </article>
      <article>
        <div class="image">
          <img src="/images/fpo-feature.jpg" alt="" />
        </div>
        <div class="copy">
          <h3>Earn revenue and lower your bills</h3>
          <p>
            Save 10-15% on your electricity by optimizing your energy
            consumption with direct, automated management of smart devices. We
            integrate with thermostats, batteries, EV chargers, and more, and
            automatically enroll you in lucrative energy market programs.
          </p>
        </div>
      </article>
      <article>
        <div class="image">
          <img src="/images/fpo-feature.jpg" alt="" />
        </div>
        <div class="copy">
          <h3>Work with a supplier who has your back</h3>
          <p>
            We only profit when you save. This aligned incentive structure helps
            protect you from energy market risk and month-to-month fluctuations
            in your bill.
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inner {
  position: relative;
  display: flex;
  flex-direction: column;
  @include gutter(padding-left);
  @include gutter(padding-right);

  @include breakpoint(small) {
    padding: 0;
  }

  h4 {
    margin-bottom: 2.5em;
  }

  .cta {
    width: 100%;
    max-width: 840px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-bottom: 7vw;

    a {
      width: 100%;
    }
  }

  .info-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    @include breakpoint(small) {
      flex-direction: column;
    }

    article {
      width: calc(50% - 20px);
      margin-bottom: 3vw;

      @include breakpoint(small) {
        width: 100%;
        height: auto;
        min-height: 0;
      }

      .image {
        border-radius: 18px;
        border: 2px solid $bright_green;
        background-color: $white;
        padding: 4vw;

        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }

      .copy {
        display: flex;
        align-items: flex-start;
        margin-top: 1em;

        h3 {
          @include body-copy-small;
          color: $green;
          width: 34%;
          flex-shrink: 0;
        }

        p {
          font-family: "Gronland";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 160%;
          letter-spacing: -0.01em;
          padding-left: 3em;
        }
      }
    }
  }
}
</style>
