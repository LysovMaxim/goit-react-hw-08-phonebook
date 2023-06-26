import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrent, login, logout } from 'apiUser';

export const getCurrentThunk = createAsyncThunk('auth/current', () =>
  getCurrent()
);
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await login(body);
      dispatch(getCurrentThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('auth/logout', () => {
  logout()
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {token: '', isLoading: false, error: '', current: null },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.email = payload.email
      })
      .addCase(getCurrentThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.current = payload;
      }).addCase(logoutThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.current = null;
        state.token = '';
        state.error = "";
      })
      .addMatcher(
        ({ type }) => type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = '';
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        (state, { error, payload }) => {
          console.log(error)
          state.isLoading = false;
          state.error = payload ?? error.message ;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
