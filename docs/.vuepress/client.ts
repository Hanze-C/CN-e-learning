import { defineClientConfig } from 'vuepress/client'
import Layout from './theme/components/Layout.vue'
import Swiper from 'vuepress-theme-plume/features/Swiper.vue'
import './theme/styles/custom.css'
import './theme/styles/index.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Swiper', Swiper)

  },
  layouts: {
    Layout,
  },
})