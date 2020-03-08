<template>
  <div>
    <section class="error-section inner-wrapper">
      <div class="container">
        <div class="content">
          <h1>404</h1>
          <h2>Oops! That page can’t be found</h2>
          <div class="text">Sorry, but the page you are looking for does not existing</div>
          <nuxt-link class="default-btn" to="/">
            <span class="txt">Go to home page</span>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    components: {}
  };
</script>

<style scoped>
  .error-section .content {
    position: relative;
    text-align: center;
  }
  .error-section.inner-wrapper {
    margin-top: 200px;
  }
  .error-section .text {
    position: relative;
    color: #222222;
    font-size: 20px;
    font-weight: 300;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .default-btn {
    font-size: 16px;
    color: #ffffff;
    background-color: #21bcd8;
    padding: 16px 35px 18px;
    line-height: 1;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    z-index: 1;
    overflow: hidden;
    -webkit-box-shadow: 8px 8px 0px rgba(195, 242, 250, 0.8);
    box-shadow: 8px 8px 0px rgba(195, 242, 250, 0.8);
    --hue: 190;
    text-transform: capitalize;
    border: 1px solid transparent;
  }
  .error-section h1 {
    position: relative;
    color: #222222;
    font-size: 180px;
    font-weight: 600;
    line-height: 1em;
    margin-bottom: 10px;
  }

</style>
