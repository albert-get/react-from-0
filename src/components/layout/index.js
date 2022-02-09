import { Container,Box } from '@mui/material';
import React, {useEffect, useRef, useState} from 'react'
import {Outlet,useNavigate} from 'react-router-dom'
import style from './index.module.less'
import axios from '../../config/axios'
import {CancelToken} from 'axios'
import { connect } from 'react-redux'
import Cookie from 'js-cookie'
import Menu from '../menu'

function Index(props){
    let [width,setWidth]=useState(0)
    let [height,setHeight]=useState(0)
    let navigate=useNavigate()
    let cancel=useRef(null)
    const getUserInfo=()=>{
        axios.get('api/user/userInfo',{
            cancelToken: new CancelToken(function executor(c) {
                cancel.current = c;
            })}).then((res)=>{
                cancel.current=null
            props.dispatch({type:'userInfo',data:res.data})
            if(props.initialRouter!=='/'){
                navigate(props.initialRouter)
            }else {
                navigate('/order')
            }
        },(err)=>{
                cancel.current=null
            Cookie.remove('token')
            navigate('/login')
        })
    }
    useEffect(()=>{
        getUserInfo()
        return ()=>{
            if(cancel.current){
                cancel.current()
            }
        }
    },[])
    useEffect(()=>{
        setWidth(screen.width)
        setHeight(window.innerHeight)
    },[])
    return (
        <Box className={style.contain} style={{width:width,height:height}}>
            <Box className={style.fixed} style={{width:'250px'}}>
                <Menu/>
            </Box>
            <Box className={style.flex}>
                <Outlet/>
            </Box>
        </Box>
    )
}
const mapStatesToProps=(state)=>{
    return {
        roleFunc:state.userInfo.roleFunc,
        initialRouter:state.initialRouter
    }
}
export default connect(mapStatesToProps)(Index)