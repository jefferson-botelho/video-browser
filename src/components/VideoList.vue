<template>
  <ul class="list-group col-md-4" >
    <div 
    v-for="video in videos"
    :video="video"
    :key="video.etag"
    >
      <li class="list-group-item media" @click="onVideoSelect(video)">
        <img class="mr-3" :src="thumbnailUrl(video)" />
        <div class="media-body">
          {{ video.snippet.title }}
        </div>
      </li>
    </div>
  </ul>
</template>

<script setup>
import store from '../store'
import { defineProps } from 'vue';

defineProps(['videos'])

const onVideoSelect = (video) => {
  store.dispatch('selectVideo', video);
}

const thumbnailUrl = (video) => {
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