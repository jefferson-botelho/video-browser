<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
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
import { computed } from 'vue'

// eslint-disable-next-line no-unused-vars
const videos = computed(() => store.getters['getVideos']);

const onTermChange = (searchTerm) => {
  store.dispatch('searchVideos', searchTerm);
}

</script>