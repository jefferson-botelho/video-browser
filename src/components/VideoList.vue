<template>
  <ul class="list-group col-md-4">
    <div 
      v-for="video in videos"
      :key="video.etag"
      :video="video"
    >
      <li class="list-group-item media" @click="onVideoSelect(video)">
        <img class="mr-3" :src="thumbnailUrl(video)">
        <div class="media-body">
          {{ video.snippet.title }}
        </div>
      </li>
    </div>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { videosStore } from '@/stores/videos';

const store = videosStore()

const videos = computed(() => store.getVideos);

const onVideoSelect = (video: any) => {
    store.selectVideo(video);
}

const thumbnailUrl = (video: any) => {
    return video.snippet.thumbnails.default.url
};
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