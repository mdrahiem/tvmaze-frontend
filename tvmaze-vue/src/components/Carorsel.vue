<template>
  <div class="relative">
    <Carousel :settings="settings" :breakpoints="breakpoints" ref="carousel">
      <Slide v-for="show in shows" :key="show.id">
        <ShowItem
          :showId="show.id"
          :title="show.name ?? ''"
          :releaseYear="show.premiered?.split('-')[0] ?? ''"
          :duration="show.averageRuntime ?? 0"
          :rating="show.rating?.average ?? 0"
          :image="show.image?.medium ?? ''"
        />
      </Slide>
    </Carousel>
    <div class="absolute -top-8 right-0 flex gap-4" v-if="shows.length > 5">
      <button
        @click="prev"
        class="rotate-180 bg-secondary w-8 h-8 rounded-full text-center flex justify-center items-center"
      >
        <Chevron />
      </button>
      <button
        @click="next"
        class="bg-secondary w-8 h-8 rounded-full text-center flex justify-center items-center"
      >
        <Chevron />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import ShowItem from "./ShowItem.vue";
import type { IShow } from "../types";
import { ref } from "vue";
import Chevron from "../assets/icons/Chevron.vue";
const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
};

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};
const carousel = ref<typeof Carousel>();

function next() {
  console.log("carousel next");
  carousel.value?.next();
}

function prev() {
  console.log("carousel prevvvv");
  carousel.value?.prev();
}

interface IShows {
  shows: IShow[];
}
const { shows } = defineProps<IShows>();
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #642afb;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  padding: 1px;
}
.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__track {
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
}
</style>
