<template>
  <div class="bannerCards w-full max-w-screen-lg bg-white rounded-2xl md:rounded-[50px] p-6 md:p-12 flex flex-col md:flex-row items-center gap-6">
    <!-- 圖片區 -->
    <div class="productImg  w-full md:w-1/2 aspect-square bg-gray-300 overflow-hidden rounded-xl">
      <img :src="data.image" class="w-full h-full object-cover" />
    </div>

    <!-- 資訊區 -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <h3 class="text-base md:text-lg font-bold mb-2">{{ data.category }}</h3>
      <h1 class="text-2xl md:text-3xl font-bold">{{ data.title }}</h1>
      <p class="mt-4 text-sm md:text-base">{{ data.info }}</p>
      <NuxtLink to="/">
        <button class="seeMore md:mt-6 
        mb-6 w-full md:w-4/5 py-2 font-bold rounded-md">
          查看更多
        </button>
      </NuxtLink>
    </div>
  </div>
</template>



<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      image: '',
      category: '聯名企劃',
      title: '墨西哥辣椒起司',
      info: '墨西哥辣椒起司墨西哥辣椒起司墨西哥辣椒起司墨西哥辣椒起司墨西哥辣椒起司墨西哥辣椒起司',
      link: '/'
    })
  }
})

const events = [
  {
    title: '大標題大標題大標題大標題 大標題大標題',
    date: '2024.09.20',
    time: '09 : 00 - 20 : 00'
  },
  {
    title: '新品上市：焦糖可頌早餐組合',
    date: '2024.09.25',
    time: '10 : 00 - 18 : 00'
  },
  {
    title: '限時團購｜奶油鮮奶捲',
    date: '2024.10.01',
    time: '13 : 00 - 17 : 00'
  }
]
</script>
