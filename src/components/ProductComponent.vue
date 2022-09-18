<template>
  <div class="Product">

    <!-- product-top -->
    <div class="product-top">
      <div class="product-top__container">
        <img src="../assets/img/products/product-1.png" alt="" />
      </div>
    </div>

    <!-- product-bottom -->
    <div class="product-bottom">
      <div class="product-bottom__info">
        <p>{{props.product?.title}}</p>
      </div>

      <div class="product-bottom__bottom">
        <div class="talla">
          <p>Talla: <b>M</b></p>
        </div>
        <h2>${{props.product?.precio}}</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  product?: {
    id?: number | number[];
    title?: string | string[];
    category?: string | string[];
    precio?: number;
    imageRoute?: string;
    new?: boolean;
  };
}>();
</script>

<style lang="scss" scoped>
@import "../assets/assets";

.Product {
  width: 175px;
  height: 275px;
  margin: 15px 0px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background: white;
  align-items: center;
  box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.16);
  -webkit-box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.16);
  

/* product-top */
  .product-top {
    height: 70%;
    width: 100%;
    border-radius: 12px 12px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    .product-top__container {
      width: 90%;
      height: 95%;
      align-self: flex-end;
      border-radius: 12px 12px 0 0;
      background: $lite;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 80%;
        height: 80%;
      }
    }
  }

  /* product-bottom */
  .product-bottom {
    background: $lite-brown;
    height: 30%;
    width: 100%;
    border-radius: 0 0 12px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .product-bottom__info {
      padding: 7px;
      font-size: 16px;
      color: white;
      text-decoration: none;
      border-bottom: none;
    }

    .product-bottom__bottom {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .talla {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 100%;
        background: white;
        color: $lite-brown;
      }

      h2 {
        color: white;
        margin-right: 10px;
        font-size: 25px;
        font-weight: 600;
      }
    }
  }
}


</style>
