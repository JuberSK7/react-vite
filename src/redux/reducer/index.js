import { combineReducers } from '@reduxjs/toolkit'
import ui from './ui'
import login from './login'
import signup from './signup'

export default combineReducers({
    ui,
    login,
    signup
})