<template>
<div ref="initAnimRef"  class="w-full flex items-center justify-center">
    <div class="logoAnim relative flex">
        <img ref="leftRef" class="md:max-w-[225px] max-w-[135px] mx-auto"
        src="../assets/img/svg/test-logoAnim-pink (1).png">
        <img ref="starRef" 
        src="../assets/img/svg/test-logoAnim-star.png" 
        class="absolute top-0 md:max-w-[36px]  max-w-[21px]  md:left-[225px]  left-[135px]">
        <img ref="rightRef" class="md:max-w-[324px] max-w-[194.4px] mx-auto"
        src="../assets/img/svg/test-logoAnim-purpel.png">
    </div>
</div>
</template>

<script setup>
import gsap from 'gsap'
import { ref, onMounted } from 'vue'

const emit = defineEmits(['done'])

const leftRef = ref(null)
const starRef = ref(null)
const rightRef = ref(null)
const initAnimRef = ref(null)

onMounted(() => {
    if (process.client) {
    const ctx = gsap.context(() => {
        const tl =gsap.timeline()

        tl.fromTo(
            leftRef.value,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
        tl.fromTo(
            rightRef.value,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 2, ease: 'bounce.out' },"<+0.5")
        tl.fromTo(
            starRef.value, 
            { opacity: 0 ,scale:2 , y:-10 },
            { opacity: 1 ,scale:1 ,duration:1.2 ,rotation: 360 , ease: "bounce.out"});
        tl.fromTo(
            initAnimRef.value, 
            { scale:1 ,top:'50%'},
            { scale:0.6 , top:'0px',
              onComplete: () => emit('done') // 告知動畫完成
            }
        );
    })
    onUnmounted(() => ctx.revert())
    }
})

</script>
