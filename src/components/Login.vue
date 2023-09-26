<template>
<div class=".center-card {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }">

    <v-card class="mx-auto my-5" style="max-width: 500px;">
        <v-toolbar color="deep-purple-accent-4" cards dark flat>
            <v-card-title class="text-h6 font-weight-regular">
                Login
            </v-card-title>
        </v-toolbar>
        <v-sheet width="300" class="mx-auto">
            <v-form @submit.prevent>
                <v-text-field v-model="email" type="email" :rules="emailRules" label="Email"></v-text-field>
                <v-text-field v-model="password" type="passward" :rules="passwordRules" label="Passward"></v-text-field>
                <v-btn @click="login" type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
        </v-sheet>
    </v-card>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        email: '',
        password: '',
//JAVASCRIPT VALIDATIONS
        passwordRules: [
            (v) => !!v || "Password is required",
            (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
            (v) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(v) ||
            "Password must contain at least one uppercase letter, one lowercase letter, and one digit",
        ],

        emailRules: [
            (v) => !!v || "E-mail is required.",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid.",
        ],
    }),
    methods: {
        async login() {
            console.warn("signup", this.name, this.email, this.password)
            let result = await axios.get("http://10.0.10.216:80/api/register", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.warn(result);
            if (result.status == 200) {
                this.$router.push({
                    name: "home"
                })
            }

        }
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
