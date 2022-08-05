import axios from 'axios'

export const search = async (searchTerm) => {
  await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: process.env.VUE_APP_API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm
          }
        }).then(res => {
          return res.data.items
        })
}