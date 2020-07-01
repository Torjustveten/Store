<template>
<div class="wrapper">
    <h1>Cart</h1>
    <ul class="cart-list">
        <li v-for="item in cartItems" :key="item.id" class="flex col cart-list__item">
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
                <p>{{cartItemsCount}} Items</p>
                <p>Total {{ItemsSubtotal}} kr</p>
                <p class="shipping-options">
                    <select v-model="selectedShippingOptions" 
                    class="total-section__item__label">Shipping
                        <option disabled value="">Select shipping</option>
                        <option v-for= "option in shippingOptionsArray" 
                        :key= "option.text"
                        value= "option.rate">
                        {{option.text}} - {{option.rate}}kr
                        </option>
                    </select>
                </p>
            </li>
        </ul>
    </section>
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
        subtotal() {
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
  margin-top: .5rem;
  &:hover {
    color: #42b983;
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
</style>
