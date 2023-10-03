<template>
    
        <v-app-bar app color="black">
    
            <!-- <v-badge>
                <v-img src="@/assets/imgForNav.jpg" contain width="50" max-height="80px"></v-img>
            </v-badge> -->
    
            <v-app-title class="ml-10"> Admin Dashboard </v-app-title>
            <v-spacer></v-spacer>
            <RouterLink to="/adminhome">
                <v-btn text class="ml-5" color="white">
                    <v-icon>mdi-account</v-icon>Home
                </v-btn>
    
            </RouterLink>
    
            <RouterLink to="/user">
                <v-btn text class="ml-5" color="white">
                    <v-icon>mdi-account</v-icon>Users
                </v-btn>
    
            </RouterLink>
            <RouterLink to="/order">
                <v-btn text class="ml-5" color="white">
                    <v-icon>mdi-cart</v-icon>Orders
                </v-btn>
    
            </RouterLink>
            <RouterLink to="/addedbooks">
    
                <v-btn text class="ml-5" color="white">
                    <v-icon>mdi-book</v-icon>Books
                </v-btn>
            </RouterLink>
    
        </v-app-bar>
        

    </template>
    
    <script>
    export default {
      name: "AdminDashboard",
       
    };
    </script>
    
    <style>
    
    </style>
    