<template>
<div>
    <v-table>
        <thead>
            <tr>
                <th class="text-left">Image</th>
                <th class="text-left">Product</th>
                <th class="text-left">Price</th>
                <th class="text-left">Quantity</th>
                <th class="text-left">Total</th>
                <th class="text-left">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in cart" :key="index">
                <td>
                    <img :src="item.cover_image" alt="Product Image" width="100" />
                </td>

                <td>{{ item.title }}</td>
                <td>{{ item.price }}</td>
                <td>
                    <div class="quantity-control">
                        <v-btn @click="decreaseQuantity(item)">-</v-btn>
                        <div class=" quantity ">{{  item.quantity  }}</div>
                        <v-btn @click="increaseQuantity(item)">+</v-btn>
                    </div>
                </td>
                <td>{{ item.price * item.quantity }}</td>
                <td>
                    <v-icon @click="deleteItem(index)">mdi-delete</v-icon>
                </td>
            </tr>
        </tbody>
    </v-table>
    <div class="d-flex justify-center">
    <v-card class="payment-container" max-width="400px" max-height="350px" variant="tonal">
        <v-card-text>
          <div>SubTotal: {{ calculateSubtotal() }}</div>
          <div>Total: {{ calculateTotal() }}</div>
          <v-btn @click="checkPayment" color="primary">Payment</v-btn>
          <p>Only Cash</p>
        </v-card-text>
      </v-card>
    </div>
</div>
</template>
<script>
export default {
    name:"Cart",
    data() {
        return {
            cart: [],
        };
    },
    mounted() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.cart = cart;
    },
    methods: {
        increaseQuantity(item) {
            item.quantity++;
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        decreaseQuantity(item) {
            if (item.quantity > 1) {
                item.quantity--;
                localStorage.setItem('cart', JSON.stringify(this.cart));
            }
        },
        deleteItem(index) {
            this.cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(this.cart));

        },
        calculateSubtotal() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },

        calculateTotal() {
            const subtotal = this.calculateSubtotal();
            return subtotal;
        },

        checkPayment() {
            alert('Done!');
        },

    },

};
</script>

  
<style scoped>
.quantity-control {

    display: flex;
    align-items: center;

}
.payment-container {
    margin-top: 20px;
    padding: 20px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
   
  }
</style>
