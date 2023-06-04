import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'login',
    initialState: {
        session : {}
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.session = action.payload
        },
        login: (state, action) => {
            console.log(action.payload)
        },
        logout: (state, action) => {
            state.session = action.payload
        }
    },
});

export const { login, loginSuccess, logout } = slice.actions

export default slice.reducer