import {Route,BrowserRouter,Routes} from 'react-router-dom'
import React from 'react'
import router from "../../config/router";
import loadable from '@loadable/component'
import Login from '../../pages/login'
import Layout from '../../components/layout'


function Index(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path={'/'} element={<Layout/>} >
                    {router.map((v)=>{
                        return <Route key={v.path} exact={true} path={v.path} element={React.createElement(v.component)} />
                    })}
                </Route>
                <Route exact={true} path={'/login'} element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index