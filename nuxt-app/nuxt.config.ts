// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/style/main.scss'],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    baseURL: '/---nuxt/',
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kaisei+Tokumin&family=Noto+Sans+TC:wght@100..900&family=Parkinsans:wght@300..800&display=swap'
        }
      ]
    }
  },
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,      // 自動從連結爬到所有可生成頁面
      failOnError: false,    // 若遇到錯誤不要中止，可先成功其他頁
    }
  }
})