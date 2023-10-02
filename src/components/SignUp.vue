<template>
     <!-- Here is the brief summary of this component. Using 3 different fiels as a user infor mation
    There is API integration from backend side so user can signup -->
<div class=".center-card {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      }">

    <v-card class="mx-auto my-5" style="max-width: 500px;">
        <v-toolbar color="deep-purple-accent-4" cards dark flat>
          <v-card-title class="text-h6 font-weight-regular">
                Sign up
            </v-card-title>     
        </v-toolbar>
        <v-sheet width="300" class="mx-auto">
            <v-form @submit.prevent="signup">
                <v-text-field v-model="name" type="text" :rules="nameRules" label="First name"></v-text-field>
                <v-text-field v-model="email" type="email" :rules="emailRules" label="Email"></v-text-field>
                <v-text-field v-model="password" type="password" :rules="passwordRules" label="Password"></v-text-field>
                <v-text-field v-model="confirm_password" type="password" :rules="confirm_passwordRules" label="Confirm_password"></v-text-field>
                <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>

        </v-sheet>
    </v-card>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        users: [],

        nameRules: [
            (v) => !!v || "Name is required",
            (v) => (v && v.length <= 15) || "Name must be less than 15 characters",
        ],
        email: "",
        emailRules: [
            (v) => !!v || "E-mail is required.",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid.",
        ],
        passwordRules: [
            (v) => !!v || "Password is required",
            (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
            (v) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(v) ||
            "Password must contain at least one uppercase letter, one lowercase letter, and one digit",
        ],
        confirm_passwordRules:[
            (v) => !!v || "Password is required",
            (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
            (v) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(v) ||
            "Password must contain at least one uppercase letter, one lowercase letter, and one digit",

        ]
    }),
    methods: {
        async signup() {
            try {
                let result = await axios.post("http://10.0.10.220:8080/api/register", {
                name: this.name,
                email: this.email,
                password: this.password,
                confirm_password:this.confirm_password
            });
            this.users = result.data;
            //   redirect to login
            if (result.data.message == "Registeration Successful") {
                this.$router.push("/login")
            }

        
            } catch (error) {
                console.log(error.message)
            }
        },
    },  
    }

</script>

<style scoped>
.mx-auto {
    margin-left: auto;
    margin-right: auto;
}
.my-5 {
    margin-top: 5rem;
    margin-bottom: 5rem;
}
.center-card {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
</style>
