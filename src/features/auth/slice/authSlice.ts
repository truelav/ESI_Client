import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { accessToken: null, profile: null },
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload);
      const { accessToken, userDto } = action.payload;
      state.accessToken = accessToken;
      state.profile = userDto
      // localStorage.setItem("accessToken", accessToken);
    },
    logOut: (state) => {
      state.accessToken = null;
      state.profile = null
      // localStorage.removeItem("accessToken");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: { auth: { accessToken: string } }) =>
  state.auth.accessToken;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { authService } from '../services/authService';

// const initialState = {
//     name: "",
//     email: '',
//     password: '',
//     loading: false,
//     error: null,
//     success: false,
//     user: null,
// };

// export const loginSlice = createSlice({
//     name: 'login',
//     initialState,
//     reducers: {
//         setUsername: (state, action: PayloadAction<string>) => {
//             state.email = action.payload;
//         },
//         setPassword: (state, action: PayloadAction<string>) => {
//             state.password = action.payload;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(authService.pending, (state) => {
//                 state.error = null;
//                 state.loading = true;
//             })
//             .addCase(authService.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.user = action.payload
//             })
//             .addCase(authService.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             });
//     },
// });

// // Action creators are generated for each case reducer function
// export const { actions: loginActions } = loginSlice;
// export const { reducer: loginReducer } = loginSlice;
