import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTweets } from '../services/twitterService';

export const fetchTweetsAsync = createAsyncThunk('twitter/fetchTweets', async (query) => {
  const tweets = await fetchTweets(query);
  return tweets;
});


export const twitterSlice = createSlice({
  name: 'twitter',
  initialState: {
    tweets: [],
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTweetsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTweetsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.tweets = action.payload;
      })
      .addCase(fetchTweetsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default twitterSlice.reducer;

