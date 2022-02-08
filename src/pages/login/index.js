import React, {useEffect, useState} from 'react'
import style from './index.module.less'
import bg from '../../assets/login.jpeg'
import {Button, Box, Input, InputAdornment,Typography} from '@mui/material'
import axios from '../../config/axios'
import logoq from '../../assets/logo-q.png'
import logob from '../../assets/logo-b.png'
import {useNavigate} from 'react-router-dom'
import Cookie from 'js-cookie'
function Index(){
    let [imgId,setImgId]=useState(0)
    let [userName,setUserName]=useState('')
    let [password,setPassword]=useState('')
    let [verifyCode,setVerifyCode]=useState('')
    let navigate=useNavigate()
    useEffect(()=>{
        let token=Cookie.get('token')
        if(token){
            navigate('/')
        }
    },[])
    const login=()=>{
        axios.post('api/site/login',{
            'user_id': userName,
            'password': password,
            'kaptcha': verifyCode
        }).then((res)=>{
            navigate('/')
        },()=>{

        })
    }
    return (
        <Box className={style.wrapper} style={{backgroundImage:`url(${bg})`}}>
            <Box>
                <div className={style.img}>
                    <img className={style.g} alt={'广发证券'} src={logoq} width={120}/>
                    <img className={style.b} alt={'广发证券'} src={logob} width={140}/>
                </div>
                <Typography variant="h5" className={style.title}>非现场柜台业务办理系统</Typography>
                <div className={style.margin}>
                    <Input
                        value={userName}
                        onChange={(e)=>{setUserName(e.target.value)}}
                        fullWidth={true}
                        placeholder={'登录名'}
                        type="text"
                        required={true}
                    />
                </div>
                <div className={style.margin}>
                    <Input
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        fullWidth={true}
                        placeholder={'密码'}
                        type="password"
                        required={true}
                    />
                </div>
                <div className={style.margin}>
                    <Input
                        value={verifyCode}
                        onChange={(e)=>{setVerifyCode(e.target.value)}}
                        fullWidth={true}
                        placeholder={'验证码'}
                        type="text"
                        required={true}
                        endAdornment={
                            <InputAdornment position="end">
                                <img onClick={()=>{setImgId(imgId+1)}} src={`/api/api/site/kaptcha.jpg?${imgId}`} alt={'验证码'}/>
                            </InputAdornment>
                        }
                    />
                </div>
                <div className={style.margin}>
                    <Button variant="contained" onClick={()=>{login()}}>登录</Button>
                </div>
            </Box>
        </Box>
    )
}
export default Index