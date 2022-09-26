/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PostService from '../services/PostService';

export const createPosts = createAsyncThunk(
  'posts/createPosts',
  async ({
    operatorId,
    name,
    bio,
    salesTaxRate,
    salesTaxDescription,
    processingFee,
    images,
    publishedUnpublished,
    timeZone,
    amenities,
    numberOfSpaces,
    country,
    street,
    state,
    city,
    zip,
    latitude,
    longitude,
  }) => {
    try {
      const response = await PostService.createPosts({
        name,
        operatorId,
        bio,
        salesTaxRate,
        salesTaxDescription,
        processingFee,
        images,
        publishedUnpublished,
        timeZone,
        amenities,
        numberOfSpaces,
        address: {
          street,
          country,
          state,
          city,
          zip,
          latitude,
          longitude,
        },
      });
      const data = await response.data;
      if (response.status >= 400 && response.status < 600) {
        throw new Error(data.failure);
      }
      return data;
    } catch (e) {
      throw new Error('data failure');
    }
  }
);

export const searchPosts = createAsyncThunk(
  'Posts/searchPosts',
  async ({ city }) => {
    try {
      const response = await PostService.findSearch({ city });

      const data = await response.data;
      if (response.status !== 200) {
        throw new Error(data.failure);
      }
      return data;
    } catch (e) {
      throw new Error('Invalid search ...');
    }
  }
);

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const response = await PostService.getPosts();
    const data = response.data;
    return data;
  }
);

export const getPost = createAsyncThunk(
  'post/getPost',
  async (postId) => {
    const response = await PostService.getPost(postId);
    const data = response.data;
    return data;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  extraReducers: {
    [searchPosts.pending]: (state) => {
      state.loading = true;
    },
    [searchPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [searchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [createPosts.pending]: (state) => {
      state.loading = true;
    },
    [createPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [createPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    },
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.posts;
    },
    [getPost.pending]: (state) => {
      state.loading = true;
    },
    [getPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = [action.payload];
    },
  },
});

export default postsSlice.reducer;
