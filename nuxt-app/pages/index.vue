<template>
  <div class="homePage w-full">
  <!-- banner -->
    <div class="banner-boxes w-full h-auto mt-24 mb-10">
      <BannerSlider />
    </div>
  <!-- colo-paper -->
    <div class="colo-paper w-full h-auto relative pointer-events-none">
      <img class="w-full  absolute left-0 -top-12 z-30 " src="../assets/img/svg/colorpaper-pink.png">
      <img class="w-full absolute left-0 -top-24 z-20 " src="../assets/img/svg/colorpaper-purple.png">
      <img class="佔位 w-full" src="../assets/img/svg/colorpaper-pink.png">
    </div>

  <!-- WaveMarquee-box -->

    <div class="WaveMarquee-box w-full h-auto">
      <WaveMarquee class="md:block hidden"/>
    </div>

  <!-- product-boxes -->
  <div class="New w-full p-4 bg-white flex flex-col justify-center">
    <h1 class="w-full xl:pr-32 text-2xl font-bold flex place-content-center">
      最新商品
    </h1>
    <div class="product-boxes w-full h-auto xl:pr-32">
      <ProductSlider />
    </div>
  </div>
  <div class="suggest w-full p-4 bg-white">
    <h1 class="w-full xl:pr-32  text-2xl font-bold flex place-content-center">
      最新商品
    </h1>
    <div class="product-boxes w-full h-auto xl:pr-32">
      <ProductSlider />
    </div>
  </div>
    <div class="w-full  h-auto md:p-32 bg-white md:flex flex-wrap justify-items-center px-10">
      <GroupBuyList />
      <CalendarBoard />
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ===============
// LOGO 視差滾動顯示
// ===============

const showLogo = ref(false)
const handleScroll = () => {
  // console.log('SCROLL Y:', window.scrollY)
  showLogo.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>
