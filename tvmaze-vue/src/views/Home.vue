<template>
  <main>
    <div>
      <Welcome />
      <SearchForm />
    </div>
    <div class="max-w-7xl mx-auto">
      <div v-for="genre in state.genres" class="my-24">
        <h3 class="text-3xl first-letter:text-secondary">{{ genre }}</h3>
        <Carorsel :shows="moviesStore.shows.filter(show => show.genres?.includes(genre))" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Welcome from '../components/Welcome.vue'
import Carorsel from '../components/Carorsel.vue';
import SearchForm from '../components/SearchForm.vue';
import { getGenres } from '../utils/getGenres';
import { reactive, watch } from 'vue';
import { useShows } from '../store';
import type { HomeState } from '../types';

const moviesStore = useShows()
if (moviesStore.shows?.length === 0) {
  moviesStore.fetchShows();
}
console.log('moviesStoremoviesStoremoviesStore', moviesStore.shows)
const state: HomeState = reactive({
  genres: []
})
state.genres = getGenres(moviesStore.shows) as string[]
watch(
  () => moviesStore.shows,
  () => {
    state.genres = getGenres(moviesStore.shows) as string[]
  },
)
</script>