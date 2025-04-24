<template>
  <div class="md:min-w-[550px] w-full  flex-1  flex flex-col">
    <!-- 區塊標題 -->
    <div class="border-t border-b border-black py-5">
      <h3 class="text-xl font-bold ">
        NEW
      </h3>
    </div>
    <div
      v-for="(item, index) in events"
      :key="index"
      class="group w-11/12 border-b border-black py-5 hover:bg-gray-50 md:hover:pl-10 hover:pl-5 transition-all"
    >
      <!-- 團購標題 -->
      <h4 class="md:text-lg font-semibold leading-snug">
        {{ item.title }}
      </h4>

      <!-- 團購時間資訊列 -->
      <div class="flex flex-wrap justify-items-center items-center gap-3 mt-2">
        <div class="area flex gap-2 justify-items-center items-center ">
          <p class="px-3 py-0.5 border-2 border-black rounded-full text-sm group-hover:bg-black group-hover:text-white">
            區域
          </p>
          <p>{{ item.date }}</p>
        </div>
        <div class="date flex gap-2 justify-items-center items-center ">
          <p class="px-3 py-0.5 border-2 border-black rounded-full text-sm group-hover:bg-black group-hover:text-white">
            截止日
          </p>
          <p>{{ item.time }}</p>
        </div>
      </div>
    </div>

    <!-- 「View All」區塊 -->
    <div
      class="border-b border-black flex items-center gap-6 py-5 cursor-pointer hover:text-[#FFA4AF] hover:font-black
      transition-all"
    >
      <h4 class="text-md font-medium">
        VIEW ALL
      </h4>
      <h1> → </h1>
    </div>
  </div>
</template>

<script setup>
// 假資料，之後可接 API 替換
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
