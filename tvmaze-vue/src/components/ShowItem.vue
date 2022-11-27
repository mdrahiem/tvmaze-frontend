<template>
  <div class="group relative border-2 cursor-pointer hover:rounded-2xl border-transparent hover:scale-100 transition-all scale-90" :title="props.title">
    <div class="min-h-80 aspect-w-1 aspect-h-1 w-full rounded-2xl bg-primary group-hover:opacity-75 lg:aspect-none lg:h-80">
    <img :src="props.image" :alt="props.title" class="h-full w-full object-cover object-center lg:h-full lg:w-full   rounded-2xl" />
    </div>
    <div class="flex flex-col gap-3 mt-4">
      <div class="flex justify-between">
          <h3 class="text-lg text-primary-700 truncate w-[170px] text-left">
            {{ props.title }}
          </h3>
          <p class="mt-1 text-secondary">
            {{ props.releaseYear }}
          </p>
        </div>
        <div class="flex justify-between">
          <p class="text-sm font-medium text-primary-700 flex gap-2 items-center">
            <Heart />
            {{ props.rating }}
          </p>
          <p class="text-sm font-medium text-primary-700 flex gap-2 items-center">
            <Clock />
            {{props.duration}} Mins
          </p>
        </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import Heart from '../assets/icons/Heart.vue';
import Clock from '../assets/icons/Clock.vue';

  interface ShowItem {
    title: string;
    duration: number;
    rating?: number;
    releaseYear: string;
    image: string;
  };
  const props = defineProps<ShowItem>()
</script>