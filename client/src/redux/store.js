import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice.js";
import VideoSlice from "./VideoSlice.js";

const AppStore = configureStore({
reducer: {
    user : UserSlice,
    video : VideoSlice,

}
});

export default AppStore;