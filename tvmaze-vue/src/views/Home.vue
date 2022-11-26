<template>
  <main>
    <div>
      <Welcome />
      <SearchForm />
    </div>
    <div class="max-w-7xl mx-auto">
      <Carorsel :shows="showsData" />
    </div>
  </main>
</template>

<script setup lang="ts">
import Welcome from '../components/Welcome.vue'
import Carorsel from '../components/Carorsel.vue';
import SearchForm from '../components/SearchForm.vue';
import { showsData } from '../mockData';
</script>