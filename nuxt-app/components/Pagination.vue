<template>
    <div class="flex justify-center items-center gap-6 mt-6">
      <p class="cursor-pointer w-[25px] h-[25px] bg-black rounded-lg text-white text-center" @click="$emit('prev')">L</p>
      <div class="flex items-center gap-2">
        <p class="text-black font-bold">{{ current }}</p>
        <span class="w-[100px] h-[1px] bg-black mx-4"></span>
        <p class="text-gray-400">{{ total }}</p>
      </div>
      <p class="cursor-pointer w-[25px] h-[25px] bg-white border border-black rounded-lg text-black text-center" @click="$emit('next')">N</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    current: Number,
    total: Number
  })
  </script>
  