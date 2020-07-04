<template>
  <div id="app">
    <div id="nav" class="wrapper flex-col flex-col--align-center">
      <h1 class="flex-col--2"></h1> <!--Store Name-->
      <div class="flex-col--2 nav-items">
        <router-link to="/" class="nav-items__item">Home</router-link>
        <!--<div class="search">
          <input type="text" placeholder="Search.." class="nav-search">
        <button type="submit" class="search-btn"> <i class="fa fa-search"></i></button>
        </div> -->
        <!--<select>Categories</select>-->
          <router-link to="/login" class="nav-items__item-right">Login</router-link>
          <router-link to="/cart" class="nav-items__item-cart">
          <i class="fa fa-shopping-cart"></i>
          <counter-badge :count="cartCount"></counter-badge>
        </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import CounterBadge from '@/components/CounterBadge';
export default {
  name: 'app',
  components: { CounterBadge },
  computed: {
    cartCount() {
      return this.$store.state.cart.length
    }
  }
}
/*window.onscroll = function() {stickyNav()};
var  = document.getElementById("wrapper")
var sticky = wrapper.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    wrapper.classList.add("sticky")
  } else {
    wrapper.classList.remove("sticky");
  }
}*/
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  height: 80px;
  background-color: #343d46;
}
#nav {
  margin-top: 0;
  padding: 30px;
  a {
    color: #cecece;
    &.router-link-exact-active {
      color: #eeeeee;
    }
  }
}
.nav-items {
  justify-content: flex-end;
  display: flex;
  font-family: 'IBM Plex Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
}
body {
  background-color: #eeeeee;
}
.nav-items__item {
  margin-left: 1rem;
  position: fixed;
  overflow: hidden;
}
.nav-items__item-cart{
  margin-left: 40rem;
  position: fixed;
}
.nav-items__item-right {
  margin-left: 36rem;
  position: fixed;
}

.fa-shopping-cart {
  font-size: 20px;
  color: #cecece;
  &:active {
    color: #eeeeee;
  }
}
/*.search {
  position: fixed;
  margin-left: 30rem;
  color: #2c3e50;
  border: none;
}
.search-btn {
  width: 40px;
  height: 36px;
  border: 1px solid #42b983;
  background-color: #42b983;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  &:focus, &:active {
    border: none;
  }
}*/
</style>