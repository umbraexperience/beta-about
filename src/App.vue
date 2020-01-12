<template>
  <div id="app">
    <div class="title">About the project</div>
    <flickity ref="flickity">
      <div class="carousel-cell">
        <div class="subtitol">Who we are</div>
        <div class="text">
          <p>
            The company, Umbra, Carrer Sant Antoni 1 Edifici <br />Kropotkin, 1ª
            Planta Factoria Cultural Coma Cros, 17190 Salt, <br />
            Girona proposed as executive producer in association with <br />
            ARTE France.
          </p>
          <p>
            The present document is intended to define the general <br />
            terms and conditions applicable to the Site and for <br />
            participating Internet users.
          </p>
        </div>
      </div>

      <div class="carousel-cell">
        <div class="subtitol">Who we are</div>
        <div class="text">
          <p>
            The company, Umbra, Carrer Sant Antoni 1 Edifici <br />Kropotkin, 1ª
            Planta Factoria Cultural Coma Cros, 17190 Salt, <br />
            Girona proposed as executive producer in association with <br />
            ARTE France.
          </p>
          <p>
            The present document is intended to define the general <br />
            terms and conditions applicable to the Site and for <br />
            participating Internet users.
          </p>
        </div>
      </div>

      <div class="carousel-cell">
        <div class="subtitol">Who we are</div>
        <div class="text">
          <p>
            The company, Umbra, Carrer Sant Antoni 1 Edifici <br />Kropotkin, 1ª
            Planta Factoria Cultural Coma Cros, 17190 Salt, <br />
            Girona proposed as executive producer in association with <br />
            ARTE France.
          </p>
          <p>
            The present document is intended to define the general <br />
            terms and conditions applicable to the Site and for <br />
            participating Internet users.
          </p>
        </div>
      </div>

      <div class="carousel-cell">
        <div class="subtitol">Who we are</div>
        <div class="text">
          <p>
            The company, Umbra, Carrer Sant Antoni 1 Edifici <br />Kropotkin, 1ª
            Planta Factoria Cultural Coma Cros, 17190 Salt, <br />
            Girona proposed as executive producer in association with <br />
            ARTE France.
          </p>
          <p>
            The present document is intended to define the general <br />
            terms and conditions applicable to the Site and for <br />
            participating Internet users.
          </p>
        </div>
      </div>
    </flickity>
  </div>
</template>

<script>
import Flickity from "vue-flickity";

export default {
  name: "app",
  components: {
    Flickity
  }
};
</script>

<style>
html,
body {
  max-width: 100%;
  overflow-y: hidden;
}
body {
  background-color: #0f0f10;
}
body * {
  color: #b4b4b4;
}
#app {
  font-family: serif;
  text-align: center;
  height: 100%;
  font-family: "Tiempos Headline Light", Times, serif;
  filter: blur(0.07rem);
  transition: filter 2s ease-in-out;
}

.carousel-cell {
  width: 100%; /* full width */
  height: 160px; /* height of carousel */
  margin-right: 10px;
}
</style>
