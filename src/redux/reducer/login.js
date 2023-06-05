import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'login',
    initialState: {
        session : {},
        loginFailed : false
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
        },
        loginFailed: (state, action) => {
            state.loginFailed = action.payload
        }
    },
});

export const { login, loginSuccess, logout, loginFailed } = slice.actions

export default slice.reducer