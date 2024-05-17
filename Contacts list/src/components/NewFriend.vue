<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" id="name" required autofocus v-model="enteredName">
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" id="name" required v-model="enteredPhone">
    </div>
    <div>
      <label>E-mail</label>
      <input type="email" id="email" required v-model="enteredEmail">
    </div>
    <div>
      <button>Add Friend</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ['add-friend'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: ''
    }
  },
  methods: {
    submitData() {
      this.$emit(
          'add-friend',
          this.enteredName,
          this.enteredPhone,
          this.enteredEmail,
      );
    }
  }
}
</script>

<style>

</style>