<template> 
    
    <!-- <AdminDashboard/>  -->
    <v-container>
<div>
    <h1 class="text-black">Information of Customers Order</h1>
</div>

<v-table density="compact" elevation="5" class="p   b-5">
    <thead>
        <tr>
            <th style="text-align: left; padding: 8px;" class="text-left">
                Order ID
            </th>

            <th style="text-align: left; padding: 8px;" class="text-left">
                User Name
            </th>
            <th style="text-align: left; padding: 8px;" class="text-left">
                Email
            </th>

            <th style="text-align: left; padding: 8px;" class="text-left">
                Status
            </th>

        </tr>
    </thead>
    <tbody class="p-5">
        <tr v-for="item in info" :key="item.name" class="table-row">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{item.status}}</td>

        </tr>
    </tbody>
</v-table>
</v-container>


</template>

  
<script>
// import AdminDashboard from '@/components/AdminDashboard.vue';
export default {
    // name:"AdminDashboard",
    // components:
    // {
    //     AdminDashboard,
    // },
    data() {
        return {
            info: [{
                    id: "1",
                    name: 'Fajar Iftikhar',
                    email: "fajariftikhar9@gmail.com",
                    status: "Delivered",
                },
                {
                    id: "2",
                    name: 'Ayesha',
                    email: "ayesha@mail.com",
                    status: "Dispatched",
                },
            ],
        };
    },
    methods: {},
    
};
</script>

<style scoped>

.table-row {
    padding: 12px;
}

</style>
