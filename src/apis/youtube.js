import axios from 'axios';

const KEY = 'AIzaSyD-jWyELo7-fSaszK6DJMTg1gADhGKEp2U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});