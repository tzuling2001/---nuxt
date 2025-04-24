<template>
  <!-- 加入 ref="container" 讓 IntersectionObserver 監聽這整塊 -->
  <div class="marquee-container" ref="container">
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
const pathSvg = ref(null)        // SVG path 用不到座標也保留
const container = ref(null)      // 用來監聽可視區的容器 ref

// ✅ 將動畫邏輯包成函數，方便重複使用（ex. IntersectionObserver 觸發）
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

onMounted(async () => {
  await nextTick() // 等 DOM 插入完成

  // ✅ 用 IntersectionObserver 確保元件真的進入畫面後才執行動畫
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      observer.disconnect() // 只觸發一次就停止觀察
      startMotionPathAnimation() // 執行動畫
    }
  }, {
    threshold: 0.1 // 有 10% 出現在畫面即可觸發
  })

  if (container.value) {
    observer.observe(container.value)
  }
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
