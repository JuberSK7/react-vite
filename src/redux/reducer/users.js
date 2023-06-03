import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'users',
    initialState: {
        userAll : []
    },
    reducers: {
        setUsers: (state, action) => {
            state.userAll = action.payload
        },
    },
});

export const { setUsers } = slice.actions

export default slice.reducer