<template>
    <div>
        <section class="wrapper">
            <div class="flex-co">
                <img class="flex-co-2" :src="imagePath(product)" alt="">
                <div class="flex-co-2">
            <h2>{{ product.name }}</h2>
            <button @click="addToCart" class="cart-btn">Add to Cart</button>
            <p>Price: {{product.price}}kr</p>
            <p>Color: {{product.color}}</p>
            <p>Display: {{product.display}}</p>
            <p>Touch: {{product.touch}}</p>
            <p>Resolution: {{product.resolution}}</p>
            <p>Fingerprint: {{product.fingerprint}}</p>
            <p>Brightness: {{product.brightness}}</p>
            <p><em>{{product.quantity}} left in stock</em></p>
            <h3>Details</h3>
            <ul>
                <li>Material: {{product.details.material}}</li>
                <li>Prossesor: {{product.details.cpu}}</li>
                <li>Graphics: {{product.details.gpu}}</li>
                <li>Memory: {{product.details.memory}}</li>
                <li>Storage: {{product.details.storage}}</li>
                <li>Battery: {{product.details.battery}}</li>
                <li>Speakers: {{product.details.speakers}}</li>
                <li>Camera: {{product.details.camera}}</li>
                <li>Wireless: {{product.details.wireless}}</li>
                <li>Weight: {{product.details.weight}}</li>
                <li>Additional: {{product.details.additional}}</li>
            </ul>
            </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'product',
    data() {
        return {
            product: this.$store.getters.product(this.$route.params.id)
        }
    },
    methods: {
        imagePath(product) {
            return require(`../assets/img/products/${product.images[0]}`);
        },
        addToCart() {
            this.$store.dispatch('addToCart', this.$route.params.id)
        }
    }
};
</script>

<style lang="scss">
.flex-col {
    display: flex;
    align-items: flex-start;
}

.flex-col-2 {
    width: 50%;
}

ul {
    list-style-type:none;
}

.btn {
  padding: .5rem .75rem;
  border-radius: 3px;
  border: none;
  background-color: transparent;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all .15s ease;
}
.cart-btn {
  background-color: #2c3e50;
  color: #FFF;
  &:hover, &:focus {
    background-color: #42b983;
  }
}
</style>