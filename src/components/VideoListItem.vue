<template>
  <li class="list-group-item media" @click="onVideoSelect">
    <img class="mr-3" :src="thumbnailUrl" />
      <div class="media-body">
        {{ video.snippet.title }}
      </div>
  </li>
</template>

<script setup>
import { defineProps, computed, defineEmits } from 'vue'

const props = defineProps(['video']);
const emit = defineEmits(['videoSelect'])

const onVideoSelect = () => {
  emit('videoSelect', props.video)
  };

const thumbnailUrl =  computed(() => props.video.snippet.thumbnails.default.url)
</script>

<style scoped>
  .media-body {
    padding-left: 10px;
  }

  li {
    display: flex;
    cursor: pointer;
  }

  li:hover {
    background-color: #eee;
  }
</style>