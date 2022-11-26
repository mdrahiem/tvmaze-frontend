<template>
    <form @submit="handleSubmit">
        <div class="flex">
            <div class="relative w-full max-w-2xl mx-auto">
                <input type="search" v-model="searchValue" id="search-dropdown" class="block p-4 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-secondary focus:border-secondary dark:bg-primary-200 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="" required>
                    <h1>{{ searchValue }}</h1>
                <button type="submit" class="absolute top-0 right-0 p-4 text-sm font-medium text-white bg-secondary rounded-r-lg border border-secondary hover:bg-secondary focus:ring-4 focus:outline-none  dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary">
                    <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span class="sr-only">Search</span>
                </button>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const searchValue = ref<string>('')

function handleSubmit(event: Event) {
    event.preventDefault();
    console.log(searchValue.value)
}

</script>