<template>
<div class="about w-full px-4 flex flex-col items-center">
    <div class="w-full flex justify-center">
        <h1 class="w-10/12 xl:text-4xl md:text-2xl text-black font-bold border-b-2 border-black py-6 mb-10  md:flex-none flex-1 "> 🍞 ABOUT</h1>
    </div>

    <!-- About box -->
    <div ref="backgroundRef" @click="handleClick" class=" background w-full md:h-[800px] h-screen relative flex flex-col justify-center items-center">

        <!-- [第一幕] -->
        <div class="titleBox pointer-events-none">
            <p ref="title01" class="md:text-7xl text-4xl text-black font-bold mb-4 p-2 bg-white text-center ">給愛吃早餐的你</p>
            <p ref="title02" class="md:text-7xl text-4xl text-black font-bold mb-4 p-2 bg-white text-center">24小時想吃就吃</p>
        </div>
        <div ref="toastBox" class="toastBox w-full flex flex-col items-center md:h-[465px] h-[230px] relative pointer-events-none">
            <img ref="toast01" class="md:max-w-[600px] w-10/12" src="../assets/img/svg/芋泥吐司.png">
            <img ref="toast02" class="md:max-w-[600px] w-10/12 absolute bottom-0" src="../assets/img/svg/草奶吐.png">
        </div>

        <!-- [第二幕] -->
        <div class="titleBox absolute pointer-events-none">
            <p ref="title03" class="md:text-7xl text-3xl text-black font-bold p-2 text-center ">手工製作的用心</p>
            <p ref="title04" class="md:text-7xl text-3xl text-black font-bold mb-4 p-2 text-center">每口都能感受的到</p>
        </div>

        <!-- [第三幕] -->
        <div class="bossBox absolute top-0 pointer-events-none flex flex-col justify-center items-center">
            <img ref="bossName" src="../assets/img/svg/老闆介紹.png" class=" md:max-w-[600px] w-10/12 ">
            <img ref="bossImg" src="../assets/img/svg/吐司人 1.png" class=" md:max-w-[450px] w-8/12">
            <div ref="infoText" class="md:text-2xl text-base  font-bold text-black text-center mt-4">
                大家好,我是YouTuTube頻道陪沈團的沈 <br>
                自稱早餐推廣大使、醜早俱樂部<br>
                領頭羊及小吃光明燈<br>
                從小在市場打滾,愛翻台灣小吃的各種元素<br>
                在早餐好像越來越少被討論,<br>
                甚至變成早午餐的時代<br>
                我要大聲的喊出:<br>
                『我愛吃早餐!好想随時都能吃早餐!』<br>
                只要你想,從白天到深夜都可以吃早餐<br>
                如果你也愛早餐和澱粉,歡迎加入沈早俱樂部!<br>
            </div>
        </div>
    </div>

</div>
</template>

<script setup>
import { ref } from 'vue'
import gsap from 'gsap'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'

// refs
const backgroundRef = ref(null)
const title01 = ref(null)
const title02 = ref(null)
const title03 = ref(null)
const title04 = ref(null)
const toastBox = ref(null)
const toast01 = ref(null)
const toast02 = ref(null)
const bossImg = ref(null)
const bossName = ref(null)
const infoText = ref(null)
const bossBox = ref(null)

const isMobile = ref(false)
const clickStage = ref(0)

// 移動 `tl` 變數到外層，這樣它能在 `setup()` 內部全域訪問
let tl = null;

// const tl = gsap.timeline({ paused: true });
if (process.client) {
    tl = gsap.timeline({ paused: true });

    useIntersectionObserver(backgroundRef, () => {
        
        isMobile.value = window.innerWidth < 768

        resetAnimation()

        // 初始設定
        gsap.set([toast01.value, toast02.value], {
            y: 0, x: 0, scale: 1, rotation: 0, opacity: 1,
        })
        gsap.set([title03.value, title04.value], { opacity: 0 })
        gsap.set([bossImg.value, bossName.value, infoText.value, bossBox.value], {
            opacity: 0, scale: 1
        })

        // Timeline 排列
        tl.fromTo(title01.value, { opacity: 0, y: 200 }, { 
            opacity: 1, y: 0, duration: 1, rotation: -3, ease: 'power2.out' 
        })
        .fromTo(title02.value, { opacity: 0, y: 200 }, { 
            opacity: 1, y: 0, duration: 1, ease: 'bounce.out' 
        }, '+0.3')

        .addPause() // 第一次，停住

        tl.to([title01.value, title02.value], { opacity: 0 }, '+2')
        .to(toast01.value, { 
            rotation: 90, 
            x: isMobile.value ? -200 : -450, 
            scale: isMobile.value ? 1.3 : 1,
        })
        .to(toast02.value, { 
            rotation: -90, 
            x: isMobile.value ? 210 : 450, 
            y: isMobile.value ? -150 : -200, 
            scale: isMobile.value ? 1.2 : 1,
        })
        .fromTo(title03.value, { opacity: 0, y: 100 }, { 
            opacity: 1, y: 0, duration: 1, ease: 'power2.out' 
        })
        .fromTo(title04.value, { opacity: 0, y: 100 }, { 
            opacity: 1, y: 0, duration: 1, ease: 'power2.out' 
        })
        
        .addPause() // 第二幕完，停住

        tl.to([title03.value, title04.value], { opacity: 0 })
        .to([toast01.value, toast02.value], { 
            scale: isMobile.value ? 0.3 : 0.5, 
            opacity: isMobile.value ? 0 : 1
        })
        .to(bossImg.value, { opacity: 1 })
        .fromTo(bossName.value, { opacity: 0, y: -100 }, { 
            opacity: 1, y: 0, duration: 1, rotation: -3, ease: 'bounce.out' 
        })
        .to(infoText.value, { opacity: 1 })

        .addPause() // 第三幕完

        // 直接播第一次 (第一幕)
        tl.play()
    })

}
// 點擊控制
function handleClick() {
    if (clickStage.value <= 3) {
        tl.play()
    } else {
        resetAnimation()
    }
    clickStage.value++
}

// 重置動畫
function resetAnimation() {
    gsap.set([toast01.value, toast02.value], {
        y: 0, x: 0, scale: 1, rotation: 0, opacity: 1,
    })
    gsap.set([title03.value, title04.value], { opacity: 0 })
    gsap.set([bossImg.value, bossName.value, infoText.value, bossBox.value], {
        opacity: 0, scale: 1,
    })
    clickStage.value = 0
    tl.seek(0).pause() // timeline 回到起點並暫停
}
</script>

<style scoped>
.background {
    cursor: url('../assets/img/svg/click.png') 16 16, auto;
}
</style>