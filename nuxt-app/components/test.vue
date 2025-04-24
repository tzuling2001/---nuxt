<template>
  <div class="marquee-container">
    <svg ref="pathSvg" width="1440" height="200">
      <path
        id="textPath"
        d="M 0 100 Q 240 0 480 100 T 960 100 T 1440 100"
        fill="none"
        stroke="transparent"
      />
    </svg>

    <div class="marquee-text">
      <span
        v-for="(letter, i) in letters"
        :key="i"
        :ref="el => letterEls[i] = el"
        class="letter"
      >
        {{ letter }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

// 註冊 plugin（先元件內註冊，在研究 => plugin）
gsap.registerPlugin(MotionPathPlugin)

// 接收外部傳入的文字內容
const props = defineProps({
  text: {
    type: String,
    default: '快樂吃飽 就選沈早 快樂吃飽 就選沈早 '
  }
})

// 拆分文字、準備元素引用
const letters = props.text.split('')
const letterEls = []
const pathSvg = ref(null)

onMounted(async () => {
  await nextTick() // ✅ 等待 DOM 完全掛載

  letterEls.forEach((el, i) => {
    if (!el) return // 避免 null 錯誤
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
})
</script>

<style scoped>
.marquee-container {
position: relative;
width: 100%;
height: 300px;
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
color: #3B3B3A;
}
</style>