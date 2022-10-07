<template >
    <div>
            <h1 class="ProductsView__Title">{{params.category}}</h1>
        <CategoriesComponent :categoryRoute = "params.category"/>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import CategoriesComponent from "../components/CategoriesComponent.vue";
const params =  useRoute().params
</script>

<style lang="scss" scoped>
    @use '../SCSS/abstract' as *;




</style>