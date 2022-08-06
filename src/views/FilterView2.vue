<template >
    <div>
        <div class="filter_head">
            <router-link to="/">home</router-link>
            <h1 class="fiter_title">Mujer2</h1>
            <div class="filter_filters">
                <button v-for="(category, index) in categories" :key="index" @click="filtrando(category)" :value="category">
                {{category}}
                </button>
            </div>
        </div>
        <div class="filter_content">
            <div class="filter_individual" v-for="(product, index) in productsGeted" :key="index">
            {{product.title}}
            <div class="test">
              {{product.pito}}
            </div>
            </div>

            <div>
              {{productPoped}}
            </div>

        </div>
    </div>
</template>
<script lang="ts">
import { getProducts} from '../stores/products'
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterView2",
  components: {
  },
  data(): any {
    return {
      categories : ['Blusa', 'Faldas', 'Pants', 'Joyeria'],
      productsGeted : getProducts().products,
      filterPressedControl: true,
      filterSelected: '',
      productPoped: 'Pito'
    };
  },
  methods: {
    alertaAueropuerto() {
      alert('hodi')
      
    },
    filtrando(filtro: string): string[]{
      if (this.filterPressedControl == true || this.filterSelected != filtro){
        this.filterSelected = filtro
        this.productsGeted = getProducts().products
        this.productsGeted = this.productsGeted.filter((elemento: any)=> {
            return elemento.category === filtro
            })
        this.filterPressedControl = false
      }else{
        this.productsGeted = getProducts().products
        this.filterPressedControl = true
      } 
    console.log(this.productsGeted)
    return this.productsGeted
    },

  }
})

</script>
<style lang="css">
    .filter_content{
      position: absolute;
      display: flex;
      flex-wrap: wrap;
      
      width: 700px;
      margin-top: 20px;
      
      border-width: 1px;
      border-radius: 5px;
    }

    .filter_individual{
      border-style: solid;
      border-width: 1px;
      border-radius: 10px;
      margin: 10px;
      height: 200px;
      width: 200px;
    }

    .test{
      border-style: solid;
      border-radius: 10px;
      width: 80%;
    }
</style>