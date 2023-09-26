<template>
<div>

    <v-text-field v-model="searchQuery" label="Search for a product" dense class="search-bar" @input="searchProduct"></v-text-field>

    <v-container>
        <v-row>
            <v-col v-for="(book, index) in books" :key="index" cols="12" md="4" lg="4">
                <v-card class="product-card">
                    <v-img :src="book.volumeInfo.imageLinks.thumbnail" alt="Product Image"></v-img>
                    <v-card-title>{{ book.volumeInfo.title }}</v-card-title>
                    <v-card-subtitle>{{ book.volumeInfo.authors.join(', ') }}</v-card-subtitle>
                    <v-card-text class="description" v-if="!showFullDescription[index]">
                        <!-- truncateDescription method is used to shorten a long book 
                            description to a specified maximum length and add an ellipsis (...)
                 to indicate that there is more text that's not currently visible.  -->
                        {{ truncateDescription(book.volumeInfo.description) }}
                    </v-card-text>

                    <v-btn @click="toggleDescription(index)">
                        {{ showFullDescription[index] ? 'Show Less' : 'Show More' }}
                    </v-btn>

                    <!-- Full description (hidden by default) -->
                    <v-card-text class="full-description" v-if="showFullDescription[index]">
                        {{ book.volumeInfo.description }}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="yellow" @click="addToCart()">Add to cart</v-btn>
                   
                        <v-btn @click="addToWishlist()">Add to Wishlist</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchQuery: '',
            books: [],
            showFullDescription: [],
        };
    },
    methods: {
        searchProduct() {

            axios
                .get(`https://www.googleapis.com/books/v1/volumes?q=${this.searchQuery}&key=AIzaSyCDoJgjO8yN_JcZCfL8-GpF7f-gSCoeB-4&maxResults=12`)
                .then((response) => {
                    this.books = response.data.items || [];
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        addToWishlist(book) {

        },
        truncateDescription(description) {
            // Truncate the description to a certain length
            const maxLength = 150;
            return description.length > maxLength ?
                description.slice(0, maxLength) + '...' :
                description;
        },
        toggleDescription(index) {
            // Toggle the full description for a book
            this.showFullDescription[index] = !this.showFullDescription[index];
        },
    },
};
</script>

  
<style scoped>
.search-bar {
    max-width: 300px;
    margin: 0 auto;
}

.description {
    max-height: 3em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

/* Style for full description (hidden by default) */
.full-description {
    display: none;
}
</style>
