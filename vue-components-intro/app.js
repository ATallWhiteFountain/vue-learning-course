const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '012 345 678',
                    email: 'manuel.lorenz@lchst.com'
                },
                {
                    id: 'angela',
                    name: 'Angela Yu',
                    phone: '982 312 342',
                    email: 'angela.yu@localhost.com'
                }
            ]
        }
    }
});

app.component('friend-contact', {
    template: `
    <div>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleVisibility">{{ visibilityMsg }}</button>
        <ul v-if="detailVisibility">
            <li><strong>Phone: </strong>{{ friend.phone }}</li>
            <li><strong>Email: </strong>{{ friend.email }}</li>
        </ul>
    </div>
    `,
    data() {
        return {
            detailVisibility: false
        }
    },
    methods: {
        toggleVisibility() {
            this.detailVisibility = !this.detailVisibility;
        }
    },
    computed: {
        visibilityMsg() {
            return this.visibilityMsg ? 'Hide' : 'Show';
        }
    }
});

app.mount('#app');