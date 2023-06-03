import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'signup',
    initialState: {
        roles : ['super', 'admin', 'user']
    },
    reducers: {
        setRoles: (state, action) => {
            state.roles = action.payload
        },
        signup: (state, action) => {}
    },
});

export const { setRoles, signup } = slice.actions

export default slice.reducer