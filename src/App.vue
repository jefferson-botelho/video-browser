<template>
  <div class="container">
    <SearchBar @searchTerm="search"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo" />
      <VideoList 
      @videoSelect="onVideoSelect"
      :videos="videos"
      ></VideoList>
    </div>
    
  </div>
</template>

<script setup>
import SearchBar from './components/SearchBar.vue'
import VideoList from './components/VideoList.vue'
import VideoDetail from './components/VideoDetail.vue'
import axios from 'axios'
import { ref } from 'vue';

// eslint-disable-next-line no-unused-vars
const videos = ref([]);
const selectedVideo = ref(null);

// eslint-disable-next-line no-unused-vars
const onVideoSelect = (video) => {
  selectedVideo.value = video;
}

// eslint-disable-next-line no-unused-vars
const search = (searchTerm) => {
  axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: process.env.VUE_APP_API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm
          }
        }).then(res => {
          videos.value = res.data.items
        })
}

</script>