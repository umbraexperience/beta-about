<template>
  <div id="app">
    <h1 class="title">About the project</h1>
    <agile
      :nav-buttons="false"
      :autoplay-speed="5000"
      :speed="2500"
      :transition="vertical"
    >
      <div class="slide">
        <h3>Who we are</h3>
        <h4>
          The company, Umbra, Carrer Sant Antoni 1 Edifici <br />Kropotkin, 1ª
          Planta Factoria Cultural Coma Cros, 17190 Salt, <br />
          Girona proposed as executive producer in association with <br />
          ARTE France. <br />
          <br />The present document is intended to define the general <br />
          terms and conditions applicable to the Site and for <br />
          participating Internet users.
        </h4>
      </div>
      <div class="slide">
        <h2>How it works</h2>
        <h5>
          The company, Umbra, Carrer Sant Antoni 1 Edifici <br />Kropotkin, 1ª
          Planta Factoria Cultural Coma Cros, 17190 Salt, <br />
          Girona proposed as executive producer in association with <br />
          ARTE France. <br />
          <br />The present document is intended to define the general <br />
          terms and conditions applicable to the Site and for <br />
          participating Internet users.
        </h5>
      </div>
      <div class="slide">
        <h3>The project</h3>
        <h4>
          The company, Umbra, Carrer Sant Antoni 1 Edifici <br />Kropotkin, 1ª
          Planta Factoria Cultural Coma Cros, 17190 Salt, <br />
          Girona proposed as executive producer in association with <br />
          ARTE France. <br />
          <br />The present document is intended to define the general <br />
          terms and conditions applicable to the Site and for <br />
          participating Internet users.
        </h4>
      </div>
      <div class="slide">
        <h2>Background</h2>
        <h5>
          The company, Umbra, Carrer Sant Antoni 1 Edifici <br />Kropotkin, 1ª
          Planta Factoria Cultural Coma Cros, 17190 Salt, <br />
          Girona proposed as executive producer in association with <br />
          ARTE France. <br />
          <br />The present document is intended to define the general <br />
          terms and conditions applicable to the Site and for <br />
          participating Internet users.
        </h5>
      </div>
    </agile>
    <nav class="navbar">
      <ul>
        <li style="font-size:1.5rem">Project</li>
        <li style="font-size:1.5rem">Credits</li>
        <li style="font-size:1.5rem">Contribute</li>
        <li style="font-size:1.5rem">Privacy</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
.agile__dots {
  flex-direction: column;
  align-items: flex-end;
  transform: scale(1.2);
  margin-top: -9.5rem;
  margin-right: -1rem;
}

.agile__actions {
  justify-content: flex-end !important;
  margin-right: -2rem;
}

.agile__dots button {
  margin-bottom: 1rem !important;
  size: 10rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
  filter: blur(0.07rem);
  border: 0.01rem solid white;
  background-color: transparent;
}

.agile__dots button:hover {
  background-color: white;
  border-color: white;
  border: 0.01rem;
}

.agile__dot--current button,
.agile__dot:hover button {
  background-color: white;
  border-color: white;
  border: 0.01rem;
  filter: blur(0.17rem);
}

h3 {
  font-size: 4.7rem;
  font-weight: 500;
  opacity: 25%;
  filter: blur(0.17rem);
  text-align: left;
  margin-left: 20rem;
  margin-right: 0;
  margin-top: 2rem;
}

h2 {
  font-size: 4.7rem;
  font-weight: 500;
  opacity: 25%;
  filter: blur(0.17rem);
  text-align: right;
  margin-right: 20rem;
  margin-left: 0;
  margin-top: 2rem !important;
}

h4 {
  text-align: left;
  margin-left: 26rem;
  margin-right: 0;
  margin-top: -7rem;
  font-size: 1.15rem;
}

h5 {
  text-align: right;
  margin-left: 0rem;
  margin-right: 25rem;
  margin-top: -6rem;
  font-size: 1.15rem;
}

.navbar ul {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 7rem;
  margin-top: 6.2rem;
}

li {
  text-align: center;
  list-style: none;
  padding-right: 5rem;
  font-size: 100px;
  font-weight: 500;
  color: #f5f9fb;
  transition: filter 0.15s ease-in-out, color 0.15s ease-in-out;
}

li:hover {
  filter: blur(0.19rem);
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  background-color: black;
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

h1 {
  font-family: "Tiempos Headline Regular", Times, serif;
  font-size: 3.15rem;
  font-weight: 500;
  text-align: left;
  margin-top: 5.1rem;
  margin-left: 13.5rem;
  color: #f5f9fb;
}

.text {
  text-align: left;
  margin-left: 28.65rem;
  z-index: 10;
  position: absolute;
  padding: 0;
  margin: 0;
  border: 0;
}

.text2 {
  text-align: left;
  margin-left: 21.35rem;
  font-size: 4.5rem;
  opacity: 0.12;
  font-weight: 600;
  z-index: 5;
  position: relative;
}
</style>
