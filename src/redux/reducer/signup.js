import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'signup',
    initialState: {
        roles : ['super', 'admin', 'user'],
        signupFailed: false
    },
    reducers: {
        setRoles: (state, action) => {
            state.roles = action.payload
        },
        signup: (state, action) => {},
        signupFailed: (state, action) => {
            state.signupFailed = action.payload
        }
    },
});

export const { setRoles, signup, signupFailed } = slice.actions

export default slice.reducer