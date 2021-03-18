// v-on: to dokładnie to samo co @ WAŻNE
// v-bind: to dokładnie to samo co : WAŻNE
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  watch: {
    counter(newVal, oldVal) {
      if(newVal > 50){
        setTimeout(() => {
          this.name = 'Exceeded count 50';
        }, 2000); 
      }
    }
  },
  methods: {
    increase(num) {
      this.counter += num;
    },
    decrease(num) {
      this.counter -= num;
    },
    submitForm(event) {
      alert('Submitted!')
    },
    resetInput() {
      this.name = '';
    },
    addTitle(title) {
      this.name = title + ' ' + this.name;
    }
  },
  computed: {
    namewtitle() {
      if (this.name === '') {
        return this.name;
      }
      return 'CEO ' + this.name;
    }
  }
});

app.mount('#events');
