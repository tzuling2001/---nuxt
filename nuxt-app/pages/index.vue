<template>
<div class="homePage w-full">
  <!-- banner -->
  <div ref="banner" class="banner-boxes w-full h-auto mt-24 mb-10">
    <BannerSlider/>
  </div>

  <!-- colo-paper -->
  <div class="colo-paper w-full h-auto relative pointer-events-none">
    <img class="w-full absolute  left-0 -top-12 z-30 "
    src="../assets/img/svg/colorpaper-pink.png">
    <img class="w-full absolute left-0 -top-24 z-20 " ref="paper" src="../assets/img/svg/colorpaper-purple.png">
    <img class="佔位 w-full" src="../assets/img/svg/colorpaper-pink.png">
    <div class="w-full absolute xl:bottom-40 bottom-2 xl:pr-32 z-40 flex justify-center">
      <News/>  
    </div>
  </div>

  <!-- WaveMarquee-box -->
  <div class="WaveMarquee-box w-full h-auto">
    <WaveMarquee />
  </div>

  <!-- product-boxes -->
  <div class="productBoxes flex flex-col w-full h-auto bg-white gap-40 pb-32 xl:pr-32">
    <ProductSlider boxTitle="最新商品" />
    <ProductSlider boxTitle="本週人氣推薦" />
  </div>

  <!-- about -->
  <div class="aboutBox w-full xl:pr-32 ">
    <About />
  </div>

  <!-- Calendar -->
  <div class="CalendarBox w-full h-auto md:p-32 md:flex flex-wrap justify-items-center px-10 py-10">
    <GroupBuyList />
    <CalendarBoard />
  </div>

  <!-- video -->
    <Youtube />

</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'

// ===============
// 顯示動畫
// ===============
const banner = ref(null)
const paper = ref(null)

// Banner 動畫：進入畫面時淡入上浮
useIntersectionObserver(banner, () => {
  gsap.set(banner.value, {
    opacity: 0,
    y: -60,
  })
  gsap.to(banner.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out'
  })
})

// Purple 紙片動畫：進入畫面時落下淡入
useIntersectionObserver(paper, () => {
  gsap.fromTo(paper.value,
    { y: 60, opacity: 1 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out'
    }
  )
})

</script>

<style scoped>
.CalendarBox {
  background: linear-gradient(to bottom,
  hsl(0, 0%, 100%) 45%,
  hsl(0, 0%, 100%,0)
  );
}
.productBoxes{
  background: linear-gradient(to bottom,
  hsl(0, 0%, 100%) 85%,
  hsl(0, 0%, 100%,0)
  );
}
.aboutBox{
  background: linear-gradient(to bottom,
  hsl(0, 0%, 100%,0),
  hsl(0, 0%, 100%)
  );
}
</style>
