import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        isUserLoggedIn: false,
        loggedInUser: {},
        usersSubscribedToList: [],
        currentUserDetails: {},

    },
    reducers: {
        AddUser: (state, action) => {
                state.isUserLoggedIn = true;
                state.loggedInUser = action?.payload
        },
        RemoveUser: (state) => {
                state.isUserLoggedIn = false;
                state.loggedInUser = {}
        },
        AddCurrentUser: (state, action) => {
            state.currentUserDetails = action?.payload
    },
    }
})

export default UserSlice.reducer;
export const { AddUser, RemoveUser, AddCurrentUser } = UserSlice.actions;