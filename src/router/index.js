import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import store from '@/vuex/store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        hideForAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const { userProfile } = store.getters;
  const isLoggedIn = !!userProfile;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const hideForAuth = to.matched.some(record => record.meta.hideForAuth);
  if (requiresAuth && !isLoggedIn) next({ name: 'login' });
  else if (hideForAuth && isLoggedIn) next({ name: 'home' });
  else next()
})

export default router
