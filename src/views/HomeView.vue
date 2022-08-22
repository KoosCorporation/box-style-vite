<template>
  <div>
    <header>
      <div class="bg-image">
        <img src="../assets/img/other/img12.png" alt="" />
      </div>

      <div class="slogan-container">
        <img src="../assets/img/other/LogoPNG.png" alt="" />

        <h1>
          The ultimate <br />
          pre loved store
        </h1>

        <div class="saber-mas">
          <router-link to="/About">saber mas</router-link>
        </div>
      </div>
    </header>

    <!-- main content // ====================== -->
    <main>
      <div class="cont-bar">
        <div class="bar"></div>
      </div>

      <h1 class="new-arrival__title">New Arrival</h1>
      <!-- All Products // ================================== -->
      <div class="new-arrival__cont-products">
        <!-- Product // -------------------------------- -->
        <router-link :to="`/Products/product/${product.id}`"  v-for="(product, index) in productsGeted"
          :key="index">
        <ProductComponent   :product="product" />
      </router-link>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  ref
} from 'vue'
import {
  getProducts
} from '../stores/products'
import ProductComponent from '../components/ProductComponent.vue';

let productsGeted = ref(getProducts().getNewProducts())

</script>

<style lang="scss" scoped>
@import '../assets/assets';


// header -------------------
header {
  display: grid;
  grid: repeat(1, 1fr / 1, 1fr);
  position: fixed;
  height: 700px;

  .bg-image {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 700px;
    grid-area: 1/1/2/2;
  }

  .bg-image img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -3;
  }

  .slogan-container {
    grid-area: 1/1/2/2;
    height: 50%;
    width: 80%;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
    }

    h1 {
      text-align: center;
      color: rgba(255, 255, 255, 0.856);
      font-weight: 100;
      font-family: $font;
      font-size: 30px;
      margin: 10px;
    }
  }

  .saber-mas {

    //includes
    @include flex-center(row);

    width: 160px;
    height: 50px;
    background: white;
    border-radius: 9px;
    margin-top: 5px;
    background-color: $transparent-brown;
    box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.16);
    -webkit-box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.16);

    a {
      font-size: 18px;
      text-decoration: none;
      color: white;
    }
  }
}

main {
  height: auto;
  border-radius: 30px 30px 0px 0px;
  padding: 20px 0px;
  background-color: white;
  transform: translateY(600px);
  position: relative;
  overscroll-behavior: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  

  .cont-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.bar {
  width: 150px;
  height: 5px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.144);
}

.new-arrival__title {
  align-self: flex-start;
  margin-bottom: 20px;
margin-left: 15px;
}

.new-arrival__cont-products {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  justify-content: space-around;
  align-self: center;
  width: 95%;
  
}
}

</style>
