
import { combineReducers } from 'redux'
import {userInfoReducer} from './state/userInfo'


const rootReducer = combineReducers({
    userInfo: userInfoReducer,
})

export default rootReducer