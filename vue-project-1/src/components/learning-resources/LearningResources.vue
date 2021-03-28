<template>
    <ul>
        <resource-item v-for="resource in resources" :resource="resource" :key="resource.id"></resource-item>
    </ul>
</template>

<script>
import ResourceItem from './ResourceItem';

export default {
    components: {
        ResourceItem
    },
    inject: ['resources']
}
</script>

<style scoped>

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}

</style>