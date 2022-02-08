import {put, takeEvery,takeLatest} from "redux-saga/effects";
import flatFuncs from "../../utils/flatFuncs";

let userInfo={
}
export function userInfoReducer(state = userInfo, action = {}) {
    switch (action.type) {
        case "userInfo":
            let roleFunc0=flatFuncs(action.data.userRole[0].functions)
            let roleFunc1=flatFuncs(action.data.userRole[1].functions)
            action.data.roleFunc=Object.assign(roleFunc0,roleFunc1)
            return action.data;
        default: return state;
    }
}

