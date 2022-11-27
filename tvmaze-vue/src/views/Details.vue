<template>
  <main>
    <ShowDetails v-if="showDetails" :showDetails="showDetails" />

    <!-- <div v-for="episodes" -->
  </main>
</template>

<script setup lang="ts">
import ShowDetails from "../components/ShowDetails.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useShowDetails } from "../store/useShowDetails";

const route = useRoute();

const showId = route.params?.id as string;

const showDetails = ref();
const episodesList = ref();

onMounted(async () => {
  const showDetailsStore = useShowDetails();

  await showDetailsStore.fetchShowDetails(showId);
  await showDetailsStore.fetchEpisodesList(showId);

  showDetails.value = showDetailsStore.showDetails;
  episodesList.value = showDetailsStore.episodes;
});
</script>
