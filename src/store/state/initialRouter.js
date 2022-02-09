
let initialRouter='/'
export function initialRouterReducer(state = initialRouter, action = {}) {
    switch (action.type) {
        case "setInitialRouter":

            return action.data;
        default: return state;
    }
}