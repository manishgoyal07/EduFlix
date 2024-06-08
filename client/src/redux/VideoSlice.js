import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name: 'video',
    initialState: {
        allVideos : [],
        filteredVideos : [],
    },
    reducers: {
        setAllVideos: (state, action) => {
                state.allVideos = action?.payload
        },
        setFilteredVideos: (state, action) => {
                state.filteredVideos = action?.payload
        },

    }
})

export default VideoSlice.reducer;
export const { setAllVideos, setFilteredVideos } = VideoSlice.actions;