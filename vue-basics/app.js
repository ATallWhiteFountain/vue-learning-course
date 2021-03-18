Vue.createApp({
    data() {
        return {
            courseGoal: 'Be competent intern :)',
            courseGoal2: '',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNum = Math.random();
            if (randomNum < 0.5) {
                this.courseGoal2 = 'Learn Vue';
            } else {
                this.courseGoal2 = 'Master Vue';
            }
            return '<h3>'.concat(this.courseGoal2.concat('<h3>'));
        }
    },
}).mount('#user-goal');