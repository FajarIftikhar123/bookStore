<template>


<v-navigation-drawer v-model="drawer" location="left" temporary>

    <v-list density="compact" nav>

      <v-list-item
        prepend-icon="mdi-folder"
        title="My Files"
        value="myfiles"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Shared with me"
        value="shared"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-star"
        title="Starred"
        value="starred"
      ></v-list-item>

    </v-list>

  </v-navigation-drawer>
</template>
<script>
</script>