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
        showError: (state, action) => {
            
        }
    },
});

export const { setLoading, showError } = slice.actions

export default slice.reducer