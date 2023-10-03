<template>
<div>
    <h1>AddtoCart Page</h1>
    <v-row>
        <v-col cols="12" md="4">
            <div v-if="book">
                <v-card class="mx-auto" max-width="450">
                    <v-img :src="book.cover_image" height="450px" cover></v-img>
                </v-card>
            </div>
        </v-col>
        <v-col cols="12" md="8">
            <div v-if="book">
                <v-card class="mx-auto" max-width="550" height="450px">
                    <h1>
                        <p><Strong>Title:</Strong> {{ book.title }}</p>
                    </h1>

                    <v-card-title><Strong>Author:</Strong> {{ book.author }}</v-card-title>
                    <v-card-title><Strong>Price: $</Strong>{{ book.price }}</v-card-title>
                    <v-card-title><Strong>Rating*:</Strong> {{ book.rating }}</v-card-title>
                    <v-card-title><Strong>Description: </Strong>{{ book.description }}</v-card-title>
                    <div class="text-center">
                        <v-btn @click="buyNow" color="blue" class="my-4">Buy Now</v-btn>
                        <!-- <v-btn @click="addReviewAndRating" color="green" class="my-4 mr-2">Submit Review</v-btn> -->
            
                            <v-btn color="red" class="my-4 mr-2" @click="addToCart(book)">AddToCart</v-btn>
        
                    </div>
                    <!-- <div>
                      <v-textarea v-model="reviewText" label="Write a Review" rows="3"></v-textarea>
                    </div> -->

                </v-card>
            </div>
        </v-col>
    </v-row>
</div>
</template>






<script>
import axios from "axios";

export default {

  data() {

    return {

      book: null,
      reviewText: "", // To store the review text
      rating: 0,

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

  methods: {
    buyNow() {
        this.$router.push("/login");
    },

    addToCart(book) {

      const cart = JSON.parse(localStorage.getItem('cart')) || [];



      const existingProduct = cart.find((item) => item.id === book.id);

      if (existingProduct) {

        existingProduct.quantity++;

      } else {

        cart.push({ ...book, quantity: 1 });

      }
      localStorage.setItem('cart', JSON.stringify(cart));

      this.$router.push('/cart');

    },

  },

};

</script>

  
<style scoped>
.v-card-title {
    white-space: normal;
}
</style>
