<template lang="">
  <nav>
    <button  class="nav-button" @click = "Toggle">
      <div class="button-line"></div>
      <div class="button-line2"></div>
    </button>

    <ul class="nav-links" :class ="toggle">
      <div class="nav-info__container">
        <li  ><router-link to="/">INICIO</router-link></li>
        <li ><router-link to="/About">ABOUT</router-link></li>
      </div>
      <div class="nav-links__container">
        <div class="li-card">
          <li  ><router-link to = "/Products/Mujer">Mujer</router-link></li>
        </div>

        <div class="li-card">
          <li ><router-link to="/Products/Hombre">Hombre</router-link></li>
        </div>

        <!-- Animated Category // -->
        <div class="li-card__duo">
          <li class="li-card__duo-tittle"><router-link to="/Products/Accesorios">Accesorios</router-link></li>
          <div class="card-duo__child">
            <a href="#" class="a-card__duo-child">Mujer</a> /
            <a href="#" class="a-card__duo-child">Hombre</a>
          </div>
        </div>

        <!-- Animated Category // -->
        <div class="li-card__duo">
          <li  class="li-card__duo-tittle"><router-link to="/Products/Calzado">Calzado</router-link></li>
          <div class="card-duo__child">
            <a href="#" class="a-card__duo-child">Mujer</a> /
            <a href="#" class="a-card__duo-child">Hombre</a>
          </div>
        </div>

        <div class="li-card">
          <li ><router-link to="/Products/Thrift_Flip">Thrift Flip</router-link></li>
        </div>
      </div>

      <div class="nav-rs">
        <div class="nav-rs__container">
          <!--instagram -->
          <svg
            class="rs-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z"
            />
          </svg>

          <!-- whatsapp -->
          <svg
            class="rs-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-5.971 18l.844-3.081c-.52-.902-.794-1.925-.794-2.973.001-3.279 2.668-5.946 5.946-5.946 1.591.001 3.084.62 4.206 1.744 1.123 1.124 1.741 2.618 1.74 4.207-.001 3.279-2.669 5.946-5.946 5.946-.995 0-1.976-.25-2.844-.724l-3.152.827zm3.298-1.903c.838.497 1.638.796 2.696.796 2.724 0 4.943-2.217 4.944-4.942.001-2.731-2.208-4.945-4.94-4.946-2.726 0-4.943 2.217-4.944 4.942 0 1.112.326 1.946.873 2.817l-.499 1.824 1.87-.491zm5.694-2.732c-.037-.062-.136-.099-.285-.174-.149-.074-.879-.434-1.015-.483-.136-.05-.235-.074-.334.074-.099.149-.384.483-.47.583-.087.099-.173.112-.322.037-.149-.074-.627-.231-1.195-.737-.442-.394-.74-.881-.827-1.029-.087-.149-.009-.229.065-.303l.223-.26.149-.248c.05-.099.025-.186-.012-.26l-.458-1.103c-.121-.29-.243-.25-.334-.255l-.286-.007c-.099 0-.26.037-.396.186s-.52.508-.52 1.24c0 .731.532 1.438.607 1.537.074.099 1.048 1.6 2.538 2.243.354.153.631.245.847.313.356.113.68.097.936.059.285-.043.879-.359 1.003-.706.123-.348.123-.645.086-.707z"
            />
          </svg>

          <!-- facebook -->
          <svg
            class="rs-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"
            />
          </svg>
        </div>
      </div>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

data(){
  return {
   navLinks: "nav-links",
    toggle: "open",
   isOpen: true,
  }
},

methods: {
  
 Toggle(){
  if(this.isOpen == false){
    this.toggle = 'open';
    this.isOpen = true
  } else {
    this.toggle = ""
    this.isOpen = false
  }
 },
 
},
watch:{
  $route(newRoute, oldRoute){
    if (this.toggle == 'open'){
      this.Toggle()
    }
  }
}


})
</script>
<style lang="scss" scoped>
@import '../assets/assets';

.nav-button {
  position: fixed;
  top: 15px;
  z-index: 10;
  right: 5px;
  width: 70px;
  margin-right: 10px;
  height: 70px;
  border-radius: 100%;
  background-color: $lite;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.16);
  -webkit-box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.16);
}

.nav-button .button-line {
  width: 65%;
  border-radius: 12px;
  height: 5px;
  background: $brown;
}
.nav-button .button-line2 {
  margin-top: 3px;
  margin-left: 10px;
  width: 45%;
  border-radius: 12px;
  height: 5px;
  background: $brown;
}

/* nav // ---------------------------------------- */
nav {
  position: relative;
  
}

/* nav-links// |General| */
.nav-links {
  display: flex;
  list-style: none;
  position: fixed;
  background-color: $lite;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  clip-path: circle(100px at 90% -10%);
  -webkit-clip-path: circle(100px at 100% -10%);
  transition: 0.2s ease-out;
  pointer-events: none;
  transform: translateY(-12px);

  z-index: 9;
}

.nav-links.open {
  clip-path: circle(1500px at 90% -10%);
  -webkit-clip-path: circle(1000px at 90% -10%);
  pointer-events: all;
  opacity: 1;
  background: $late;
  transform: translateY(0px);
}

/* nav-info |INICIO, INFO| */
.nav-info__container {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
}

.nav-info__container li {
  margin-left: 20px;
}

.nav-info__container li a {
    font-weight: 700;
}

.nav-links__container {
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 250px;
  justify-content: space-between;
}

/* Categories // |Categories & Categories Animation|  */
.li-card {
  display: flex;
  justify-content: center;
  border-bottom: solid rgba(255, 255, 255, 0.685) 1px;
  height: 40px;
}

.li-card__duo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: solid rgba(255, 255, 255, 0.685) 1px;
  height: 40px;
  transition: 0.5s;
}

.li-card__duo.cardBigger {
  height: 80px;
}

.li-card__duo li {
  color: white;
  font-size: 25px;
}

.li-card__duo-tittle {
  transition: ease-in-out 0.5s;
}
.li-card__duo-tittle.moveTittle {
  transform: translateY(-30px);
}

.card-duo__child {
  font-size: 20px;
  color: white;
  transition: ease-out 0.5s;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  margin-top: 10px;
  transform: translateY(20px);
  position: absolute;
}

.card-duo__child.openChild {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}

.card-duo__child a {
  color: white;
  text-decoration: none;
}

.nav-links li {
  opacity: 1;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 20px;
}

.nav-links li:nth-child(1) {
  transition: all 0.3s ease 0.2s;
}

.nav-links li:nth-child(2) {
  transition: all 0.3s ease 0.3s;
}

.nav-links li:nth-child(3) {
  transition: all 0.3s ease 0.4s;
}

.nav-links li:nth-child(4) {
  transition: all 0.3s ease 0.5s;
}

.nav-links li:nth-child(5) {
  transition: all 0.3s ease 0.6s;
}

.nav-links li:nth-child(6) {
  transition: all 0.3s ease 0.7s;
}

li.fade {
  opacity: 1;
}

/* nav-rs // */
.nav-rs {
  
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.rs-icon {
  fill: white;
  width: 50px;
  height: 50px;
  margin: 5px;
}

.nav-rs__container {
    display: flex;
    width: 180px;
    justify-content: space-between;
}
</style>
