<template>
  <div class="movie-info">
    <h2>{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
    <p>Release Date: {{ movie.Released }}</p>
    <img :src="movie.Poster" />
    <p>Runtime: {{ movie.Runtime }}</p>
    <p>{{ movie.Plot }}</p>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';

import { useRoute } from 'vue-router';
export default {
  setup() {
    const movie = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(`http://www.omdbapi.com/?apikey=3f66eca5&i=${route.params.id}&plot=full`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          movie.value = data;
        });
    })

    return {movie}
  }
}
</script>

<style></style>