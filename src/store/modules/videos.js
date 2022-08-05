import { search } from '../../api/youtube' 

const state = () => ({
  videos: [],
  selectedVideo: null
});

const getters = {
  getVideos: state => state.videos,
  getSelectedVideo: state => state.selectVideo,
  getEmbededUrl: state => `https://www.youtube.com/embed/${state.selectedVideo.id.videoId}`
};

const mutations = {
  setSelectedVideo: (state, video) => {
    state.selectedVideo = video
  },
  setVideos: (state, videos) => {
    state.videos = videos
  }
};

const actions = {
  selectVideo: ({ commit }, video) => {
    commit('setSelectedVideo', video)
  },

  searchVideos: async ({ commit }, searchTerm) => {
    console.log(searchTerm)
    const videos = await search(searchTerm);
    commit('setVideos', videos)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}