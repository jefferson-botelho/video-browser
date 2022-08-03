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

<script>
import axios from 'axios'
import SearchBar from './components/SearchBar.vue';
import VideoList from './components/VideoList.vue';
import VideoDetail from './components/VideoDetail.vue';

export default {
    name: "App",
    components: { SearchBar, VideoList, VideoDetail },
    data() {
      return { videos: [], selectedVideo: null };
    },
    methods: {
      onVideoSelect(video) {
        this.selectedVideo = video
      },
      search(searchTerm) {
        axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: process.env.VUE_APP_API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm
          }
        }).then(res => {
          this.videos = res.data.items
        })
      }
    }
};
</script>