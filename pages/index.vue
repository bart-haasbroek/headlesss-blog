<template>
  <div class="page-wrapper">
    <page-header
      title="De titel"
      :image="pageContent.featured_image_url"
    ></page-header>
    <div class="content-wrapper">
      <app-grid :columns="3">
        <div>ddssd</div>
        <div>ddssd</div>
        <div>ddssd</div>
      </app-grid>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at
        auctor nunc, a dignissim erat. Fusce ornare porta placerat. Nam ac
        viverra mi. Aliquam at malesuada ante. Integer laoreet tristique quam,
        vel imperdiet nibh dignissim accumsan. Fusce a facilisis ligula. Duis
        sodales eros nunc, eu finibus odio dapibus quis. Sed fringilla nisi
        tortor, a blandit orci elementum eu. Pellentesque finibus elit lectus,
        nec efficitur risus maximus dictum. In mollis velit quis justo
        vestibulum, id varius urna vestibulum. Nam eleifend viverra risus, id
        feugiat dui semper vitae. In iaculis dolor a nunc rhoncus elementum.
        Maecenas sollicitudin semper scelerisque. Integer sit amet porta lectus.
        Curabitur hendrerit semper ex. Ut non lectus velit. Aliquam accumsan
        faucibus augue, non placerat est aliquet sit amet. Curabitur nec rhoncus
        est, non gravida odio. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Integer et urna odio. Donec
        aliquet est vel erat vehicula, id sagittis diam suscipit. Praesent eros
        magna, lobortis et ipsum vitae, semper congue orci. Proin vel est nibh.
        Nam vulputate odio pretium orci dictum vehicula. Praesent a sagittis
        purus. Sed eget egestas risus. Nulla a vestibulum lectus, at commodo
        dui. Pellentesque accumsan libero tortor, egestas dapibus neque
        fermentum convallis. Proin eu vehicula nisi. Donec non dui congue,
        gravida felis eu, venenatis est. Morbi sed elit sed ex semper ultricies
        tristique a odio. Donec pulvinar eros mi, id luctus quam iaculis ac.
        Maecenas non viverra sem. Praesent suscipit neque dignissim, consequat
        nunc ac, hendrerit urna. Aenean a consequat velit, quis cursus orci. Sed
        vitae egestas diam. Suspendisse scelerisque cursus scelerisque. Etiam at
        velit ut tellus tempus semper non vel felis. Phasellus dapibus, nibh non
        placerat semper, lectus nibh facilisis elit, egestas fringilla risus
        nulla eu tellus. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Curabitur consectetur porttitor tortor, id aliquam sapien semper
        sed. Nullam quis justo vel lectus cursus eleifend a ut risus. Quisque
        finibus sem ipsum, volutpat placerat ante dapibus quis. Nam at aliquet
        metus. Cras odio est, tristique a vestibulum in, auctor vel diam. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Duis quis volutpat turpis, sit amet malesuada lacus.
        Nulla at porta magna, bibendum facilisis purus. Aenean elementum enim
        vel felis sagittis posuere. Etiam a lacus vel nunc commodo efficitur sed
        at tortor. Fusce massa leo, vestibulum nec eleifend vel, volutpat et mi.
        Duis ultrices dignissim tempor. Pellentesque eleifend, lacus a rutrum
        mollis, nulla enim lobortis ante, id dignissim urna massa id leo.
        Vivamus et tortor lectus. Quisque rhoncus mattis congue. Aliquam at
        augue vitae justo consequat blandit.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "basic",
  computed: {
    pageContent() {
      return this.$store.getters.getPageBySlug("home");
    },
  },
};
</script>
