<template>
  <main>
    <div>
      <Welcome />
      <SearchForm />
    </div>
    <div class="max-w-7xl mx-auto">
      <div class="my-24">
        <h3 class="text-3xl first-letter:text-secondary">Top shows</h3>
        <Carorsel :shows="topShows" />
      </div>
      <div v-for="genre in genres" class="my-24">
        <h3 class="text-3xl first-letter:text-secondary">{{ genre }}</h3>
        <Carorsel
          :shows="
            showsStore.shows.filter((show) => show.genres?.includes(genre))
          "
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Welcome from "../components/Welcome.vue";
import Carorsel from "../components/Carorsel.vue";
import SearchForm from "../components/SearchForm.vue";
import { getGenres } from "../utils/getGenres";
import { useShows } from "../store";
import { computed } from "@vue/reactivity";
import { getTopShows } from "../utils/getTopShows";

const showsStore = useShows();
if (showsStore.shows?.length === 0) {
  showsStore.fetchShows();
}

const genres = computed(() => {
  return getGenres(showsStore.shows);
});

const topShows = computed(() => {
  return getTopShows(showsStore.shows);
});
</script>
