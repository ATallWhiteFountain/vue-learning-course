const app = Vue.createApp({
    data() {
        return {
            boxHighlight: [false, false, false],
            name: 'works'
        }
    },
    methods: {
        boxToggle(boxNr) {
            this.boxHighlight[boxNr] = !this.boxHighlight[boxNr];
        }
    }
}).mount('#styling');
