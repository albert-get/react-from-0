import { Container,Box } from '@mui/material';
import React, {useEffect, useState} from 'react'
import {Outlet,useNavigate} from 'react-router-dom'
import style from './index.module.less'
import axios from '../../config/axios'
import { connect } from 'react-redux'
import Cookie from 'js-cookie'

function Index(prop){
    let [width,setWidth]=useState(0)
    let [height,setHeight]=useState(0)
    let navigate=useNavigate()

    const getUserInfo=()=>{
        axios.get('api/user/userInfo').then((res)=>{
            prop.dispatch({type:'userInfo',data:res.data})
            navigate('/order')
        },(err)=>{
            Cookie.remove('token')
            navigate('/login')
        })
    }
    useEffect(()=>{
        setWidth(screen.width)
        setHeight(window.innerHeight)
        getUserInfo()
    },[])
    return (
        <Box className={style.contain} style={{width:width,height:height}}>
            <Box className={style.fixed} style={{width:'250px'}}></Box>
            <Box className={style.flex}>
                <Outlet/>
            </Box>
        </Box>
    )
}
export default connect()(Index)