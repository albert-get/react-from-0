import {put, takeEvery,takeLatest} from "redux-saga/effects";
import flatFuncs from "../../utils/flatFuncs";

let userInfo={
}
export function userInfoReducer(state = userInfo, action = {}) {
    switch (action.type) {
        case "userInfo":
            let role={}
            action.data.userRole.map((v)=>{
                Object.assign(role,flatFuncs(v.functions))
            })
            action.data.roleFunc=role
            return action.data;
        case 'logout':
            return {};
        default: return state;
    }
}

