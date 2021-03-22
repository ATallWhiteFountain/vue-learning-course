<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ buttonMsg }}</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone: </strong>{{ friend.phone }}</li>
            <li><strong>Email: </strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'Friend',
    data() {
        return {
            detailsVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '012 345 678',
                email: 'manuel.lorenz@lchst.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    },
    computed: {
        buttonMsg() {
            return this.detailsVisible ? 'Hide details' : 'Show details';
        }
    }
}
</script>