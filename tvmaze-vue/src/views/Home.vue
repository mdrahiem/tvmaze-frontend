<template>
  <main>
    <div>
      <Welcome />
      <SearchForm />
    </div>
    <div class="max-w-7xl mx-auto">
      <Carorsel :shows="shows" />
    </div>
  </main>
</template>

<script setup lang="ts">
import Welcome from '../components/Welcome.vue'
import Carorsel from '../components/Carorsel.vue';
import SearchForm from '../components/SearchForm.vue';
import useFetchShows from '../composables/useFetchShows';
import { getGenres } from '../utils/getGenres';
import { ref } from 'vue';

const { shows } = useFetchShows()
// const genres = getGenres(data)

</script>