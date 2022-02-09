import {Route, BrowserRouter, Routes, useNavigate, Navigate} from 'react-router-dom'
import React, {useEffect} from 'react'
import router from "../../config/router";
import loadable from '@loadable/component'
import Login from '../../pages/login'
import Layout from '../../components/layout'
import { connect } from 'react-redux'
import axios from "../../config/axios";
import Cookie from "js-cookie";
import Redirect from '../redirect'


function Index(props){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path={'/'} element={<Layout/>} >
                    {
                        props.roleFunc?router.map((v)=>{
                            if(v.fid){
                                if(props.roleFunc[v.fid]){
                                    return <Route key={v.path} exact={true} path={v.path} element={React.createElement(v.component)} />
                                }else{
                                    return null
                                }
                            }else{
                                return <Route key={v.path} exact={true} path={v.path} element={React.createElement(v.component)} />
                            }}):null
                    }
                </Route>
                <Route exact={true} path={'/login'} element={<Login/>} />
                <Route path="*" element={<Redirect/>} />
            </Routes>
        </BrowserRouter>
    )
}
const mapStatesToProps=(state)=>{
    return {
        roleFunc:state.userInfo.roleFunc
    }
}
export default connect(mapStatesToProps)(Index)