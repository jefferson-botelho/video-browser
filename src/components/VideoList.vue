<template>
  <ul class="list-group col-md-4">
    <VideoListItem 
    v-for="video in videos"
    :video="video"
    :key="video.etag"
    @videoSelect="onVideoSelect"
    >
    </VideoListItem>
  </ul>
</template>

<script setup>
import VideoListItem from './VideoListItem.vue';
import { defineProps, defineEmits } from 'vue'

defineProps(['videos']);

const emit = defineEmits(['videoSelect']);

const onVideoSelect = (video) => {
  emit('videoSelect', video)
  };

</script>

<style>
</style>