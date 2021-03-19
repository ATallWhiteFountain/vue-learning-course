// v-show alternatywa dla v-if, ale element zawsze jest
// wysyłany do html, a widoczność zależy od css display

// v-for inna składnia: v-for="(item, index) in goals"
// v-for="value in {name: 'Max', age: 32}" można iterować po obiektach (wartości/klucze)
// v-for="(value, key, index) in  {name: 'Max', age: 32}"
// v-for="num in 10"

const app = Vue.createApp({
  data() {
    return { goals: [], inputGoal: ''};
  },
  methods: {
    addGoal() {
      this.goals.push({title: this.inputGoal, note: ''});
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  },
});

app.mount('#user-goals');
