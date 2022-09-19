<template>

<!-- <h1>{{params.id}}</h1>
        <h1>{{singelProductGeted.title}}</h1>
        <h1>{{singelProductGeted.precio}}</h1>
        <h1>{{singelProductGeted.category}}</h1> -->
    <div class="SingleProductView">

        <div class="SingleProductView__container">
            <div class="SingleProductView__container-contImg">
                <div class="SingleProductView__container-contImg-inside">
                    <img :src="'/imgs/Test/img-'+imgPrincipal+'.jpg'">
                </div>
            </div>

            <div class="SingleProductView__container-contPreview" >
                <div class="SingleProductView__container-contPreview-contImg" @click="changeImgPrincipal(1)">
                    <div class="SingleProductView__container-contPreview-img">
                        <img src="/imgs/Test/img-1.jpg" >
                    </div>
                </div>

                <div class="SingleProductView__container-contPreview-contImg" @click="changeImgPrincipal(2)">
                    <div class="SingleProductView__container-contPreview-img">
                        <img src="/imgs/Test/img-2.jpg">
                    </div>
                </div>

                <div class="SingleProductView__container-contPreview-contImg" @click="changeImgPrincipal(3)">
                    <div class="SingleProductView__container-contPreview-img">
                        <img src="/imgs/Test/img-3.jpg">
                    </div>
                </div>

                <div class="SingleProductView__container-contPreview-contImg" @click="changeImgPrincipal(4)">
                    <div class="SingleProductView__container-contPreview-img">
                        <img src="/imgs/Test/img-4.jpg">
                    </div>
                </div>
            </div>  
            </div>

      
        
        </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import { useRoute } from 'vue-router';
import { getProducts } from '../stores/products'

const params = useRoute().params
const singelProductGeted = getProducts().getProducById(Number(params.id))

const imgPrincipal = ref(1)

const changeImgPrincipal = (value: number) =>{
    imgPrincipal.value = value
}
</script>
<style lang="scss">
    @use '../SCSS/abstract' as *;
    
</style>