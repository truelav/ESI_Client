import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { accessToken: null, profile: null },
    reducers: {
        setCredentials: (state, action) => {
            console.log(action.payload);
            const { accessToken, userDto } = action.payload;
            state.accessToken = accessToken;
            state.profile = userDto;
            // localStorage.setItem("accessToken", accessToken);
        },
        logOut: (state) => {
            state.accessToken = null;
            state.profile = null;
            // localStorage.removeItem("accessToken");
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: { auth: { accessToken: string } }) =>
    state.auth.accessToken;
