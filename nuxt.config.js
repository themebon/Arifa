export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700"
      },
      { rel: "stylesheet", href: "/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/css/animate.css" },
      { rel: "stylesheet", href: "/css/about-sonar.css" },
      { rel: "stylesheet", href: "/css/classy-nav.min.css" },
      { rel: "stylesheet", href: "/css/dzsparallaxer.css" },
      { rel: "stylesheet", href: "/css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "/css/magnific-popup.css" },
      { rel: "stylesheet", href: "/css/animated-headline.css" },
      { rel: "stylesheet", href: "/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/css/themify-icons.css" },
      { rel: "stylesheet", href: "/css/style.css" },
      { rel: "stylesheet", href: "/css/responsive.css" }
    ],

    script: [
      { src: "/js/jquery.min.js", type: "text/javascript", body: true },
      {
        src: "/js/popper.min.js",
        type: "text/javascript",
        body: true
      },
      { src: "/js/bootstrap.min.js", type: "text/javascript", body: true },
      { src: "/js/plugins.js", type: "text/javascript", body: true },
      { src: "/js/dzsparallaxer.js", type: "text/javascript", body: true },
      { src: "/js/jquery.syotimer.min.js", type: "text/javascript", body: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {},
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  modules: ["@bazzite/nuxt-optimized-images"],
  optimizedImages: {
    optimizeImages: true
  },

  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
