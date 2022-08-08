import { Api } from '../api/youtube' 
import { defineStore } from 'pinia'

interface State {
  videos: any,
  selectedVideo: any;
}

export const videosStore = defineStore('videos', {
    // convert to a function
    state: (): State => ({
        videos: [],
        selectedVideo: null
    }),
    getters: {
        getVideos: (state) => state.videos,
        getSelectedVideo: (state) => state.selectedVideo,
        getEmbededUrl: (state) => `https://www.youtube.com/embed/${state.selectedVideo.id.videoId}`
    },
    actions: {
        selectVideo(video: any) {
            this.selectedVideo = video
        },
        async searchVideos(searchTerm: string) {
            const videos = await Api.search(searchTerm);
            this.videos = videos
        }
    }
})