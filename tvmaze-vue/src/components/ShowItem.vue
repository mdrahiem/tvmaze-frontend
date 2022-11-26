<template>
            <div class="group relative">
            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img :src="props.image" :alt="props.title" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a>
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ props.title }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                    {{ props.duration }}
                    </p>
              </div>
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