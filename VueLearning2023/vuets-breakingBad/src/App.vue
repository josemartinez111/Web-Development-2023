<!-- @App.vue -->
<!-- ------------------------------------------ -->
<script setup lang="ts">
import { ref } from "vue";
// ------------------------------------------------

const counter = ref<number>(0);
// setup _____________________________________


// functions _________________________________
const decrement = () => {
	if (counter.value <= 0) return;
	counter.value--;
};
</script>
<!-- ------------------------------------------ -->

<template>
  <div class="AppContainer">
    <h1>Counter: {{ counter }}</h1>
	  <button @click="counter++">Increase +1</button>
	  <button @click="decrement"
	  >Increase -1
	  </button>
  </div>
</template>
<!-- ------------------------------------------ -->

<style lang="scss">
.AppContainer {
	display: flex;
	flex-direction: column;
}
</style>
<!-- ------------------------------------------ -->