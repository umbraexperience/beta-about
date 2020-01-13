<template>
  <div id="app">
    <div class="title">About the project</div>
    <flickity class="flickity" ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">
        <div class="contingut">
        <div class="apartat">Quienes somos</div>
        <div class="descripcio">
          <p>
            Umbra es un proyecto de final de grado formado por siete estudiantes
            de la Universidad de Girona (ERAM) con perfiles distintos, que van 
            des de el ámbito audiovisual (vídeo, sonido, ...), hasta  el
            multimedia  (programación, 3D,...).
          </p>
        </div>
        </div>
      </div>
      <div class="carousel-cell">
        <div class="contingut">
        <div class="apartat">El proyecto</div>
        <div class="descripcio">
          <p>
            Umbra es un proyecto transmedia formado por una narración online
            interactiva, una instalación a modo de presentación y un spot
            promocional.
          </p>
        </div>
        </div>
      </div>
      <div class="carousel-cell">
        <div class="contingut">
        <div class="apartat">La narrativa</div>
        <div class="descripcio">
          <p>
            La narración online trata la temática de los datos de una forma
            abstracta y sutil, para ser más concretos, habla sobre el control de
            los datos en un futuro cercano y su importancia. El objetivo final
            del proyecto, consiste en crear una reflexión al espectador  y
            conscienciarlo, sobre la trascendencia de los datos, al mismo tiempo
            que se entretiene con la narración creada.
          </p>
        </div>
        </div>
      </div>
      <div class="carousel-cell">
        <div class="contingut">
        <div class="apartat">Los datos</div>
        <div class="descripcio">
          <p>
            Para calcular el valor de los tus datos, hemos tenido en cuenta
            distintos factores, el primero de ellos es la edad, juntamente con
            las decisiones que se tomaban durante la narración. El otro elemento 
            ha sido un conjunto de estudios científicos, donde su objetivo era
            hacer una estimación de cual seria el valor que tendrían los datos
            dentro de unos años. En función de la investigación, los datos
            cambiaban entre ellos, debido a que a día de hoy, es bastante
            complicado predecir como evolucionará este mundo. Aun así, los
            estudios utilizados para llevar a término los calculas de Umbra han
            sido ESTUDIO 1 y ESTUDIO 2.
          </p>
        </div>
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
  },
  data() {
    return {
      flickityOptions: {
        autoPlay: true,
        wrapAround: true,
        prevNextButtons: false

        // any options from Flickity can be used
      }
    };
  }
};
</script>

<style>
html,
body {
  max-width: 100%;
  overflow-y: hidden;
  height: 99%;
}
body {
  background-color: #0f0f10;
}
body * {
  color: #b4b4b4;
}
* {
  /* border-style: solid;
  border-color: chartreuse;
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

.carousel-cell {
  width: 100%; /* full width */
  height: 460px; /* height of carousel */
  margin-right: 10px;
  

}

.flickity-page-dots {
  bottom: 0rem;
}
/* white circles */
.flickity-page-dots .dot {
  width: 11px;
  height: 11px;
  opacity: 1;
  background: transparent;
  border: 1px solid white;
  filter: blur(0.07rem); 
}
/* fill-in selected dot */
.flickity-page-dots .dot.is-selected {
  background: white;
}

.contingut {
  margin-top: 5rem;
  margin-left:20rem;
  height: 20rem;
  width: 35rem;
}

.apartat {
  font-size: 4.7rem;
  font-weight: 500;
  opacity: 40%;
  filter: blur(0.17rem);
  text-align: left;
}

.descripcio {
  text-align: left;
  margin-left: 6rem;
  margin-top: -3.2rem;
  font-size: 1.15rem;
  filter: blur(0.04rem);
 
  
}

</style>
