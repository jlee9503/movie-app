<template>
  <form @submit.prevent="searchMovie" class="searchInput">
    <input id="title" type="text" placeholder="Search Movie..." v-model="title" class="inputField" />
    <button type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
        <path
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
    </button>
  </form>

  <div class="moviecontainer">
    <div v-for="movie in data.Search" :key="movie.id" class="movieInfo">
      <router-link :to="'/movie/' + movie.imdbID" >
        <img :src=movie.Poster />
      </router-link>
      <h3>{{ movie.Title }}, {{ movie.Year }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref("");
const data = ref([]);

const searchMovie = async () => {
  console.log(title.value)

  const response = await fetch('http://www.omdbapi.com/?s=' + title.value + '&apikey=3f66eca5')
  const result = await response.json();
  data.value = result;
  console.log(result)
}
</script>

<style scoped>
.moviecontainer {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 7rem;
}

.searchInput {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>