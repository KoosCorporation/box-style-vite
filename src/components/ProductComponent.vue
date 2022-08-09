<template >
    <div>
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
    imageRoute?: string | string[],
    new?: boolean
    }
} > ()
</script>
<style lang="">
    
</style>