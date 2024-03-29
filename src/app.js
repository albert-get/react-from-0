import Router from './components/router'
import React, {useEffect} from 'react'
import { Provider } from 'react-redux'
import store from './store'
function Index (){

    return (
        <Provider store={store}>
            <Router/>
        </Provider>
    )
}

export default Index