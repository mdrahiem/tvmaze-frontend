<template>
  <main>
    <div>
      <Welcome />
      <SearchForm v-model="searchValue" />
    </div>

    <div class="max-w-7xl mx-auto">
      <div v-if="searchResults.length > 0">
        <p @click="handleClearResults()">Clear results</p>
        <div class="flex flex-wrap mt-16 justify-between gap-4">
          <ShowItem
            v-for="searchItem in searchResults"
            :showId="searchItem.show.id"
            :title="searchItem.show.name ?? ''"
            :releaseYear="searchItem.show.premiered?.split('-')[0] ?? ''"
            :duration="searchItem.show.averageRuntime ?? 0"
            :rating="searchItem.show.rating?.average ?? 0"
            :image="searchItem.show.image?.medium ?? ''"
          />
        </div>
      </div>
      <div v-else>
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
import { ref } from "vue";
import { useSearchShows } from "../store/useSearchShows";
import ShowItem from "../components/ShowItem.vue";

const searchValue = ref<string>("");

const searchShowsStore = useSearchShows();

const searchResults = computed(() => {
  return searchShowsStore.searchResults;
});

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

function handleClearResults() {
  searchValue.value = "";
  searchShowsStore.resetSearchResults();
}
</script>
