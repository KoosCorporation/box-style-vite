<template >
    <div class="Product">
        <img :src="props.product?.imageRoute" alt="">
        <h1>{{props.product?.title}}</h1>
        <h1>{{props.product?.category}}</h1>
        <h1>{{props.product?.precio}}</h1>
        <h1>{{props.product?.new}}</h1>
    </div>

</template>
<script lang="ts" setup>
const props = defineProps < {
    product?: {
        id?: number | number[]
    title?: string | string[],
    category?: string | string[],
    precio?: number,
    imageRoute?: string,
    new?: boolean
    }
} > ()
</script>

<style lang="scss"  scoped>
    .Product {
        width: 170px;
        height: 250px;
        background: red;
        border-radius: 12px;
        margin-bottom: 15px;
    }

</style>