<template>
  <div class="flex-1 ">
    <ClientOnly>
      <vue-cal
        ref="calendar"
        :events="calendarEvents"
        :default-view="'month'"
        :disable-views="['years','year','week', 'day']"
        hide-view-selector
        :time="false"
        style="height: 600px"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

const calendar = ref(null)

onMounted(() => {
  if (calendar.value?.goToDate) {
    calendar.value.goToDate(new Date())
  }
})

// 假資料，未來可用 props 或 API 替換
// const calendarEvents = [
//   {
//     title: '奶油可頌團購',
//     start: '2024-09-20',
//     end: '2024-09-20',
//     content: '台北車站取貨',
//     class: 'bg-[#ee868e]'
//   },
//   {
//     title: '焦糖可頌新品',
//     start: '2024-09-25',
//     end: '2024-09-25',
//     class: 'bg-[#fec000]'
//   },
//   {
//     title: '限時折扣',
//     start: '2024-10-01',
//     end: '2024-10-01',
//     class: 'bg-[#675d88]'
//   }
// ]
</script>
