import { onMounted, onUnmounted, nextTick } from 'vue'

export function useIntersectionObserver(targetRef, callback, threshold = 0.5) {
    let observer = null

    onMounted(async () => {
        if (!process.client) return

        await nextTick()
        if (!targetRef.value) return
        observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // observer.disconnect()
                callback()
            }
        }, { threshold })

        observer.observe(targetRef.value)
    })

    onUnmounted(() => {
        if (observer && targetRef.value) {
            observer.unobserve(targetRef.value)
            // observer.disconnect()
        }
    })
}
