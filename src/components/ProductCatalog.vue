<template>
<div>
    <h1 class="typing-demo ml-10">Book lover's delight!</h1>
</div>

<v-row justify="center" class="space px-16">

    <v-col cols="12" xs="12" sm="6" md="4" v-for="(product, i) in products" :key="i">
        <v-card class="mx-auto rounded-xl" max-width="300" flat outlined>
            <div align="center" justify="center">
                <v-img max-height="400" max-width="400" contain :src="product.img"></v-img>
            </div>

            <v-card-title class="">{{ product.title }}</v-card-title>
            <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{
            product.Discription
          }}</v-card-title>
            <v-card-actions class="mx-2 mt-n4">
                <v-card-actions>
                    <v-btn color="black ma-2" variant="tonal">
                        Add to WishList
                    </v-btn>
                </v-card-actions>
            </v-card-actions>
        </v-card>
    </v-col>

</v-row>
<CustomerReviews />
</template>

  
<script>
import CustomerReviews from '@/components/CustomerReviews.vue'
export default {
    components: {
        CustomerReviews
    },
    data: () => ({

        products: [{
                img: "1.jpg",
                title: "BooksofLostNames",
                Discription: "card 1 discription"
            },
            {
                img: "2.jpeg",
                title: "   Book Of Names",
                Discription: " card 1 discription"
            },
            {
                img: "3.jpg",
                title: " Harry Porter",
                Discription: " card 1 discription"
            },
            {
                img: "5.jpeg",
                title: "Good night Elizebeth",
                Discription: "card 1 discription"
            },
            {
                img: "6.jpeg",
                title: "Milk and Honey",
                Discription: "2card 1 discription"
            },
            {
                img: "7.png",
                title: "The sons and flowers",
                Discription: "card 1 discription"
            },
        ],
    }),
    methods: {
        addToCart() {
            this.$router.push({
                name: "login"
            })
        },

    },
};
</script>

  
<style scoped>
.typing-demo {
    width: 21ch;
    animation: typing 2s steps(22), blink 0.5s infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 4em;
    color: darkgoldenrod;
}

@keyframes typing {
    from {
        width: 0;
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}
</style>
