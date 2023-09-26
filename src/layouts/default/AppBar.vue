<template>
<v-app-bar app color="black" dark flat class="px-12">

    <v-badge>
        <v-img src="@/assets/imgForNav.jpg" contain width="50" max-height="80px"></v-img>
    </v-badge>
    <h1>Book Store</h1>
    <v-btn>
        <v-icon color="yellow" left class="mr-2" style="font-size: 24px; width: 28px; height: 24px;">fab fa-font-awesome</v-icon>
    </v-btn>

    <v-spacer></v-spacer>
    <router-link to="/home">
        <v-btn text class="text-yellow">Home</v-btn>
    </router-link>
    <router-link to="/about">
        <v-btn text color="#FBDF7E">About</v-btn>
    </router-link>
    <router-link to="/product">
        <v-btn text color="#FBDF7E">Products</v-btn>
    </router-link>
    <router-link class="text-grey" to="/login">
        <v-btn color="#FBDF7E"> Login</v-btn>
    </router-link>
    <router-link class="text-grey" to="/signup">
        <v-btn color="#FBDF7E"> SignUp</v-btn>
    </router-link>

</v-app-bar>
</template>

<script>
export default {
    methods: {
        scroll(refName) {
            const element = document.getElementById(refName);
            element.scrollIntoView({
                behavior: "smooth"
            });
        },
    },
};
</script>
