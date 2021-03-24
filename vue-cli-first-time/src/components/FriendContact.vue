<template>
    <li>
        <h2>{{ name }} {{ favMsg }}</h2>
        <button @click="toggleFavourite">Toggle Favourite</button>
        <button @click="toggleDetails">{{ buttonMsg }}</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone: </strong>{{ phone }}</li>
            <li><strong>Email: </strong>{{ email }}</li>
        </ul>
        <button @click="$emit('delete', id)">Delete Friend</button>
    </li>
</template>

<script>
export default {
    name: 'FriendContact',
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: false
        },
        isFavourite: {
            type: Boolean,
            required: false,
            default: false
            // validator: function (value) {
            //     return value === '1' || value === '0';
            // }
        }
    },
    emits: ['toggle-favourite', 'delete'],
    // emits: {
    //     'toggle-favourite': function(id) {
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn('Id is missing!');
    //             return false;
    //         }
    //     }
    // },
    data() {
        return {
            detailsVisible: false,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },
        toggleFavourite() {
            this.$emit('toggle-favourite', this.id);
        }
    },
    computed: {
        buttonMsg() {
            return this.detailsVisible ? 'Hide details' : 'Show details';
        },
        favMsg() {
            return this.isFavourite ? '(favourite)' : '';
        }
    }
}
</script>