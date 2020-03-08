<template>
  <!-- ##### FAQ & Timeline Area Start ##### -->
  <div class="faq-timeline-area section-padding-100">
    <div class="container">
      <div class="section-heading text-center">
        <!-- Dream Dots -->
        <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2 class="wow fadeInUp" data-wow-delay="0.3s">Frequently Asked Questions</h2>
        <p
          class="wow fadeInUp"
          data-wow-delay="0.4s"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
      </div>

      <div class="row">
        <div class="col-12 col-lg-6 col-md-12">
          <div class="dream-faq-area">
            <dl>
              <!-- Single FAQ Area -->
              <dt
                class="wave wow fadeInUp"
                data-wow-delay="0.2s"
              >What are the objectives of this startup?</dt>
              <dd class="wow fadeInUp" data-wow-delay="0.3s">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
              </dd>
              <!-- Single FAQ Area -->
              <dt class="wave wow fadeInUp" data-wow-delay="0.3s">What is Token Sale and pre-sale?</dt>
              <dd>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
              </dd>
              <!-- Single FAQ Area -->
              <dt
                class="wave wow fadeInUp"
                data-wow-delay="0.4s"
              >What is the bebefits we get on contribution?</dt>
              <dd>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
              </dd>
              <!-- Single FAQ Area -->
              <dt class="wave wow fadeInUp" data-wow-delay="0.5s">how may I take part in pre-sale?</dt>
              <dd>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
              </dd>
            </dl>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <img src="/img/svg/faq.svg" class="img-responsive center-block" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faq",
  mounted() {
    var dd = $("dd");
    dd.filter(":nth-child(n+3)").hide();
    $("dl").on("click", "dt", function() {
      $(this)
        .next()
        .slideDown(500)
        .siblings("dd")
        .slideUp(500);
    });
  }
};
</script>