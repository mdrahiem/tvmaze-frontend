<template>
  <div class="group relative border-2 cursor-pointer hover:shadow-xl hover:border-secondary/50 hover:rounded-lg border-transparent hover:scale-100 transition-all scale-90 ">
    <div class="min-h-80 aspect-w-1 aspect-h-1 w-full rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
      <img :src="props.image" :alt="props.title" class="h-full w-full object-cover object-center lg:h-full lg:w-full  rounded-lg" />
    </div>
    <div class="mt-4 flex justify-between">
        <h3 class="text-lg text-primary-700">
          {{ props.title }}
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          {{ props.releaseYear }}
        </p>
      <p class="text-sm font-medium text-gray-900">{{ props.rating }}</p>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  interface ShowItem {
    title: string;
    duration: number;
    rating?: number;
    releaseYear: string;
    image: string;
  };
  const props = defineProps<ShowItem>()
</script>