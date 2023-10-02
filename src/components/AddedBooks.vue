<template>
<h1 class="text-deep-purple"> Information about Added books</h1>
<div class="text-end">
    <v-btn prepend-icon="mdi-plus" variant="tonal" color="black">
        Add Book</v-btn>
</div>

<v-row justify="center" class="space px-16">

    <v-col cols="12" xs="12" sm="6" md="4" v-for="(product, i) in products" :key="i">
        <v-card class="mx-auto rounded-xl" max-width="300" flat outlined>
            <div align="center" justify="center">
                <v-img max-height="400" max-width="400" contain :src="product.img"></v-img>
            </div>
            <div>
                <v-card-title class="">{{ product.title }}</v-card-title>
                <v-card-title class="">{{ product.price }}</v-card-title>
                <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{
                product.Discription

              }}</v-card-title>
            </div>
            <v-card-actions class="mx-2 mt-n4">
                <v-card-actions>
                    <v-btn variant="flat" color="red">
                        <v-icon>mdi-delete</v-icon>Delete
                    </v-btn>
                </v-card-actions>
            </v-card-actions>
        </v-card>
    </v-col>

</v-row>
</template>

<script>
export default {

    data: () => ({

        products: [{
                img: "1.jpg",
                title: "BooksofLostNames",
                Discription: "card 1 discription",
                price: 200,
            },
            {
                img: "2.jpeg",
                title: "   Book Of Names",
                Discription: " card 1 discription",
                price: 200,
            },
            {
                img: "3.jpg",
                title: " Harry Porter",
                Discription: " card 1 discription",
                price: 200,
            },
            {
                img: "5.jpeg",
                title: "Good night Elizebeth",
                Discription: "card 1 discription",
                price: 200,
            },
            {
                img: "6.jpeg",
                title: "Milk and Honey",
                Discription: "2card 1 discription",
                price: 200
            },
            {
                img: "7.png",
                title: "The sons and flowers",
                Discription: "card 1 discription",
                price: 200
            },
        ],
    }),
    methods: {

    },
};
</script>

<style scoped>
</style>
