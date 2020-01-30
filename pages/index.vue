<template>
  <div class="container">
    <h2 style="margin-right: 20px">Info form</h2>
    <form @submit.prevent="submitForm">
      <ValidationProvider name="Name" rules="required|min:3" v-slot="{ errors }">
        <input type="text" v-model="form.name" placeholder="Enter name">
        <span v-show="errors.length>0" class="is-invalid">{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider name="Age" rules="required" v-slot="{ errors }">
        <input type="text" v-model="form.age" placeholder="Enter age">
        <span v-show="errors.length>0" class="is-invalid">{{ errors[0]}}</span>
      </ValidationProvider>

      <button type="submit">Show my info</button>
    </form>
  </div>
</template>

<script>

export default {
    data(){
      return {
        form :{
            name: null,
            age: null
        }
      }
    },
    methods: {
        submitForm(){
            alert(`Name: ${this.form.name} and Age is ${this.form.name}` )
        }
    }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

  .is-invalid{
    color: red;
  }
</style>
