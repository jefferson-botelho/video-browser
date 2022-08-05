<template>
  <div class="container">
    <SearchBar></SearchBar>
    <div class="row">
      <VideoDetail/>
      <VideoList 
      :videos="videos"
      ></VideoList>
    </div>
    
  </div>
</template>

<script setup>
import SearchBar from './components/SearchBar.vue'
import VideoList from './components/VideoList.vue'
import VideoDetail from './components/VideoDetail.vue'
import store from './store'

// eslint-disable-next-line no-unused-vars
const videos = store.getters['getVideos'];

</script>