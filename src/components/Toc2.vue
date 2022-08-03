<script lang="ts">
export default{
setup() {
    function odi2(message: string){
        alert(message)
    }
    return{
        odi2
    }
}
}
</script>
<template>
    <h2>segunfo componente</h2>
    <button @click="odi2(123)">hi2</button>
</template>


<style lang="">
    
</style>