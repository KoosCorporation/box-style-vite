<template>
  <div>
    <h1>Filtro de categorias</h1>
    <h1>Filtro de 2</h1>
    <h1>{{props.categoryRoute}}</h1>
    <h1>categories geted {{categoriesGeted.categoryValues}}</h1>
    <div class="CategoriesComponent_filters">
      <button v-for="(category, index) in categoriesGeted.categoryValues" :key="index"
        @click="filtrando(category)">{{category}}</button>
    </div>
    <div class="CategoriesComponent_products">
      <ProductComponent class="productComponente" categoryRoute="hodi" v-for="(product, index) in productsGeted" :key="index"
        :product="product" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import {
    ref,
    watch,
    onMounted,
    onBeforeMount,
    
  } from 'vue'
  import {
    getProducts
  } from '../stores/products'
  import ProductComponent from './ProductComponent.vue';
  import {
    useRoute
  } from "vue-router";


  let filterSelected = ''
  let filterPressedControl = true
  let productsGeted = ref(getProducts().products)

  const props = defineProps < {
    categoryRoute: string | string[]
  } > ()
  

  

  const filtrando = (filtro: string) => {
    console.log(filtro)
    if (filterPressedControl == true || filterSelected != filtro) {
      filterSelected = filtro
      productsGeted.value = getProducts().products
      productsGeted.value = getProducts().filterProducts(filtro)
      filterPressedControl = false
    } else {
      productsGeted.value = getProducts().products
      filterPressedControl = true
    }

    return productsGeted
  }

  const categoriesGeted = getProducts().getCategoryRoute(props.categoryRoute)
</script>
<style lang="css">

.CategoriesComponent_products{
  display: flex;
}

.productComponente{
  border-style: solid;
  border-width: 1px;
  margin: 5px;
  border-radius: 10px;
}
</style>