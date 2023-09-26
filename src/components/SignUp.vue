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
                Sign up
            </v-card-title>
        </v-toolbar>
        <v-sheet width="300" class="mx-auto">
            <v-form>
                <v-text-field v-model="name" type="text" :rules="nameRules" label="First name"></v-text-field>
                <v-text-field v-model="email" type="email" :rules="emailRules" label="Email"></v-text-field>
                <v-text-field v-model="passward" type="passward" label="Passward"></v-text-field>
                <v-btn @click="signup" type="submit" block class="mt-2">Submit</v-btn>
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

        nameRules: [
            (v) => !!v || "Name is required",
            (v) => (v && v.length <= 15) || "Name must be less than 15 characters",
        ],
        email: "",
        emailRules: [
            (v) => !!v || "E-mail is required.",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid.",
        ],
    }),
    methods: {
        async signup() {
            console.warn("signup", this.name, this.email, this.password)
            let result = await axios.post("http://10.0.10.216:80/api/register", {
                name: this.name,
                email: this.email,
                password: this.password

            });
            console.warn(result);
            if (result.status == 200) {
                this.$router.push({
                    name: "Login"
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
