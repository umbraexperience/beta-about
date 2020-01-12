<template>
  <div id="app">
    <div class="title">About the project</div>
    <flickity ref="flickity">
        <div class="carousel-cell">
          <div class="subtitol">Who we are</div>
          <div class="text">
            <p>
              The company, Umbra, Carrer Sant Antoni 1 Edifici Kropotkin, 1ª
              Planta Factoria Cultural Coma Cros, 17190 Salt, 
              Girona proposed as executive producer in association with 
              ARTE France.
            </p>
            <p>
              The present document is intended to define the general 
              terms and conditions applicable to the Site and for 
              participating Internet users.
            </p>
          </div> 
        </div>

        <div class="carousel-cell" id="hola">
        
          <div class="subtitol2">The project</div>
          <div class="text2">
            <p>
              The company, Umbra, Carrer Sant Antoni 1 Edifici Kropotkin, 1ª
              Planta Factoria Cultural Coma Cros, 17190 Salt, 
              Girona proposed as executive producer in association with 
              ARTE France.
            </p>
            <p>
              The present document is intended to define the general 
              terms and conditions applicable to the Site and for 
              participating Internet users.
            </p>
          </div>
        </div>

        <div class="carousel-cell">
          <div class="subtitol">The narrative</div>
          <div class="text">
            <p>
              The company, Umbra, Carrer Sant Antoni 1 Edifici Kropotkin, 1ª
              Planta Factoria Cultural Coma Cros, 17190 Salt, 
              Girona proposed as executive producer in association with 
              ARTE France.
            </p>
            <p>
              The present document is intended to define the general 
              terms and conditions applicable to the Site and for 
              participating Internet users.
            </p>
          </div>
        </div>

        <div class="carousel-cell" id="hola">
          <div class="subtitol2">Data collect</div>
          <div class="text2">
            <p>
              The company, Umbra, Carrer Sant Antoni 1 Edifici Kropotkin, 1ª
              Planta Factoria Cultural Coma Cros, 17190 Salt, 
              Girona proposed as executive producer in association with 
              ARTE France.
            </p>
            <p>
              The present document is intended to define the general 
              terms and conditions applicable to the Site and for 
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
  height:99%;

}
body {
  background-color: #0f0f10;
}
body * {
  color: #b4b4b4;
}
* {
 /* border-style: solid;
 border-color:chartreuse;
 border-width: 1px; */ 
}

#app {
  font-family: serif;
  text-align: center;
  align-items: center;
  height: 100%;
  font-family: "Tiempos Headline Light", Times, serif;
  margin: 0 auto;
}

.carousel-cell {
  width: 0 auto; 
  height: 20rem; 
  margin-top: 2rem; 
  margin-left: 20rem;
  
}

.flickity-button {
  display: none;
}

.flickity-page-dots {
  bottom: 7rem;
  transform: rotate(90deg);
  filter: blur(0.07rem);
  margin-left: 70rem;
  width: 8rem;
  height: auto;
  align-items: center;
  
}

.flickity-page-dots .dot {
  width: 10px;
  height: 10px;
  opacity: 1;
  background: transparent;
  border: 2px solid white;
  filter: blur(0.07rem); 
  
}

.flickity-page-dots .dot.is-selected {
  background: white;
  filter: blur(0.07rem);
}


.title {
  font-family: "Tiempos Headline Regular", Times, serif;
  font-size: 3.15rem;
  font-weight: 500;
  text-align: left;
  margin-top: 5.1rem;
  margin-left: 13.5rem;
  color: #f5f9fb;
  filter: blur(0.07rem);
  width: 30rem;

}

.subtitol {
  font-size: 4.7rem;
  font-weight: 500;
  opacity: 25%;
  filter: blur(0.17rem);
  text-align: left;
  margin-right: 0;
  margin-top: 5rem;
  padding: 0rem;
  width: 29rem;
  
}
.text {
  text-align: left;
  margin-left: 6rem;
  margin-right: 0;
  margin-top: -3.2rem;
  font-size: 1.15rem;
  height:12rem; 
  filter: blur(0.07rem);
  width: 30rem;
}

.subtitol2 {
  font-size: 4.7rem;
  font-weight: 500;
  opacity: 25%;
  filter: blur(0.17rem);
  text-align: right;
  margin-left: 10rem;
  margin-right: 0;
  margin-top: 5rem;
  padding: 0rem;
  width: 29rem;
}
.text2 {
  margin-right: 0;
  margin-left: 6rem;
  margin-top: -3.2rem;
  font-size: 1.15rem;
  height:12rem; 
  filter: blur(0.07rem);
  width: 30rem;
  text-align: right;
}


/* @media (max-width: 1024px) {
  
  .flickity-page-dots {
  top: 22rem;
  filter: blur(0.07rem);
  transform: rotate(0deg);
  margin: 0 auto;
  width: 8rem;
  height: auto;
  align-items: center;
  justify-content: center;
}
} */ 


</style>
