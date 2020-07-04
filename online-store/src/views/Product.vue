<template>
    <div>
        <section class="wrapper">
            <div class="flex-co">
            <h2 class="title">{{ product.name }}</h2>
                <img class="flex-co-2_image" :src="imagePath(product)" alt="">
                <div class="flex-co-2">
            <button @click="addToCart" class="cart-btn">Add to Cart</button>
            <div class="detail">
            <p><b>Price:</b> {{product.price}}kr</p>
            <p><b>Color:</b> {{product.color}}</p>
            <p><b>Display:</b> {{product.display}}</p>
            <p><b>Touch:</b> {{product.touch}}</p>
            <p><b>Resolution:</b> {{product.resolution}}</p>
            <p><b>Fingerprint:</b> {{product.fingerprint}}</p>
            <p><b>Brightness:</b> {{product.brightness}}</p>
            <p><em>{{product.quantity}} left in stock</em></p>
            <h3 class="detail-h">Details</h3>
            <ul class="detail-info">
                <li><b>Material:</b> {{product.details.material}}</li>
                <li><b>Prossesor:</b> {{product.details.cpu}}</li>
                <li><b>Graphics:</b> {{product.details.gpu}}</li>
                <li><b>Memory:</b> {{product.details.memory}}</li>
                <li><b>Storage:</b> {{product.details.storage}}</li>
                <li><b>Battery:</b> {{product.details.battery}}</li>
                <li><b>Speakers:</b> {{product.details.speakers}}</li>
                <li><b>Camera:</b> {{product.details.camera}}</li>
                <li><b>Wireless:</b> {{product.details.wireless}}</li>
                <li><b>Weight:</b> {{product.details.weight}}</li>
                <li><b>Additional:</b> {{product.details.additional}}</li>
            </ul>
            </div>
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
    background-color: #3d5469;
    color: #eeeeee;
    border: none;
  }
.flex-co-2_image {
    width: 30%;
}
.title {
    margin-top: 50px;
}
.detail {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal; 
    margin-top: 15px; 
}
.detail-h{
    font-weight: bold;
}
.detail-info {
  list-style: none;
}
ul {
  padding-left: 0;
  list-style: none;
}
</style>