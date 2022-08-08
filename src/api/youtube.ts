import axios from 'axios'

export class Api {
    static async search(searchTerm: string) {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: process.env.VUE_APP_API_KEY,
                type: 'video',
                part: 'snippet',
                q: searchTerm
            }
        })
        return res.data.items
    }
} 