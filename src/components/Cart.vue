<template>
    <div>
      <h2>Your Cart</h2>
      <v-table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Book Name</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index">
            <td><img :src="item.book.image" alt="Book Image" /></td>
            <td>{{ item.book.name }}</td>
            <td>
              <input type="number" v-model="item.quantity" @change="updateQuantity(index)" />
            </td>
            <td>
              <v-icon @click="removeItem(index)">mdi-delete</v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    
    data() {
      return {
        book: null,
      };
    },
    async mounted() {
      const bookId = this.$route.params.bookId;
  
      try {
        const response = await axios.get(`http://10.0.10.220:8080/api/book/${bookId}`);
        this.book = response.data.book;
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    },
    // props: {
    //   cartItems: Array, // Array of cart items with book and quantity
    // },
    methods: {
      updateQuantity(index) {
       
        this.$emit('update-quantity', index, this.cartItems[index].quantity);
      },
      removeItem(index) {
       
        this.$emit('remove-item', index);
      },
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  