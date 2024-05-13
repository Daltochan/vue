const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      value: '',
      };
  },
  methods: {
    submitForm() { // This method is called when the form is submitted
      alert('Submitted!');
      },
    setValue(event, lastName) { // This method is called when the input field is changed
      this.value = event.target.value + ' ' + lastName;
    },
    add(num) { // This method is called when the add button is clicked
      this.counter = this.counter + num;
    },
    reduce(num) { // This method is called when the reduce button is clicked
      this.counter = this.counter - num;
    },
    resetInput() { // This method is called when the reset button is clicked
      this.value = '';
    }
  }
});

app.mount('#events');
