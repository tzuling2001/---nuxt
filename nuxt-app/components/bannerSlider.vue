<template>
  <section class="w-full flex justify-center items-center relative z-10">
    <div class="absolute md:flex hidden w-4/5 justify-between z-20 xl:pr-28 ">
      <h3 class="custom-back xl:text-xl text-base font-bold rotate-90 cursor-pointer">
        BACK
      </h3>
      <h3 class="custom-next xl:text-xl text-base font-bold rotate-90 cursor-pointer">
        NEXT
      </h3>
    </div>
    <div class="w-full">
      <Swiper
        :slides-per-view="1.4"
        :centered-slides="true"
        :loop="true"
        :autoplay="{ delay: 6000, disableOnInteraction: true }"
        :modules="[Autoplay, Navigation]"
        :navigation="{ nextEl: '.custom-next', prevEl: '.custom-back' }"
      >
        <SwiperSlide v-for="(item, index) in banners" :key="index">
            <Banner :data="item" class="rounded-2xl shadow-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Banner from './banner.vue'
import image01 from '@/assets/img/banner/夏日飽party (L.jpg'
import image02 from '@/assets/img/banner/LAIMO聯名 (L.jpg'
import image03 from '@/assets/img/banner/爆蒜起司培根總會 (L.jpeg'
import image04 from '@/assets/img/banner/茶餘飯後 (L.jpg'


// 假資料（可日後改成 props 傳入）
const banners = [
  {
    image: image01,
    category: '聯名企劃',
    title: '墨西哥辣椒起司',
    link: '/'
  },
  {
    image: image02,
    category: '新品上市',
    title: '抹茶麻糬口味',
    link: '/'
  },
  {
    image: image04,
    category: '期間限定',
    title: '泰式打拋豬風味',
    link: '/'
  },
  {
    image: image04,
    category: '期間限定',
    title: '泰式打拋豬風味',
    link: '/'
  },
  {
    image: image03,
    category: '期間限定',
    title: '泰式打拋豬風味',
    link: '/'
  }
]
</script>

<style scoped>
.swiper-slide-prev, .swiper-slide-next{
    opacity: 40%;
    filter: blur(4px);
}
</style>
