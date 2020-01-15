<template>
  <div id="app">
    <div class="container"><h1 class="title">About the project</h1></div>
    <flickity class="flickity" ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">
        <div class="contingut">
          <div class="apartat">Quienes somos</div>
          <div class="descripcio">
            <p>
              Umbra es un proyecto de final de grado formado por siete
              estudiantes de la Universidad de Girona (ERAM) con perfiles
              distintos, que van des de el ámbito audiovisual (vídeo, sonido,
              ...), hasta el multimedia (programación, 3D,...).
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-cell">
        <div class="contingut">
          <div class="apartat2">El proyecto</div>
          <div class="descripcio2">
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
              abstracta y sutil, para ser más concretos, habla sobre el control
              de los datos en un futuro cercano y su importancia. El objetivo
              final del proyecto, consiste en crear una reflexión al espectador
              y conscienciarlo, sobre la trascendencia de los datos, al mismo
              tiempo que se entretiene con la narración creada.
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-cell">
        <div class="contingut">
          <div class="apartat2">Los datos</div>
          <div class="descripcio2">
            <p>
              Para calcular el valor de los tus datos, hemos tenido en cuenta
              distintos factores, el primero de ellos es la edad, juntamente con
              las decisiones que se tomaban durante la narración. El otro
              elemento ha sido un conjunto de estudios científicos, donde su
              objetivo era hacer una estimación de cual seria el valor que
              tendrían los datos dentro de unos años. En función de la
              investigación, los datos cambiaban entre ellos, debido a que a día
              de hoy, es bastante complicado predecir como evolucionará este
              mundo. Aun así, los estudios utilizados para llevar a término los
              calculas de Umbra han sido ESTUDIO 1 y ESTUDIO 2.
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
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  background-color: #0f0f10;
}
body * {
  color: #b4b4b4;
}
/* * {
  border-style: solid;
  border-color: chartreuse;
  border-width: 1px;
} */

#app {
  font-family: serif;
  align-items: center;
  height: 100%;
  font-family: "Tiempos Headline Light", Times, serif;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  padding: 0 2rem;
  max-width: 1000px;
  margin: 0 auto;
  word-wrap: break-word;
}

.title {
  font-family: "Tiempos Headline Regular", Times, serif;
  font-size: 3.15rem;
  font-weight: 500;
  text-align: left;
  margin-top: 5.1rem;
  /* margin-left: 13.5rem; */
  color: #f5f9fb;
  filter: blur(0.07rem);
  width: 30rem;
  white-space: normal;
  word-wrap: break-word;


  max-width: 100%;
}

.carousel-cell {
  width: 100%; /* full width */
  height: 380px; /* height of carousel */
  margin-right: 10px;
}
.flickity {
  margin-top: 5rem;
}

.flickity-page-dots {
  bottom: 11.5rem;
  transform: rotate(90deg);
  margin-left: 35rem;
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
  /* margin-left:20rem; */
  margin: 0 auto;
  height: 20rem;
  max-width: 35rem;
}

.apartat {
  font-size: 4.7rem;
  font-weight: 500;
  opacity: 40%;
  filter: blur(0.17rem);
  text-align: left;
  max-width: 30rem;
  padding-left:1rem;
  padding-right:1rem; 
}

.descripcio {
  text-align: left;
  margin-left: 6rem;
  margin-top: -3.2rem;
  font-size: 1.15rem;
  filter: blur(0.04rem);
  padding-left:1rem;
  padding-right:1rem; 
}

.apartat2 {
  font-size: 4.7rem;
  font-weight: 500;
  opacity: 40%;
  filter: blur(0.17rem);
  text-align: right;
  padding-left:1rem;
  padding-right:1rem; 
}

.descripcio2 {
  text-align: right;
  margin-right: 4rem;
  margin-top: -3.2rem;
  font-size: 1.15rem;
  filter: blur(0.04rem);
  padding-left:1rem;
  padding-right:1rem; 
}

 @media screen and (max-width: 1150px) {
  
.flickity-page-dots {
  bottom: 0rem;
  transform: rotate(0deg);
  margin-left: 0rem;
  } 

}

 @media screen and (max-width: 650px) {

.title {
  font-size: 2.2rem;
  
}  

.apartat {
  font-size: 1.75rem;
  opacity: 60%;
  filter: blur(0.1rem);
  margin-left:2rem
}

.apartat2 {
  font-size: 1.75rem;
  opacity: 60%;
  filter: blur(0.1rem);
  margin-right:2rem;

}

.descripcio {
  font-size: 1rem;
  margin-top:-2rem;
  padding-right:2rem;
  
}

.descripcio2 {
  font-size: 1rem;
  margin-top:-2rem;
  padding-left:2rem;
  
  }

.flickity-page-dots {
  bottom: -3rem;
  transform: rotate(0deg);
  margin-left: 0rem;
  } 
.carousel-cell {
  border: 1px solid blue;
  height: 390px; 


  
}
} 


</style>
