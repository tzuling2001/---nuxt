<template>
  <div
    v-if="open"
    class="fixed right-0 top-0 z-10 w-screen h-full bg-white/95 text-white overflow-y-auto scroll-y- transition-all duration-300 ease-in-out flex flex-col gap-[60px] px-4 md:px-[100px] py-10 md:justify-center"

    style="scrollbar-width: none;"
  >
    <!-- Title -->
    <div
      class="font-serif font-extrabold text-[48px] md:text-[80px] text-black [text-stroke:2px_#EE868E]"
    >
      快樂吃飽 就選沈早
    </div>
    <!-- Menu 內容 -->
    <div class="w-full flex flex-wrap gap-10">
      <!-- 左側選單 -->
      <ul class="min-w-2/5 gap-6">
        <li class="flex flex-col gap-2 pb-6">
          <h1 class="text-[#EE868E] md:text-3xl text-2xl font-black hover:text-[#655B85] 
          cursor-pointer">線上購物
          </h1>
          <div class="itemBoxes">
            <span class="text-black text-black md:text-lg text-base pr-4 hover:line-through 
            hover:text-[#655B85]  cursor-pointer">
              / 飽正讚
            </span>
            <span class="text-black text-black md:text-lg text-base pr-4 hover:line-through 
            hover:text-[#655B85]  cursor-pointer">
              / 胖卡夏
            </span>
            <span class="text-black text-black md:text-lg text-base pr-4 hover:line-through 
            hover:text-[#655B85]  cursor-pointer">
              / 裡麵有肉
            </span>
          </div>
        </li>

        <li class="flex flex-col gap-2 pb-6">
          <h1 class="text-[#EE868E] md:text-3xl text-2xl font-black hover:text-[#655B85] 
          cursor-pointer">聯名企劃
          </h1>
          <div class="itemBoxes">
            <span class="text-black text-black md:text-lg text-base pr-4 hover:line-through 
            hover:text-[#655B85]  cursor-pointer">
              / 全家
            </span>
            <span class="text-black text-black md:text-lg text-base pr-4 hover:line-through 
            hover:text-[#655B85]  cursor-pointer">
              / 早安美芝城
            </span>
          </div>
        </li>

        <li class="flex flex-col gap-2 pb-6">
          <h1 class="text-[#EE868E] md:text-3xl text-2xl font-black hover:text-[#655B85] 
          cursor-pointer">會員權益
          </h1>
          <div class="itemBoxes">
            <span class="text-black text-black md:text-lg text-base pr-4 hover:line-through 
            hover:text-[#655B85]  cursor-pointer">
              / 入會制度
            </span>
            <span class="text-black text-black md:text-lg text-base pr-4 hover:line-through 
            hover:text-[#655B85]  cursor-pointer">
              / 團購制度
            </span>
          </div>
        </li>
      </ul>

      <!-- 右側選單 -->
      <ul class="min-w-2/5 gap-6">
        <li class="flex flex-col gap-2 pb-6">
          <h1 class="text-[#EE868E] md:text-3xl text-2xl font-black hover:text-[#655B85] 
          cursor-pointer">周邊商品
          </h1>
          <div class="itemBoxes">
            <span class="text-black text-black md:text-lg text-base pr-4 hover:line-through 
            hover:text-[#655B85]  cursor-pointer">
              / 周年企劃
            </span>
          </div>
        </li>

        <li class="flex flex-col gap-2 pb-6">
          <h1 class="text-[#EE868E] md:text-3xl text-2xl font-black hover:text-[#655B85] 
          cursor-pointer">關於品牌
          </h1>
          <div class="itemBoxes">
            <span class="text-black text-black md:text-lg text-base pr-4 hover:line-through 
            hover:text-[#655B85]  cursor-pointer">
              / 品牌介紹
            </span>
            <span class="text-black text-black md:text-lg text-base pr-4 hover:line-through 
            hover:text-[#655B85]  cursor-pointer">
              / 成員
            </span>
          </div>
        </li>

        <li class="flex flex-col gap-2 pb-6">
          <h1 class="text-[#EE868E] md:text-3xl text-2xl font-black hover:text-[#655B85] 
          cursor-pointer">FAQ
          </h1>
          <div class="itemBoxes">
            <span class="text-black text-black md:text-lg text-base pr-4 hover:line-through 
            hover:text-[#655B85]  cursor-pointer">
              / 貨運及取貨
            </span>
            <span class="text-black text-black md:text-lg text-base pr-4 hover:line-through 
            hover:text-[#655B85]  cursor-pointer">
              / 付款及發票
            </span>
            <span class="text-black text-black md:text-lg text-base pr-4 hover:line-through 
            hover:text-[#655B85]  cursor-pointer">
              / 購物及訂單
            </span>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script setup>
defineProps({ open: Boolean })
defineEmits(['close'])
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
