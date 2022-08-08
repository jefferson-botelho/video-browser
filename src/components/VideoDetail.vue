<template>
  <div v-if="video" class="col-md-8">
    <div class="ratio ratio-16x9">
      <iframe :src="videoUrl" allowfullscreen />
    </div>
    <div class="details">
      <h4>{{ video.snippet.title }}</h4>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { videosStore } from '@/stores/videos';

const store = videosStore()

const video = computed(() => store.getSelectedVideo)
const videoUrl = computed(() => store.getEmbededUrl)

</script>

<style scoped>
  .details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>