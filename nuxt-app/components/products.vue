<template>
  <NuxtLink
    to="/"
    class="group max-w-[260px] w-full h-auto flex flex-col gap-5 pb-2 border border-black"
  >
    <!-- 商品圖片 -->
    <div class="overflow-hidden rounded-lg group-hover:rounded-lg relative">
      <img
        :src="data.image"
        :alt="data.title"
        class="w-[260px] h-[260px] transition-all duration-300 md:p-0 md:group-hover:p-10 p-10 absolute top-0 left-0 z-50"
      >
      <div class="item-Img-marquee border border-black rounded-lg relative ">
          <div class="marquee-ground">
              <div class="marquee-info row-b">
                  <p>
                      <span>大口滿足</span>
                      <span>方便快速</span>
                      <span>大口滿足</span>
                  </p>        
              </div>
              <div class="marquee-info column-r">
                  <p>
                      <span>方便快速</span>
                      <span>大口滿足</span>
                      <span>方便快速</span>  
                  </p>     
              </div>
              <div class="marquee-info row-t">
                  <p>
                      <span>大口滿足</span>
                      <span>方便快速</span>
                      <span>大口滿足</span>
                  </p> 
              </div>
              <div class="marquee-info column-l">
                  <p>
                      <span>方便快速</span>
                      <span>大口滿足</span>
                      <span>方便快速</span>
                  </p>                  
              </div>
          </div>  
      </div>
    </div>

    <!-- 商品標籤 -->
    <div class="flex justify-between items-center">
      <p class="text-sm border border-black px-3 py-[2px] rounded-full text-center group-hover:bg-black group-hover:text-white">
        {{ data.label }}
      </p>
      <p>{{ data.subLabel }}</p>
    </div>

    <!-- 商品名稱與價格 -->
    <div class="flex flex-col items-end">
      <p>{{ data.title }}</p>
      <p>NT.{{ data.price }}</p>
    </div>

    <!-- 底線 -->
    <span class="w-full h-[1px] bg-black"></span>
  </NuxtLink>
</template>

<script setup>
import image01 from '@/assets/img/裡麵有肉/裡面有肉01.webp'

defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      image: image01,
      label: '胖卡夏',
      subLabel: '胖卡夏',
      title: '爆蒜起司培根',
      price: '120'
    })
  }
})
</script>

<style scoped>
/* marquee-groud */
.item-Img-marquee{
  width: 260px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
.marquee-ground{
  width: 240px;
  height: 240px;
  position: relative;
}
.marquee-info{
  width: 100%;
  height: 24px;
  background: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  /* 旋轉原點 */
  transform-origin: left center;
}
.marquee-info p{
  display: flex;
  padding: 6px;
}
.marquee-info span{
  width: 240px;
  display: flex;
  justify-content: start;
  animation: marquee-infinite 7s linear infinite;
}
/* 設定關鍵影格 */
@keyframes marquee-infinite {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-200%);
  }
}
/* 四條定位 */
.row-b{
  position: absolute;
  z-index: 3;
  bottom: -6px;
}
.column-r{
  position: absolute;
  z-index: 2;
  rotate: -90deg;
  bottom: -12px;
  /*  */
  left: 234px;
}
.row-t{
  position: absolute;
  z-index: 1;
  rotate: 180deg;
  left: 240px;
  /*  */
  top: -6px;
}
.column-l{
  position: absolute;
  z-index: 4;
  rotate: 90deg;
  bottom: 228px;
  /*  */
  left: 6px;
}
</style>