<template>
<div class="wrapper">
    <h1>Cart</h1>
    <ul>
        <li v-for="item in cartItems" :key="item.name">
            <div>
                <p>{{item.name}}</p>
                <p>{{item.price}} kr</p>    
            </div>
            <button @click="removeFromCart(item.id)" class="btn cart-list-remove">
                Remove
            </button>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'cart',
    computed: {
        cartItems() {
            return this.$store.getters.cartItems
        }
    },
    methods: {
        removeFromCart(itemId) {
            this.$store.dispatch('removeFromCart', itemId)
        }
    }
};
</script>
