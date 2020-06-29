import Vue from "vue";
import Router from "vue-router";
import Home from '../views/Home.vue';
import Product from '../views/Product.vue';
import Cart from '../views/Cart.vue';

Vue.use(Router);
export default new Router({

  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products/:id',
    name: 'product',
    component: Product
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( "../views/About.vue")
  },
  {
    path: '/cart/',
    name: 'cart',
    component: Cart,
  },
  ]
})



