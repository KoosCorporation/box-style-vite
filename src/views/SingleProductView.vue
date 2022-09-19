<template>
    <div>
        <h1>{{params.id}}</h1>
        <h1>{{singelProductGeted.title}}</h1>
        <h1>{{singelProductGeted.precio}}</h1>
        <h1>{{singelProductGeted.category}}</h1>
        <img src="../assets/img/products/product-1.png">
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { getProducts } from '../stores/products'

const params = useRoute().params
const singelProductGeted = getProducts().getProducById(Number(params.id))
</script>
<style lang="scss">
    @use '../SCSS/abstract' as *;
    
</style>