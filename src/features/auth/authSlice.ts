import { createSlice } from "@reduxjs/toolkit";
import { IAuthState, IUser } from "./types";
import { loginAction, loginToken } from "./authActions";
const initialUser: IUser = {
  id: 0,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  accessToken: "",
  refreshToken: "",
};

const initialState: IAuthState = {
  user: initialUser,
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoading = false;
        state.user = initialUser;
        state.error = action.payload as string;
      })

      //запрос из useEffect() использующий токен
      .addCase(loginToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginToken.rejected, (state, action) => {
        state.isLoading = false;
        state.user = initialUser;
        state.error = action.payload as string;
      });
  },
});

export default authSlice;
// export const {} = authSlice.actions;
