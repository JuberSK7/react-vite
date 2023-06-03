import { createSlice } from '@reduxjs/toolkit'


const slice = createSlice({
    name: 'ui',
    initialState: {
        loading : false,
        modalCount : 0,
        path : ''
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        navigate: (state, action) => {
            state.path = action.payload
        },
        showError: (state, action) => {
            
        }
    },
});

export const { setLoading, navigate, showError } = slice.actions

export default slice.reducer