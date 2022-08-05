import { createStore } from 'vuex'

import videos from './modules/videos';

export default createStore({
  modules: {
    videos
  }
})