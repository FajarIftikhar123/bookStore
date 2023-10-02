<template>
<v-app>
    <v-app-bar app color="black">

        <v-badge>
            <v-img src="@/assets/imgForNav.jpg" contain width="50" max-height="80px"></v-img>
        </v-badge>

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
    <br><br>
    <br> <br>
    <v-container fluid>
        <v-card>
            <v-card-title>
                Book List
            </v-card-title>

            <v-simple-table border>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th style="padding-right: 50px;" class="text-left">User ID</th>
                            <th style="padding-right: 50px;" class="text-left">Book Name</th>
                            <th style="padding-right: 50px;" class="text-left">Book Image</th>
                            <th style="padding-right: 50px;" class="text-center">Update</th>
                            <th style="padding-right: 50px;" class="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="(book, index) in books" :key="index">
                            <td class="text-left">{{ book.userId }}</td>
                            <td class="text-left">{{ book.title }}</td>
                            <td class="text-left">
                                <v-img :src="book.img" width="50" max-height="80px" contain></v-img>
                            </td>
                            <td class="text-center">
                                <v-icon @click="updateBook(index)">mdi-pencil</v-icon>
                            </td>
                            <td class="text-center">
                                <v-btn color="error" @click="deleteUser">
                                    <v-icon @click="deleteBook(index)">mdi-delete</v-icon>Delete User
                                </v-btn>
                            </td>

                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card>
    </v-container>

</v-app>
</template>

<script>
export default {
    methods: {
        async deleteUser() {
            try {
                const response = await this.$axios.delete(`http://127.0.0.1:8000/api/users/${this.userId}`);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
    },
    props: {
        userId: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style>
@media (max-width: 600px) {
    .toggle-icon {
        display: inline-block;
    }

    .title {
        display: none;
    }

}

.navs {
    min-height: 0;
}

.card-image-container {

    height: 200px;
    overflow: hidden;
}

.description-text {

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3em;
}

.title-text {
    white-space: normal;
}

.table-row {
    padding: 12px;
}
</style>
