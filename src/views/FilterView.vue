<template >
    <div>
        <div class="filter_head">
            <router-link to="/">home</router-link>
            <h1 class="fiter_title">Mujer</h1>
            <div class="filter_filters">
                <button v-for="(category, index) in categories" :key="index" @click="filtrando(category)" :value="category">
                {{category}}
                </button>
            </div>
        </div>
        <div class="filter_content">
            <div class="filter_individual" v-for="(product, index) in productsGeted" :key="index">
            {{product.title}}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { getProducts} from '../stores/products'
const  categories = ['Blusa', 'Faldas', 'Pants', 'Joyeria']
let productsGeted = getProducts().products;

function filtrando(filtro: string){
    productsGeted = getProducts().products
    productsGeted = productsGeted.filter((elemento)=> {
        return elemento.category === filtro
    })
    console.log(productsGeted)
    return productsGeted
}
</script>
<style lang="css">
    .filter_content{
        border-style: dotted;
        border-radius: 5px;
    }
</style>