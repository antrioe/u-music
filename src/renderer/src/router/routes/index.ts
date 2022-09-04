import { RouteRecordRaw } from 'vue-router'
import findRoutes from './find.routes'
import videoRooutes from './video.routes'
import fmRooutes from './fm.routes'
import searchRoutes from './search.routes'
import settingRoutes from './setting.routes'
const _routes = [
  ...findRoutes,
  ...videoRooutes,
  ...fmRooutes,
  ...searchRoutes,
  ...settingRoutes
]
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/find'
  },
  ..._routes,
  {
    path: '/:pathMatch(.*)*',
    redirect: '/not-found'
  }
]
export default routes
