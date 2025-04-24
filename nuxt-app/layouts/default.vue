<template>
  <div class="default-layout">
    <!-- {{ 起始動畫 }} -->
    <InitAnim @done="mainShow = true" class="xl:absolute fixed top-0 z-20 pointer-events-none" style="filter: drop-shadow(0px 6px 50px #FFF);"/>

    <div class="headerBox w-full h-24 lg:hidden block bg-white fixed top-0 left-0 z-10" :class="{ 'opacity-100': showLogo, 'opacity-0': !showLogo }" />

    <!-- {{ Menu }} -->
      <!-- Web -->
      <Transition @enter="onMenuEnter">
        <SidebarMenu v-show="menuShow"  class="sidebar-Menu hidden xl:block" />
      </Transition>

      <!-- Mobile -->
      <Transition @enter="onMobileMenuEnter">
        <MobileMenubar v-show="menuShow"/>
      </Transition>

    <!-- {{ mainContent }} -->
    <Transition @enter="mainContentEnter">
      <div v-show="mainShow" class="main-content">
        <main>
          <slot />
        </main>
        <footer class="bg-slate-100 p-4 text-center text-sm text-gray-500">
          <Footer />
        </footer>
      </div>
    </Transition>

    <BackBloods />
  </div>
</template>

<script setup>
import SidebarMenu from '~/components/SidebarMenu.vue'
import Footer from '~/components/Footer.vue'
import MobileMenubar from '~/components/mobileMenubar.vue';
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { Transition } from 'vue';

// ======================
// 入場動畫
// ======================
const menuShow = ref(false)
const mainShow = ref(false)

function onMenuEnter(el) {
  gsap.fromTo(
    el,
    { opacity: 0, x: 200},
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
  )
}

function onMobileMenuEnter(el) {
  gsap.fromTo(
    el,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    }
  )
}

function mainContentEnter(el) {
  gsap.fromTo(
    el,
    {opacity: 0, y:40},
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      onComplete: () => {
        menuShow.value = true 
      }
    }
  )
}

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

<style scoped>
.headerBox{
  background: linear-gradient(
  to bottom,
  rgba(255, 164, 175) 5%,
  rgba(255, 164, 175,0.5) 20%,
  rgba(255, 255, 255, 0.3) 45%,
  rgba(255, 255, 255, 0) 75%
);
}
</style>