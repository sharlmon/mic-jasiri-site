<script setup lang="ts">
usePageSeo({
  path: '/services/',
  title: 'Services | Mic-Jasiri Productions',
  description: 'Production services from Mic-Jasiri Productions in Nairobi.',
})
</script>

<template>
  <main id="main">
<section class="hero page-hero services-hero">
<div class="hero-media">
<img width="2800" height="2045" src="/REMY4390.jpg" alt="Film crew recording an artisan in his workshop">
</div>
<div class="hero-content reveal">
<div class="eyebrow">Services</div>
<h1>From concept to <em>delivery.</em>
</h1>
</div>
</section>
<section class="section alt image-atmosphere">
<div class="section-heading reveal">
<div>
<div class="kicker">What we do</div>
<h2>Our <em>Services.</em>
</h2>
</div>
</div>
<div class="service-visual-grid">
<button class="service-visual-card reveal" type="button" data-service-open="commercial" aria-haspopup="dialog">
<img width="1600" height="1066" src="/assets/services/digital-marketing.jpg" alt="Gimbal-mounted camera with monitor filming a restaurant shoot" loading="lazy">
<div class="service-visual-copy">
<span>01</span>
<h3>Digital Marketing &amp; Strategy</h3>
<p>Brand films and platform-ready content shaped to capture attention across digital touchpoints.</p>
<div class="service-card-hover"><div class="service-card-tabs"><span>Brand films</span><span>Campaigns</span><span>Social content</span></div><strong>Explore the service <b>↗</b></strong></div>
</div>
</button>
<button class="service-visual-card reveal" type="button" data-service-open="events" aria-haspopup="dialog">
<img width="3936" height="2624" src="/live.jpg" alt="Live event production" loading="lazy">
<div class="service-visual-copy">
<span>02</span>
<h3>Events &amp; Live</h3>
<p>Multi-camera coverage, live streaming, highlights and interviews for events and conferences.</p>
<div class="service-card-hover"><div class="service-card-tabs"><span>Conferences</span><span>Livestreams</span><span>Concerts</span></div><strong>Explore the service <b>↗</b></strong></div>
</div>
</button>
<button class="service-visual-card reveal" type="button" data-service-open="film" aria-haspopup="dialog">
<img width="1600" height="968" src="/service2.jpeg" alt="Camera filming an interview subject" loading="lazy">
<div class="service-visual-copy">
<span>03</span>
<h3>Interview &amp; Documentary</h3>
<p>Research-led documentary storytelling and polished interviews built around authentic voices.</p>
<div class="service-card-hover"><div class="service-card-tabs"><span>Documentaries</span><span>Interviews</span><span>Post-production</span></div><strong>Explore the service <b>↗</b></strong></div>
</div>
</button>
<button class="service-visual-card reveal" type="button" data-service-open="studio" aria-haspopup="dialog">
<img width="1600" height="1052" src="/show.jpg" alt="Talk show production" loading="lazy">
<div class="service-visual-copy">
<span>04</span>
<h3>Studio &amp; Strategy</h3>
<p>Studio and location production supported by audiovisual strategy and concept development.</p>
<div class="service-card-hover"><div class="service-card-tabs"><span>Podcasts</span><span>Talk shows</span><span>Creative strategy</span></div><strong>Explore the service <b>↗</b></strong></div>
</div>
</button>
<button class="service-visual-card service-photography reveal" id="photography-service" type="button" data-service-open="photography" aria-haspopup="dialog">
<span class="service-photo-preview" aria-hidden="true"><img width="1200" height="800" src="/assets/services/photography/BRM1559.jpg" alt="" loading="lazy" decoding="async"><img width="1200" height="798" src="/assets/services/photography/BRM_4104.jpg" alt="" loading="lazy" decoding="async"><img width="1200" height="798" src="/assets/services/photography/BRM_8726.jpg" alt="" loading="lazy" decoding="async"></span>
<div class="service-visual-copy">
<span>05</span>
<h3>Photography</h3>
<p>Purpose-built imagery for people, food, brands and hospitality experiences.</p>
<div class="service-card-hover"><div class="service-card-tabs"><span>Corporate</span><span>Food</span><span>Hospitality &amp; wellness</span></div><strong>Open photography collections <b>↗</b></strong></div>
</div>
</button>
</div>
</section>
<dialog class="service-modal" data-service-modal aria-labelledby="serviceModalTitle">
<div class="service-modal-shell">
<button class="service-modal-close" type="button" data-service-close aria-label="Close service details">×</button>
<header class="service-modal-hero"><img width="1600" height="1066" data-service-image src="/assets/services/digital-marketing.jpg" alt="" decoding="async"><div class="service-modal-heading"><span data-service-number>01</span><div class="kicker">Service brief</div><h2 id="serviceModalTitle" data-service-title>Digital Marketing &amp; Strategy</h2><p data-service-summary></p></div></header>
<div class="service-modal-content"><section class="service-modal-intro"><div><div class="kicker">What we deliver</div><h3 data-service-lead></h3></div><div><p data-service-description></p><div class="service-modal-tags" data-service-offerings></div></div></section><div class="service-modal-collections" data-service-collections></div><NuxtLink class="button service-modal-cta" to="/contact/">Discuss this service <span>↗</span></NuxtLink></div>
<div class="service-lightbox" data-service-lightbox hidden role="dialog" aria-modal="true" aria-labelledby="serviceLightboxCaption"><button class="service-lightbox-close" type="button" data-service-lightbox-close aria-label="Close expanded image">×</button><div class="service-lightbox-frame"><img width="1200" height="800" data-service-lightbox-image src="/assets/services/photography/BRM1559.jpg" alt=""><p id="serviceLightboxCaption" data-service-lightbox-caption></p></div></div>
</div>
</dialog>
<section class="cta-panel reveal">
<h2>Choose the right production setup.</h2>
<NuxtLink class="button" to="/contact/">Discuss a project</NuxtLink>
</section>
  </main>
</template>
