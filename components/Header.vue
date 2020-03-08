<template>
  <div>
    <!-- ##### Header Area Start ##### -->
    <header class="header-area wow fadeInDown" data-wow-delay="0.2s">
      <div class="classy-nav-container breakpoint-off">
        <div class="container">
          <!-- Classy Menu -->
          <nav class="classy-navbar justify-content-between" id="dreamNav">
            <!-- Logo -->

            <nuxt-link class="nav-brand" to="/">
              <img src="/img/core-img/logo.png" alt="logo" /> Arifa.
            </nuxt-link>

            <!-- Navbar Toggler -->
            <div class="classy-navbar-toggler">
              <span class="navbarToggler">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>

            <!-- Menu -->
            <div class="classy-menu">
              <!-- close btn -->
              <div class="classycloseIcon">
                <div class="cross-wrap">
                  <span class="top"></span>
                  <span class="bottom"></span>
                </div>
              </div>

              <!-- Nav Start -->
              <div class="classynav">
                <ul id="nav">
                  <li>
                    <nuxt-link to="/">Home</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/about-us">About Us</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/services">Services</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/faq">FAQ</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/blog">Blog</nuxt-link>
                    <ul class="dropdown">
                      <li>
                        <nuxt-link to="/blog-single">Blog Detail</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <nuxt-link to="/contact">Contact</nuxt-link>
                  </li>
                </ul>

                <!-- Button -->
                <a href="#test-popup" class="open-popup-link btn login-btn mr-im">Log in</a>
                <a href="#signup-popup" class="open-signup-link btn login-btn">Signup</a>
              </div>
              <!-- Nav End -->
            </div>
          </nav>
        </div>
      </div>
    </header>
    <!-- ##### Header Area End ##### -->

    <!-- Login popup form  -->

    <div id="test-popup" class="white-popup mfp-hide">
      <div class="top-form-header">
        <h4>Login Form</h4>
      </div>
      <form action="#" method="post" id="main_contact_form" novalidate>
        <div class="row">
          <div class="col-12 col-md-12">
            <div class="group">
              <input type="text" name="name" id="name" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
            </div>
          </div>
          <div class="col-12 col-md-12">
            <div class="group">
              <input type="password" name="name" id="name" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password</label>
            </div>
          </div>

          <div class="col-12 col-sm-5 text-left">
            <button type="submit" class="btn dream-btn">Login</button>
          </div>
          <div class="col-12 col-sm-7 text-left">
            <p class="mb-0 mt-10">
              Don't have an account?
              <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </form>

      <div class="other-accounts text-center">
        <p class="w-text">Login with other account</p>
        <div class="footer-social-info">
          <a href="#">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-google-plus" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- signup popup form so: -->

    <div id="signup-popup" class="white-popup mfp-hide">
      <div class="top-form-header">
        <h4>Signup Form</h4>
      </div>
      <form action="#" method="post" id="main_contact_form" novalidate>
        <div class="row">
          <div class="col-12 col-md-12">
            <div class="group">
              <input type="text" name="name" id="name" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Name</label>
            </div>
          </div>
          <div class="col-12 col-md-12">
            <div class="group">
              <input type="text" name="name" id="name" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
            </div>
          </div>
          <div class="col-12 col-md-12">
            <div class="group">
              <input type="password" name="name" id="name" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password</label>
            </div>
          </div>
          <div class="col-12 col-md-12">
            <div class="group">
              <input type="password" name="name" id="name" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Confirm Password</label>
            </div>
          </div>

          <div class="col-12 col-sm-5 text-left">
            <button type="submit" class="btn dream-btn">Login</button>
          </div>
          <div class="col-12 col-sm-7 text-left">
            <p class="mb-0 mt-10">
              Don't have an account?
              <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </form>

      <div class="other-accounts text-center">
        <p class="w-text">Login with other account</p>
        <div class="footer-social-info">
          <a href="#">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-google-plus" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    // :: Nav Active Code
    if ($.fn.classyNav) {
      $("#dreamNav").classyNav({
        theme: "dark"
      });
    }

    // :: Sticky Active Code
    var $window = $(window);
    $window.on("scroll", function() {
      if ($window.scrollTop() > 0) {
        $(".header-area").addClass("sticky");
      } else {
        $(".header-area").removeClass("sticky");
      }
    });

    // :: onePageNav Active Code
    if ($.fn.onePageNav) {
      $("#nav").onePageNav({
        currentClass: "active",
        scrollSpeed: 1500,
        easing: "easeOutQuad"
      });
    }

    // :: Magnific-popup Active
    if ($.fn.magnificPopup) {
      $(".open-popup-link").magnificPopup({
        type: "inline",
        midClick: true
      });
      $(".open-signup-link").magnificPopup({
        type: "inline",
        midClick: true
      });
    }
  }
};
</script>

<style></style>
