
import { combineReducers } from 'redux'
import {userInfoReducer} from './state/userInfo'
import {initialRouterReducer} from './state/initialRouter'


const rootReducer = combineReducers({
    userInfo: userInfoReducer,
    initialRouter:initialRouterReducer,
})

export default rootReducer