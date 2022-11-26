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

// Types/interfaces
export interface Schedule {
    time?: string | null;
    days?: string[] | null;
}

export interface Rating {
    average?: number | null;
}

export interface Country {
    name?: string | null;
    code?: string | null;
    timezone?: string | null;
}

export interface Network {
    id?: number | null;
    name?: string | null;
    country?: Country | null;
    officialSite?: string | null;
}

export interface Country2 {
    name?: string | null;
    code?: string | null;
    timezone?: string | null;
}

export interface WebChannel {
    id?: number | null;
    name?: string | null;
    country?: Country2 | null;
    officialSite?: string | null;
}

export interface DvdCountry {
    name?: string | null;
    code?: string | null;
    timezone?: string | null;
}

export interface Externals {
    tvrage?: number | null;
    thetvdb?: number | null;
    imdb?: string | null;
}

export interface Image {
    medium?: string;
    original?: string;
}

export interface Self {
    href?: string;
}

export interface Previousepisode {
    href?: string;
}

export interface Nextepisode {
    href?: string;
}

export interface Links {
    self?: Self;
    previousepisode?: Previousepisode;
    nextepisode?: Nextepisode;
}

export interface IShow {
    id: number;
    url?: string | null;
    name?: string | null;
    type?: string | null;
    language?: string | null;
    genres?: string[];
    status?: string | null;
    runtime?: number | null;
    averageRuntime?: number | null;
    premiered?: string | null;
    ended?: string | null;
    officialSite?: string | null;
    schedule?: Schedule | null;
    rating?: Rating | null;
    weight?: number | null;
    network?: Network | null;
    webChannel?: WebChannel | null;
    dvdCountry?: DvdCountry | null;
    externals?: Externals | null;
    image?: Image;
    summary?: string | null;
    updated?: number | null;
    _links?: Links | null;
}





export interface IShows {
  shows: IShow[]
}

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