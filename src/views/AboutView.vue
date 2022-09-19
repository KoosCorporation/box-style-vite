<template lang="">
  <div>
    <header class="info-container">
      <img src="../assets/img/info/info_banner.png" alt="banner_informacion" />
      <h1>Que somos?</h1>
      <p>
        Box style nace por la pasión de la moda, estilo y el querer difundir las
        maneras de un consumo sustentable y estilo pre loved. La tienda tiene
        como objetivo principal mostrar que en la ropa de segunda existen
        tesoros inigualables.
      </p>
    </header>
    <!-- three strong points // ================================== -->
    <main class="three-points__container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#BCAF9F"
          fill-opacity="1"
          d="M0,64L80,85.3C160,107,320,149,480,170.7C640,192,800,192,960,176C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <div class="three-points__content">
        <img src="../assets/img/info/Cards.png" alt="" />
        <div class="three-points__txt">
          <h4>Marcas Reconocidas</h4>
          <p>
            Nuestra principal objetivo es poder ofrecer las mejores marcas del
            mercado Y las que se encuentran en tendencia con un fácil acceso
            atraves de nuestra plataforma Garantizado un buena calidad.
          </p>

          <h4>Sustentabilidad</h4>
          <p>
            Nuestra empresa estará ayudando a reducir la huella de carbono,
            además de crear consciencia y un hábito de la ropa de segunda mano
            siendo esta la herramienta principal para disminuir el consumo de
            fast fashion.
          </p>

          <h4>De lo mas economico</h4>
          <p>
            Box style esta comprometido a ofrecer Moda y estilo a precios
            accesibles Para nuestro consumidores. Nuestro compromiso es ofrecer
            precios basados en el valor de el catálogo de productos que
            tendremos disponible.
          </p>
        </div>
      </div>
    </main>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script setup lang="ts">
import FooterComponent from '../components/FooterComponent.vue';
</script>

<style lang="scss" scoped>
@use '../SCSS/abstract' as *;

/* main information // ===================== */
.info-container {
  padding: 20px;
}

.info-container img {
  width: 100%;
}

.info-container h1 {
  color: $brown;
}

/* three strong points information // ======================= */
.three-points__container {
  height: 850px;
  width: 100%;
}

.three-points__container svg {
  transform: translateY(5px);
}

.three-points__content {
  background-color: $late;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.three-points__content img {
  width: 370px;
  justify-self: center;
  align-self: center;
}

.three-points__txt {
  align-self: center;
  margin: 30px;
}

.three-points__txt h4 {
  color: white;
}

.three-points__txt p {
  color: rgba(255, 255, 255, 0.808);
  margin-bottom: 20px;
  margin-top: 0px;
}
</style>
