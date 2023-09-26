<template>
<v-footer class="bg-black  d-flex flex-column">
    <v-spacer></v-spacer>

    <div>
        <v-row>
            <v-col cols="12" sm="6" md="4">
                <h3>Contact Us</h3>
                <p>Email: contact@example.com</p>
                <p>Phone: +1 (123) 456-7890</p>
            </v-col>

            <v-col cols="12" sm="6" md="4">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Shipping & Returns</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </v-col>

            <v-col cols="12" md="4">
                <h3>Follow Us</h3>
                <v-btn icon>
                    <v-icon size="24">mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon size="24">mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon size="24">mdi-instagram</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </div>

    <v-spacer></v-spacer>
</v-footer>
</template>

  
<script>
export default {
    name: 'AppFooter',
};
</script>
