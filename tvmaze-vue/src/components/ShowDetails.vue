<template>
  <div class="max-w-7xl mx-auto mt-10">
    <router-link to="/">
      <div class="mb-6 font-light flex items-center">
        <span class="rotate-180"><Chevron /></span>
        Back
      </div>
    </router-link>
    <div class="flex mt-10 mb-0 leading-6">
      <img
        class="block object-cover mr-20 max-w-full align-middle rounded-3xl"
        height="720"
        width="480"
        :title="showDetails.name ?? ''"
        :src="showDetails.image?.original"
      />
      <div class="">
        <h1 class="text-6xl font-light text-secondary">
          {{ showDetails.name }}
        </h1>
        <hr class="mt-4" />
        <div
          class="mx-0 mt-6 mb-0 text-xl font-normal leading-8 text-primary-700"
          v-html="showDetails.summary ?? ''"
        ></div>
        <div
          v-if="showDetails.rating?.average"
          class="inline-flex items-center py-1 px-3 mt-6 mb-0 rounded-lg bg-zinc-600 bg-opacity-[0.25]"
        >
          <p class="my-0 mr-0 ml-1 text-primary-700 flex items-center gap-1">
            <span class="-translate-x-1"><Heart /></span>
            {{ showDetails.rating?.average }}
          </p>
        </div>
        <div class="grid grid-cols-2 gap-6 mt-6 mb-0">
          <div class="">
            <p class="m-0 text-gray-400">Type:</p>
            <p class="mx-0 mt-2 mb-0 text-xl text-slate-100">
              {{ showDetails.type }}
            </p>
          </div>
          <div class="" v-if="showDetails.runtime">
            <p class="m-0 text-gray-400">Runtime:</p>
            <p class="mx-0 mt-2 mb-0 text-xl text-slate-100">
              {{ showDetails.runtime }} min
            </p>
          </div>
          <div class="">
            <p class="m-0 text-gray-400">Status:</p>
            <p class="mx-0 mt-2 mb-0 text-xl text-slate-100">
              {{ showDetails.status }}
              <span class="pl-1" v-if="showDetails.ended"
                >({{ showDetails.ended }})</span
              >
            </p>
          </div>
          <div class="">
            <p class="m-0 text-gray-400">Release Date:</p>
            <p class="mx-0 mt-2 mb-0 text-xl text-slate-100">
              {{ showDetails.premiered }}
            </p>
          </div>
          <div class="col-span-2">
            <p class="m-0 text-gray-400">Genres:</p>
            <p class="mx-0 mt-2 mb-0 text-xl text-slate-100">
              {{ showDetails.genres.join(", ") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Chevron from "../assets/icons/Chevron.vue";
import Heart from "../assets/icons/Heart.vue";
import type { IShow } from "../types";

interface IProps {
  showDetails: IShow;
}

const { showDetails } = defineProps<IProps>();
</script>
