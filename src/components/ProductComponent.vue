<template >
    <div>
        <h1>{{props.categoryRoute}}</h1>
        <h1>{{props.product?.title}}</h1>
        <h1>{{props.product?.category}}</h1>
        <h1>{{props.product?.precio}}</h1>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps < {
    categoryRoute: string | string[],
    product?: {
    title?: string | string[],
    category?: string | string[],
    precio?: number,
    }
} > ()
</script>
<style lang="">
    
</style>