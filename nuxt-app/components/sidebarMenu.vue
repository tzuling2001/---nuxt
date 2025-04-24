<template>
  <nav class="sidebarMenu fixed top-0 right-0 z-50 w-32 h-screen border-l border-gray-300" >
    <div class="logo transition-opacity duration-500" :class="{ 'opacity-100': showLogo, 'opacity-0': !showLogo }">
      <NuxtLink to="/">
        <img src="@/assets/img/svg/資產 2.png">
      </NuxtLink>
    </div>
    <div class="hamburger w-32 h-screen" :class="{ menuOpen: menuOpen }" @click="toggleMenu">
      <span />
      <span />
    </div>
    <div class="shoppingCar">
      <div class="car-item">
        <p> 0 </p>
      </div>
      <img src="../assets/img/svg/bag.png">
    </div>
    <Menu :open="menuOpen" @close="menuOpen = false" />
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Menu from './menu.vue'

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


// ===============
// menu 畫面開合
// ===============

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

</script>

<style scoped>
</style>