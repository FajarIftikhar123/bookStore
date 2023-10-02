<template>
<v-footer class="bg-black  d-flex flex-column">
    <v-spacer></v-spacer>

    <div>
        <v-row>
            <v-col cols="12" sm="8" md="6" lg="4" >
                <div >
                  <h3>Subscribe to our Newsletter</h3>
                  
                </div>
                <v-row  class="mt-4">
                  <v-col cols="12" sm="10">
                    <v-text-field v-model="email" label="Email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="8">
                    <v-btn class="mt-2" color="bg-blue-grey-lighten-4"  @click="subscribe">Subscribe</v-btn>
                  </v-col>
                </v-row>
              </v-col>
            <div>
                
            </div>
            <v-spacer></v-spacer>

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
