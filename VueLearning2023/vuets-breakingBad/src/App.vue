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
  <div class="wrapper">
    <header>
	    <!--	 Navbar   -->
	    
    </header>
	  
	  <main>
		  <RouterView />
	  </main>
  </div>
</template>
<!-- ------------------------------------------ -->

<style lang="scss">
.wrapper {
	display: flex;
	flex-direction: column;
}
</style>
<!-- ------------------------------------------ -->