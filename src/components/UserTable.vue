<template>
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
</template>
<script>
export default{
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

}
 
</script>
