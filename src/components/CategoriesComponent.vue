<template>
  <div>
  
    <!-- Categories section -->
    <div class="categories__container">
        <div class="categories__container-item"
        v-for="(category, index) in categoriesGeted.categoryValues"
        :key="index">
          {{category}}
        </div>
        
        <!-- just for production to see how it looks with many items -->
        <div class="categories__container-item"
        v-for="(category, index) in categoriesGeted.categoryValues"
        :key="index">
          {{category}}
        </div>
        <div class="categories__container-item"
        v-for="(category, index) in categoriesGeted.categoryValues"
        :key="index">
          {{category}}
        </div>

        <div class="categories__container-item"
        v-for="(category, index) in categoriesGeted.categoryValues"
        :key="index">
          {{category}}
        </div>   
    </div>


    <div class="CategoriesComponent_products">
      <router-link class="router-link"
        :to="`/Products/product/${product.id}`"
        v-for="(product, index) in productsGeted"
        :key="index"
      >
        <ProductComponent :product="product" />
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




</style>
