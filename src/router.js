import { createRouter, createWebHashHistory } from 'vue-router';
import PageOne from './pages/PageOne.vue';
import PageTwo from './pages/PageTwo.vue';
import Home from './pages/HomePage.vue';



export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: PageOne,
      path: '/PageOne'
    },
    {
      component: PageTwo,
      path: '/PageTwo'
    },
    {
      component: Home,
      path: '/'
    }
  ]
});
