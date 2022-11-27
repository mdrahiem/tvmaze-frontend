<script setup lang="ts">
import MovieDetail from "../components/ShowDetails.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const showId = route.params?.id;
</script>

<template>
  <main>
    {{ showId }}
    <MovieDetail />
  </main>
</template>
