<template>
<div>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="searchText" label="Search for a Book" dense class="search-bar" append-icon="mdi-magnify" single-line hide-details @input="searchProducts"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="book in filteredBooks" :key="book.id" md="3" sm="6">
                <v-card class="mx-auto" max-width="344">
                    <v-img :src="book.cover_image" height="200px" cover></v-img>
                    <v-card-title>Title: {{ book.title }}</v-card-title>
                    <v-card-title>Author: {{ book.author }}</v-card-title>
                    <v-card-subtitle>Price ${{ book.price }}</v-card-subtitle>
                    <v-card-subtitle>Rating:{{ book.rating }}</v-card-subtitle>
                    <router-link :to="{ name: 'BookDetails', params: { bookId: book.id } }">
                        <v-btn variant="tonel" color="black">Book Details</v-btn>
                    </router-link>
                    <v-expand-transition>

                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import axios from "axios";

import BookDetails from "@/components/BookDetails.vue";
export default {
    name: "Product",
    components: {
        BookDetails
    },

    data() {
        return {
            books: [],
            showModal: false,
            selectedProduct: null,
            searchResults: [],
            searchText: '',
            // showProductDetailDialog: false,
            relatedProducts: [],
            cart: [],
            ratingsData: null,

        };
    },

    computed: {
        filteredBooks() {
            // Search products by their title
            return this.books.filter((book) =>
                book.title.toLowerCase().includes(this.searchText.toLowerCase())
            );
        }
    },
    async mounted() {

        let result = await axios.get("http://10.0.10.220:8080/api/book");
        this.books = result.data.books;
        this.searchResults = result.data.books;
        // this.relatedProducts = this.findRelatedProduct(result.data.books);

        const bookId = this.$route.params.bookId;
        await axios.get(`http://10.0.10.220:8080/api/detail/${bookId}`)
            .then((response) => {
                this.ratingsData = response.data;
            })
            .catch((error) => {
                console.error('Error fetching ratings data:', error);
            });

    },
    methods: {

    }

};
</script>

<style scoped>
.search-bar {
    max-width: 300px;
    margin: 0 auto;
}
.v-card-text {
    padding: 10px;
}
.style-dialog {
    background-color: #fff;
    max-width: "100px";
    max-height: "100px";
}
</style>
