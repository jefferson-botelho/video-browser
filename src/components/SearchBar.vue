<template>
  <div class="search-bar">
    <form @submit.prevent="onSubmit">
      <input class="form-control col-8"/>
      <input type="submit" value="search" class="btn btn-primary"/>
  </form> 
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const emit = defineEmits(['searchTerm'])

const onSubmit = (e) => {
  emit('searchTerm', e.target.value);
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