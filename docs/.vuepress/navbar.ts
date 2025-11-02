/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  {
    text: '指南',
    icon: 'mi:book',
    link: '/guide/',
  },
  {
    text: '常见问题',
    icon: 'mingcute:question-line',
    link: '/faq/',
  },
  { text: '多校联盟', icon: 'teenyicons:school-outline', link: '/school/' },
  { text: '关于', icon: 'akar-icons:info', link: '/about' },
  { text: '友链', icon: 'ic:round-people', link: '/friends' },
])
