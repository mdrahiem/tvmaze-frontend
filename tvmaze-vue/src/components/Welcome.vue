<template>
  <div class="relative px-6 lg:px-8">
    <div class="mx-auto max-w-3xl pt-20 pb-8 sm:pt-48 sm:pb-3">
      <div>
        <div>
          <h1
            class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl"
          >
            Find your <span class="text-secondary">perfect show</span> for the
            evening
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-500 sm:text-center">
            Browse from hundreds of shows by genre and enjoy your favourite show
            online.
          </p>
        </div>
        <div
          class="fixed inset-x-0 top-[10%] -z-10 transform-gpu overflow-hidden blur-2xl"
        >
          <Blurrybg />
        </div>
        <div
          class="fixed inset-x-0 top-[10%] rotate-180 -z-10 transform-gpu overflow-hidden blur-2xl"
        >
          <Blurrybg />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Blurrybg from "../assets/icons/Blurrybg.vue";
</script>
