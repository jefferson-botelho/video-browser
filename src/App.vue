<template>
  <div class="container">
    <SearchBar />
    <div class="row">
      <VideoDetail />
      <VideoList />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from './components/SearchBar.vue'
import VideoList from './components/VideoList.vue'
import VideoDetail from './components/VideoDetail.vue'
</script>