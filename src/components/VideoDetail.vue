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
import { computed, defineProps } from 'vue'

const props = defineProps(['video']);

const videoUrl = computed(() => { 
  return `https://www.youtube.com/embed/${props.video.id.videoId}` 
  })

</script>

<style scoped>
  .details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>