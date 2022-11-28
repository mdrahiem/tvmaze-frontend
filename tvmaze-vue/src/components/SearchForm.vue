<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex">
      <div class="relative w-5/6 md:w-full max-w-2xl mx-auto">
        <input
          type="text"
          v-model="searchValue"
          @input="
            $emit(
              'update:modelValue',
              ($event.target as HTMLInputElement).value
            )
          "
          id="search"
          class="block p-4 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-secondary focus:border-secondary dark:bg-primary-200 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Enter show name to search"
          required
        />
        <button
          type="submit"
          class="absolute top-0 right-0 p-4 text-sm font-medium text-white bg-secondary rounded-r-lg border border-secondary hover:bg-secondary focus:ring-4 focus:outline-none dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary"
        >
          <SearchIcon />
          <span class="sr-only">Search</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSearchShows } from "../store/useSearchShows";
import SearchIcon from "../assets/icons/Search.vue";

const searchValue = ref<string>("");
const searchShowsStore = useSearchShows();

async function handleSubmit() {
  searchShowsStore.searchShows(searchValue.value);
}
</script>
