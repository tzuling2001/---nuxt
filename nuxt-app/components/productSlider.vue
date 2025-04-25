<template>
<div class="">
  <h1 ref="titleRef" id="word" class="w-full md:text-4xl text-2xl font-bold flex place-content-center">
  {{boxTitle}}
  </h1>
  <section class="w-full py-8">
    <div class="max-w-screen-xl mx-auto px-4">
      <!-- 桌機 / 平板：使用 Grid 分頁 -->
      <div v-if="!isMobile" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div
          v-for="product in paginatedProducts"
          :key="product.id"
          class="flex justify-center py-5"
        >
          <Products :data="product" />
        </div>
      </div>

      <!-- 手機：Swiper 輪播 -->
      <Swiper
        v-else
        :slides-per-view="1.2"
        :loop="false"
        @swiper="onSwiperReady"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="product in products" :key="product.id">
          <div class="flex justify-center py-5">
            <Products :data="product" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- 分頁控制：僅在非手機時顯示 -->
    <Pagination
      v-if="!isMobile"
      :current="currentPage"
      :total="totalPage"
      @prev="goPrev"
      @next="goNext"
    />
  </section>
</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import gsap from 'gsap'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'
import image01 from '@/assets/img/裡麵有肉/裡面有肉01.webp'
import image02 from '@/assets/img/胖卡夏/爆蒜起司培根01.webp'
import image03 from '@/assets/img/飽正讚/伯爵奶酥.webp'
import image04 from '@/assets/img/周邊/菜瓜布.webp'

// ==============
// 外部標題
// ==============
defineProps({
  boxTitle: {
    type: String,
    required: true
  }
})

// ===============
// 商品資料
// ===============
const products = ref([
  { id: 1, image: image01, label: '胖卡夏', subLabel: 'X Uber Eats', title: '爆蒜起司培根總匯', price: 999 },
  { id: 2, image: image02, label: '胖卡夏', subLabel: 'X Uber Eats', title: '韓式泡菜燒肉堡', price: 899 },
  { id: 3, image: image01, label: '胖卡夏', subLabel: 'X Uber Eats', title: '花生培根厚片', price: 790 },
  { id: 4, image: image02, label: '胖卡夏', subLabel: 'X Uber Eats', title: '青醬雞腿排堡', price: 950 },
  { id: 5, image: image03, label: '胖卡夏', subLabel: 'X Uber Eats', title: '蒜香炸雞三明治', price: 880 },
  { id: 6, image: image04, label: '胖卡夏', subLabel: 'X Uber Eats', title: '爆蒜起司培根總匯', price: 999 },
  { id: 7, image: image03, label: '胖卡夏', subLabel: 'X Uber Eats', title: '韓式泡菜燒肉堡', price: 899 },
  { id: 8, image: image04, label: '胖卡夏', subLabel: 'X Uber Eats', title: '花生培根厚片', price: 790 },
  { id: 9, image: image01, label: '胖卡夏', subLabel: 'X Uber Eats', title: '青醬雞腿排堡', price: 950 },
  { id: 10, image: image02, label: '胖卡夏', subLabel: 'X Uber Eats', title: '蒜香炸雞三明治', price: 880 }
])

// ================
// 判斷是否為手機
// ================
const isMobile = ref(false)
const detectMobile = () => {
  isMobile.value = window.innerWidth <= 768
}
onMounted(() => {
  detectMobile()
  window.addEventListener('resize', detectMobile)
})

// ===============
// 分頁控制邏輯
// ===============
const slidesPerPage = ref(4)
const currentPage = ref(1)
const totalPage = computed(() => Math.ceil(products.value.length / slidesPerPage.value))
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * slidesPerPage.value
  return products.value.slice(start, start + slidesPerPage.value)
})

// ==============
// Swiper 控制
// ==============
const swiperRef = ref(null)
const onSwiperReady = (swiperInstance) => {
  swiperRef.value = { swiper: swiperInstance }
}
const onSlideChange = () => {
  const swiper = swiperRef.value?.swiper
  if (!swiper) return
  currentPage.value = swiper.realIndex + 1
}
const goNext = () => {
  if (currentPage.value < totalPage.value) {
    currentPage.value++
  }
}
const goPrev = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>


<style scoped>
.swiper-slide-prev, .swiper-slide-next{
    opacity: 40%;
    filter: blur(2px);
}
</style>