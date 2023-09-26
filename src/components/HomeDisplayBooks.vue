<template>
<div>

    <v-container>
        <v-row>
            <v-col v-for="(book, index) in books" :key="index" cols="12" sm="6" md="4" lg="3">
                <v-card class="book-card" @click="showDescription(book)">
                    <v-img :src="book.volumeInfo.imageLinks.thumbnail" alt="Book Cover"></v-img>
                    <v-card-title>{{ book.volumeInfo.title }}</v-card-title>
                    <v-card-subtitle>{{ book.volumeInfo.authors.join(', ') }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- Modal dialog for book description -->
    <v-dialog v-model="showModal" max-width="500">
        <v-card>
            <v-card-title>Book Description</v-card-title>
            <v-card-text>{{ selectedBook.volumeInfo.description }}</v-card-text>
            <v-card-actions>
                <v-btn @click="closeModal">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            books: [],
            showModal: false,
            selectedBook: null,
        };
    },
    created() {
        this.fetchBooks();
    },
    methods: {
        fetchBooks() {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCDoJgjO8yN_JcZCfL8-GpF7f-gSCoeB-4')
                .then((response) => {
                    this.books = response.data.items || [];
                })
                .catch((error) => {
                    console.error('Error fetching books:', error);
                });
        },
        showDescription(book) {

            this.selectedBook = book;
            this.showModal = true;
        },
        closeModal() {

            this.showModal = false;
        },
    },
};
</script>

  
<style scoped>
.book-card {
    cursor: pointer;
    

}
</style>
