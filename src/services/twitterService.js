import axios from 'axios';

const BASE_URL = 'https://api.twitter.com/2/tweets';

const twitterService = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAABgRrQEAAAAAmUSk8HFZky2Qpf1pSoj1TKa2nIE%3DsuX9H4N5egBsGIw8ebeQgmj6CuhQcNbm9Fh4qNXCVxNBdnTVwS`,
  },
});

export const fetchTweets = async (query) => {
  try {
    const response = await twitterService.get(`?ids=${query}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
