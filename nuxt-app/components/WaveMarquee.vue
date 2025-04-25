<template>
  <!-- 加入 ref="container" 讓 IntersectionObserver 監聽這整塊 -->
  <div class="marquee-container w-full md:h-[300px] h-[100px] " ref="container">
    <svg ref="pathSvg" width="1440" height="200">
      <path
        id="textPath"
        d="M 0 100 Q 240 0 480 100 T 960 100 T 1440 100"
        fill="none"
        stroke="transparent"
      />
    </svg>

    <div class="marquee-text md:block hidden">
      <h1
        v-for="(letter, i) in letters"
        :key="i"
        :ref="el => letterEls[i] = el"
        class="letter"
      >
        {{ letter }}
      </h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'
gsap.registerPlugin(MotionPathPlugin)

// ✅ 接收外部傳入的文字內容
const props = defineProps({
  text: {
    type: String,
    default: '快樂吃飽 就選沈早 快樂吃飽 就選沈早 '
  }
})

const letters = props.text.split('')
const letterEls = []              // 存放字母元素的 array
const pathSvg = ref(null)
const container = ref(null)      // 用來監聽可視區的容器 ref

// IntersectionObserver 觸發
function startMotionPathAnimation() {
  letterEls.forEach((el, i) => {
    if (!el) return
    gsap.to(el, {
      duration: 6,
      repeat: -1,
      ease: 'none',
      motionPath: {
        path: "#textPath",
        align: "#textPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: i / letters.length,
        end: i / letters.length + 0.5
      }
    })
  })
}
useIntersectionObserver(container, () => {
  startMotionPathAnimation()
})



</script>

<style scoped>
.marquee-container {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #FFA4AF, #ffff);
}
.marquee-text {
  position: absolute;
  top: 0px;
  left: 0;
}
.letter {
  position: absolute;
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
}
</style>
