<template>
  <div
    class="breadcumb-area clearfix dzsparallaxer auto-init mode-scroll animation-engine-js dzsprx-readyall"
    data-options="{direction: normal}"
  >
    <div
      class="divimage dzsparallaxer--target"
      style="width: 101%; height: 130%; background-image: url(/img/bg-img/bg-2.jpg); transform: translate3d(0px, -62.9251px, 0px);"
    ></div>
    <!-- breadcumb content -->
    <div class="breadcumb-content">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <nav aria-label="breadcrumb" class="breadcumb--con text-center">
              <h2
                class="w-text title wow fadeInUp"
                data-wow-delay="0.2s"
                style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
              >{{ title }}</h2>
              <ol
                class="breadcrumb justify-content-center wow fadeInUp"
                data-wow-delay="0.4s"
                style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
              >
                <li class="breadcrumb-item">
                  <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style>
</style>