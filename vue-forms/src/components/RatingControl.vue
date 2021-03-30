<template>
    <ul>
        <li :class="{active: activeOption === 'poor'}"><button type="button" @click="activate('poor')">Poor</button></li>
        <li :class="{active: activeOption === 'average'}"><button type="button" @click="activate('average')">Average</button></li>
        <li :class="{active: activeOption === 'great'}"><button type="button" @click="activate('great')">Great</button></li>
    </ul>
</template>

<script>
export default {
    // special prop & emit for custom components
    props: ['modelValue'],
    emits: ['update:modelValue'],
    computed: {
        activeOption() {
            return this.modelValue;
        }
    },
    methods: {
        activate(option) {
            this.$emit('update:modelValue', option);
        }
    }
}
</script>

<style scoped>
.active {
    background-color: purple;
}

.active button {
    background-color: white;
    color: purple;
}

ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}

li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

</style>