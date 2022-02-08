import {put, takeEvery,takeLatest} from "redux-saga/effects";
import flatFuncs from "../../utils/flatFuncs";

let userInfo={
}
export function userInfoReducer(state = userInfo, action = {}) {
    switch (action.type) {
        case "userInfo":
            let userRole=action.data.userRole[0]
            let roleFunc=flatFuncs(userRole.functions)
            userRole.roleFunc=roleFunc
            return userRole;
        default: return state;
    }
}

