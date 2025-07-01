import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import TestView from '@/views/TestView.vue'

const routes = [
    {
      path: '/',
      name: 'test',
      component: TestView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: ProjectsView,
    },
    // {
    //   path: '/testeo',
    //   name: 'test',
    //   component: TesteView,
    // },
    {
      path: '/projects',
      name: 'ProjectsView',
      component: ProjectsView,
    },
  ]

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes 
})


router.beforeEach((to, from, next) => {
  // Verificar si la ruta solicitada existe en las rutas definidas
  const exists = routes.some(route => route.path === to.path);
  if (!exists) {
    // Si la ruta no existe, redirigir al menú principal
    next(`/login`);

    // next(`/smartlink/test`);

    // next(`/principalPage`);
  } else {
    // Si la ruta existe, continuar con la navegación normalmente
    next();
  }
});

export default router
