import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from '../services/UserService';

// Thunks
export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await UserService.getUsers();
  return response.data;
});

export const getUser = createAsyncThunk('user/getUser', async (userId) => {
  const response = await UserService.getUser(userId);
  return response.data;
});

export const searchUsers = createAsyncThunk('users/searchUsers', async (searchTerm) => {
  const response = await UserService.searchUsers(searchTerm);
  return response.data;
});

export const recommendedUsers = createAsyncThunk('users/getRecommendedUsers', async () => { // renamed from `recommendedUsers` to `getRecommendedUsers` to match convention
  const response = await UserService.getRecommendedUsers();
  return response.data;
});

export const updateProfile = createAsyncThunk('user/updateProfile', async (userData) => {
  const response = await UserService.updateProfile(userData);
  return response.data;
});

// Slice
const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    user: {},
    searchResults: [],
    recommendedUsers: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      })
      .addCase(recommendedUsers.fulfilled, (state, action) => { // updated to match the correct thunk name
        state.recommendedUsers = action.payload;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = action.payload.user;
      });
  },
});

export default userSlice.reducer;
