<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="show in shows" :key="show.id">
      <ShowItem :title="show.name ?? ''" :releaseYear="show.premiered ?? ''" :duration="show.averageRuntime ?? 0" :rating="show.rating?.average ?? 0" :image="show.image?.medium ?? ''" />
      <!-- <div class="carousel__item">{{ slide }}</div> -->
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
  
<script setup lang="ts">
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  import ShowItem from './ShowItem.vue';
  import type { IShow } from '../types'

  const breakpoints = {
    // 700px and up
    700: {
      itemsToShow: 3.5,
      snapAlign: 'center',
    },
    // 1024 and up
    1024: {
      itemsToShow: 5,
      snapAlign: 'start',
    },
  }

  const settings ={
    itemsToShow: 1,
    snapAlign: 'center',
  }
  interface IShows {
    shows: IShow[]
  }
  const {shows} = defineProps<IShows>()
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