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
        }
    },
});

export const { login, loginSuccess } = slice.actions

export default slice.reducer