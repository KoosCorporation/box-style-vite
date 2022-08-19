<template >
    <div>
        <h1>{{params.category}}</h1>
        <h2>hodi</h2>
        <CategoriesComponent :categoryRoute = "params.category"/>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import CategoriesComponent from "../components/CategoriesComponent.vue";
const params =  useRoute().params
</script>
<style lang="scss" scoped>
    
</style>