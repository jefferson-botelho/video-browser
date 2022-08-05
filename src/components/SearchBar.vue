<template>
  <div class="search-bar">
    <form @submit.prevent="onSubmit">
      <input name="term" class="form-control col-8"/>
      <input type="submit" value="search" class="btn btn-primary"/>
  </form> 
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['termChange'])

const onSubmit = (e) => {
  emit('termChange', e.target['term'].value);
}
</script>

<style scoped>
  .btn {
    width: 10%;
  }
  input {
    width: 60%;
  }
  form { 
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>