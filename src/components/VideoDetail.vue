<template>
  <div v-if="video" class="col-md-8">
    <div class="ratio ratio-16x9">
      <iframe :src="videoUrl" allowfullscreen></iframe>
    </div>
    <div class="details">
      <h4>{{ video.snippet.title }}</h4>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import store from '../store'

const video = computed(() => store.getters['getSelectedVideo'])
const videoUrl = computed(() => store.getters['getEmbededUrl'])

</script>

<style scoped>
  .details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>