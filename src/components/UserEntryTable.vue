<template>
    <v-container>
    <div >
        <h1 class="text-black" >All Users Information</h1>
   </div>
<v-table density="compact" elevation="5"  >
    <thead>
        <tr>
            <th class="text-left">
                User Id
            </th>
            <th class="text-left">
                User Name
            </th>
            <th class="text-left">
                Email
            </th>

        </tr>
    </thead>
    <tbody>
        <tr v-for="item in info" :key="item.name">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>

        </tr>
    </tbody>
</v-table>
</v-container>

</template>

  
<script>
// import AdminDashboard from '@/components/AdminDashboard.vue'
export default {
    // components:
    // {
    //     AdminDashboard
    // },

    data() {
        return {
            info: [{
                    id: "1",
                    name: 'Fajar Iftikhar',
                    email: "fajariftikhar92@mail.com",
                },
                {
                    id: "2",
                    name: 'Ayesha Ayan',
                    email: "ayesha@mail.com",
                },

            ],
        }
    },
}
</script>
