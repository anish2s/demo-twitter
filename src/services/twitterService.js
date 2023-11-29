import axios from 'axios';

const BASE_URL = 'https://api.twitter.com/2/tweets';

const twitterService = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ` + process.env.TWITTER_BEARER_TOKEN,
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
