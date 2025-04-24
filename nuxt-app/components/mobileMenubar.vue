<template>
<nav class="fixed bottom-10 w-full flex justify-center z-50 block xl:hidden">
    <div class="flex justify-center items-center gap-10 w-3/5 w-[320px] bg-white/75 backdrop-blur-md rounded-full py-3 px-6 shadow-md">
        <a class="text-sm font-semibold" >TOP</a>
        <a class="text-sm font-semibold" >STORE</a>
        <a class="text-sm font-semibold" href="">BUY (0)</a>
        <div class="h-full flex flex-col justify-center items-center gap-1 cursor-pointer" @click="toggleMenu" :class="{ menuOpen: menuOpen }">
            <span class="w-6 h-[2px] bg-black"></span>
            <span class="w-6 h-[2px] bg-black"></span>
        </div>
    </div>
</nav>
<Menu :open="menuOpen"  @close="menuOpen = false"/>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}

</script>

<style scoped>
.hamburger {
    transition: background-color 0.3s ease;
}
span {
    transform-origin: left center;
    transition: all .0.5s ease;
}

/* 動態變化 */
.menuOpen span:nth-child(1) {
    transform: rotate(45deg) translate(2px, 2px);
    transform-origin: center;
    background-color: #EE868E;
}

.menuOpen span:nth-child(2) {
    transform: rotate(-45deg) translate(2px, -2px);
    transform-origin: center;
    background-color: #EE868E;
}

</style>