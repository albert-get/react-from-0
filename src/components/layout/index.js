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
    let cancel=useRef(null).current
    const getUserInfo=()=>{
        axios.get('api/user/userInfo',{
            cancelToken: new CancelToken(function executor(c) {
                cancel = c;
            })}).then((res)=>{
                cancel=null
            props.dispatch({type:'userInfo',data:res.data})
            navigate('/order')
        },(err)=>{
                cancel=null
            Cookie.remove('token')
            navigate('/login')
        })
    }
    useEffect(()=>{
        getUserInfo()
        return ()=>{
            if(cancel){
                cancel()
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
        roleFunc:state.userInfo.roleFunc
    }
}
export default connect(mapStatesToProps)(Index)