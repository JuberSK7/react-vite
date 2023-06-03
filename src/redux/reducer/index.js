import { combineReducers } from '@reduxjs/toolkit'
import ui from './ui'
import login from './login'
import signup from './signup'
import users from './users'

export default combineReducers({
    ui,
    login,
    signup,
    users
})