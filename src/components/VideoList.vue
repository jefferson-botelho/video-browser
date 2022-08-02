<template>
  <ul>
    <VideoListItem v-for="video in videos" :key="video">
    </VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem.vue';

export default {
    name: "VideoList",
    components: { VideoListItem },
    props: ["videos"]
}
</script>

<style>
</style>