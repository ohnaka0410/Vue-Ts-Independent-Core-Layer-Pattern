<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="toggleFav">ToggleFav</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

import ToggleFavUseCase from "./modules/Sample/Article/Core/UseCase/ToggleFav";
import ToggleFavAdapter from "./modules/Sample/Article/Application/Adapter/ToggleFavAdapter";
const useCase = new ToggleFavUseCase(new ToggleFavAdapter());

@Component({
  components: {
    HelloWorld
  },
  methods: {
    toggleFav: () => {
      const articleId: number = 11;
      const on: boolean = true;
      // const on: boolean = false;
      const userId: number = 22;
      useCase.run(articleId, on, userId);
    }
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
