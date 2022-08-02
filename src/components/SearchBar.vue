<template>
  <form @submit.prevent="onSubmit">
    <input class="form-control col-8"/>
    <input type="submit" value="search" class="btn btn-primary"/>
  </form> 
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onSubmit(event) {
      this.$emit('searchTerm', event.target.value)
    }
  }
}
</script>

<style>

</style>