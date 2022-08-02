<template>
  <div>
    <SearchBar @searchTerm="search"></SearchBar>
    <VideoList :videos="videos"></VideoList>
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from './components/SearchBar.vue';
import VideoList from './components/VideoList.vue';

export default {
    name: "App",
    components: { SearchBar, VideoList },
    data: () => {
      return { videos: [] };
    },
    methods: {
      search: function(searchTerm) {
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