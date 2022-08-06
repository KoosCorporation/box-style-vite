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
          <a href="HTML/info.html">saber mas</a>
        </div>
      </div>
    </header>

    <!-- main content // ====================== -->
    <main>
      <div class="cont-bar">
        <div class="bar"></div>
      </div>

      <h1>Lo Nuevo</h1>
      <!-- All Products // ================================== -->
      <div class="cont-products">
        <!-- Product // -------------------------------- -->
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

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
  height: 1500px;
  border-radius: 30px 30px 0px 0px;
  padding: 20px;
  background-color: white;
  transform: translateY(600px);
  position: relative;
  overscroll-behavior: auto;

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
}

</style>
