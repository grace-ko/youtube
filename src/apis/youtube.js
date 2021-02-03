import axios from 'axios';


const KEY = 'AIzaSyAIYL-1kjq2jraCD7g6FZZ60xz7Sy5DGwU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
