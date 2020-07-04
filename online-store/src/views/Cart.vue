<template>
<div class="wrapper">
    <div class="flex-col">
      <ul class="cart-list">
          <li v-for="item in cartItems" :key="item.id" class="flex-col cart-list__item">
          <img class="thumbnail" :src="imagePath(item)" alt=""/>
              <div class="flex-col cart-list__item__details">
                  <div>
                      <p>{{item.name}}</p>
                      <p>{{item.price}} kr</p> 
                  </div>   
              </div>
              <button @click="removeFromCart(item.id)" class="btn_cart-list-remove">
                  Remove
              </button>
          </li>
      </ul>
      <section class="total-section">
          <ul class="total-section-list">
              <li class="total-section_item">
                  <p class="total-section__item__label">{{cartItemsCount}} Items</p>
                  <p class="shipping-options">
                      <select v-model="selectedShippingOptions">Shipping
                          <option disabled value="">Select shipping</option>
                          <option v-for= "option in shippingOptionsArray" 
                          :key= "option.text"
                          value= "option.rate">
                          {{option.text}} - {{option.rate}}kr
                          </option>
                      </select>
                  </p>
                  <p>Total {{ItemsSubtotal}} kr</p>
              </li>
          </ul>
          <button :disabled="!this.selectedShippingOption" class="btn-checkout">Check out</button>
      </section>
  </div>
</div>
</template>

<script>
export default {
    name: 'cart',
    data() {
        return {
            selectedShippingOptions: '',
            shippingOptionsArray: [
                {
                text: "Next day shipping",
                rate: 50
                },
                {
                text: "One week shipping",
                rate: 0
                }
             ], 
        };
    },
    computed: {
        cartItems() {
            return this.$store.getters.cartItems
        },
        cartItemsCount() {
            return this.cartItems.length;
        },
        ItemsSubtotal() {
            return this.cartItems.reduce((total, item) => total + item.price, 0)
        },
        totalPrice() {
            if (this.selectedShippingOptions) {
                return Number(this.ItemsSubtotal) + Number(this.selectedShippingOptions);
            }
            return '---';
        },
    },
    methods: {
        removeFromCart(itemId) {
            this.$store.dispatch('removeFromCart', itemId)
        },
        imagePath(item) {
        return require(`../assets/img/products/${item.images[0]}`);
        },
    },
};
</script>
<style lang="scss">
.cart-list {
  width: 70%;
  margin-right: 1rem;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.cart-list__item {
  width: 100%;
  border-bottom: 1px solid #2c3e50;
}
.cart-list__item__details {
  flex: 2;
  justify-content: space-between;
  margin-left: 2rem;
}
.btn_cart-list-remove {
  border: none;
  font-weight: bold;
  &:focus {
    outline: none;
  }
}
.thumbnail {
  max-width: 50px;
  margin-top: .5rem;
}
.total-section {
  background: #FAFAFA;
  padding: 0 1rem 1rem;
  min-width: 33%;
  margin-top: 1rem;
}
.total-section-list {
  margin: 0;
}
.total-section__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total-section__item__label {
  font-weight: bold;
  margin-right: 1rem;
}
.flex-col {
  margin-top: 1rem;
}
.btn-checkout {
  width: 100%;
  color: #eeeeee;
  outline-color: black;
  background-color: #2c3e50;
  &:hover, &:focus {
    background-color: #2c3e50;
  }
}
</style>
