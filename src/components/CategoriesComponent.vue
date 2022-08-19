<template>
  <div>
    <h1>Filtro de categorias</h1>
    <h1>{{ props.categoryRoute }}</h1>
    <h1>categories geted {{ categoriesGeted.categoryValues }}</h1>
    
    <div class="categories__container">
      <!-- //Botones de Categoiras // -------------------------  -->
      <button class="categories-button">Pito</button>
      <button class="categories-button">Pito</button>
      <button class="categories-button">Pito</button>
      <button class="categories-button">Pito</button>
      <button class="categories-button">Pito</button>
      <!-- <button
        class="categories-button"
        v-for="(category, index) in categoriesGeted.categoryValues"
        :key="index"
        @click="filtrando(category)"
      >
        {{ category }}
      </button> -->
      <!-- --------------------------------------------------- -->

    </div>
    <div class="CategoriesComponent_products">
      <router-link
        :to="`/Products/product/${product.id}`"
        v-for="(product, index) in productsGeted"
        :key="index"
      >
        <ProductComponent class="productComponente" :product="product" />
      </router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { getProducts } from "../stores/products";
import ProductComponent from "./ProductComponent.vue";
import { useRoute } from "vue-router";

let filterSelected = "";
let filterPressedControl = true;
let productsGeted = ref(getProducts().products);

const props = defineProps<{
  categoryRoute: string | string[];
}>();

const filtrando = (filtro: string) => {
  console.log(filtro);
  if (filterPressedControl == true || filterSelected != filtro) {
    filterSelected = filtro;
    productsGeted.value = getProducts().products;
    productsGeted.value = getProducts().filterProducts(filtro);
    filterPressedControl = false;
  } else {
    productsGeted.value = getProducts().products;
    filterPressedControl = true;
  }

  return productsGeted;
};

const categoriesGeted = getProducts().getCategoryRoute(props.categoryRoute);
</script>

<style lang="scss" scoped>

.categories__container {
  width: 100%;
  height: 200px;
  background: blue;
  
  overflow-x: scroll;
  position: relative;
}

.categories-button {
  width: 200px;
  height: 70px;
  background: red;
}

.CategoriesComponent_products {
  display: grid;
  grid-column: 2;
}

.productComponente {
  border-style: solid;
  border-width: 1px;
  margin: 5px;
  border-radius: 10px;
}
</style>
