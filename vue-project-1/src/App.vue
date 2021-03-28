<template>
    <the-header title="The resources page"></the-header>
    <the-resources></the-resources>
</template>

<script>
import TheResources from './components/learning-resources/LearningResources';
import TheHeader from './components/layouts/TheHeader'

export default {
    components: {
        TheResources,
        TheHeader
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>
li {
    margin: auto;
    max-width: 40rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
}

p {
    margin: 0.5rem 0;
}

a {
    text-decoration: none;
    color: #ce5c00;
}

a:hover,
a:active {
    color: #c89300;
}
</style>