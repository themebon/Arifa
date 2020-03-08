<template>
  <div>
    <section class="demo-video feat section-padding-0-100 bub-right">
      <div class="container">
        <div class="section-heading text-center">
          <!-- Dream Dots -->
          <div class="dream-dots justify-content-center fadeInUp" data-wow-delay="0.2s">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h2 class="d-blue fadeInUp" data-wow-delay="0.3s">Watch our demo video</h2>
          <p
            class="fadeInUp"
            data-wow-delay="0.4s"
            style="color:#888"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
        </div>
        <div class="row align-items-center">
          <!-- Welcome Video Area -->
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="welcome-video-area fadeInUp" data-wow-delay="0.5s">
              <!-- Welcome Thumbnail -->
              <div class="welcome-thumb">
                <img src="/img/bg-img/bg-4.jpg" alt />
              </div>
              <!-- Video Icon -->
              <div class="video-icon">
                <a
                  href="https://www.youtube.com/watch?v=9No-FiEInLA"
                  class="btn dream-btn video-btn"
                  id="videobtn"
                >
                  <i class="fa fa-play"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="services-block-four mt-s">
              <div class="inner-box">
                <div class="icon-img-box">
                  <img src="/img/icons/d1.png" alt />
                </div>
                <h3>
                  <a href="#">Lots of Pre-made Widgets</a>
                </h3>
                <div
                  class="text"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.</div>
              </div>
            </div>
            <div class="services-block-four">
              <div class="inner-box">
                <div class="icon-img-box">
                  <img src="/img/icons/d2.png" alt />
                </div>
                <h3>
                  <a href="#">Fully Responsive</a>
                </h3>
                <div
                  class="text"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit skaj gjska consectetur adipisicing elit.</div>
              </div>
            </div>
            <div class="services-block-four" style="margin-bottom:0">
              <div class="inner-box">
                <div class="icon-img-box">
                  <img src="/img/icons/d3.png" alt />
                </div>
                <h3>
                  <a href="#">Lots of ilustration Options</a>
                </h3>
                <div
                  class="text"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: "Video",
  mounted() {
    // :: Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
      $("#videobtn").magnificPopup({
        type: "iframe"
      });
    }
  }
};
</script>