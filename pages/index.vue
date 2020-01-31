<template>
  <div class="container">
    <div class="locale-changer" style="margin-right: 30px">
      <nuxt-link
              v-if="$i18n.locale !== 'en'"
              :to="switchLocalePath('en')"
      >
        English
      </nuxt-link>

      <nuxt-link
              v-if="$i18n.locale !== 'az'"
              :to="switchLocalePath('az')"
      >
        Azeri
      </nuxt-link>
    </div>

    <h2 style="margin-right: 20px">Info form</h2>
    <form @submit.prevent="submitForm">
      <ValidationProvider :name="$t('user.name')" rules="required|min:3" v-slot="{ errors }">
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
            alert(`Name: ${this.form.name} and Age is ${this.form.age}` )
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
