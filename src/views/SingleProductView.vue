<template>

<!-- <h1>{{params.id}}</h1>
        <h1>{{singelProductGeted.title}}</h1>
        <h1>{{singelProductGeted.precio}}</h1>
        <h1>{{singelProductGeted.category}}</h1> -->
    <div class="SingleProductView">

        <div class="SingleProductView__container">
            <div class="SingleProductView__container-contImg">
                <div class="SingleProductView__container-contImg-inside">
                    <img src="../assets/img/products/product-1.png">
                </div>
            </div>

            <div class="SingleProductView__container-contPreview">
                <div class="SingleProductView__container-contPreview-contImg">
                    <div class="SingleProductView__container-contPreview-img">
                        <img src="../assets/img/products/product-1.png">
                    </div>
                </div>

                <div class="SingleProductView__container-contPreview-contImg">
                    <div class="SingleProductView__container-contPreview-img">
                        <img src="../assets/img/products/product-1.png">
                    </div>
                </div>

                <div class="SingleProductView__container-contPreview-contImg">
                    <div class="SingleProductView__container-contPreview-img">
                        <img src="../assets/img/products/product-1.png">
                    </div>
                </div>

                <div class="SingleProductView__container-contPreview-contImg">
                    <div class="SingleProductView__container-contPreview-img">
                        <img src="../assets/img/products/product-1.png">
                    </div>
                </div>
            </div>  
            </div>

      
        
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