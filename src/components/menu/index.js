import React, {useRef} from 'react'
import { connect } from 'react-redux'
import menuConfig from './config'
import { TreeView,TreeItem } from '@mui/lab';
import router from '../../config/router'
import flatRouterToMap from '../../utils/flatRouteToMap'
import {Box} from "@mui/material";
import useClock from '../../utils/hooks/useClock'
import {useNavigate} from 'react-router-dom'
import Cookie from 'js-cookie'
function Clock (){
    let [s,m,h,d,mm,y]=useClock()
    return (
        <div style={{height:'60px',textAlign:'left',lineHeight:'60px',background:'#666',color:'#fff',fontSize:'20px',paddingLeft:'20px'}}>
            <span>{y}</span>
            <span>-</span>
            <span>{mm>9?mm:`0${mm}`}</span>
            <span>-</span>
            <span>{d>9?d:`0${d}`}</span>
            <span>{' '}</span>
            <span>{h>9?h:`0${h}`}</span>
            <span>:</span>
            <span>{m>9?m:`0${m}`}</span>
            <span>:</span>
            <span>{s>9?s:`0${s}`}</span>
        </div>
    )
}
function Adapt(props){
    let navigate=useNavigate()
    const logout=()=>{
        Cookie.remove('token')
        navigate('/login')
    }
    return (
        <div style={{height:'220px',background:'#2389c0',display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'20px',boxSizing:'border-box'}}>
            <img alt={'头像'} src={props.pic} width={140} height={140} style={{border:'1px solid #ccc'}} />
            <div style={{position:'relative',textAlign:'center',width:'140px'}}>
                <span style={{color:'#fff'}}>{props.name}</span>
                <div onClick={()=>{logout()}} style={{cursor:'pointer',color:'#ccc',fontSize:'10px',position:'absolute',right:'10px',bottom:'0'}}>注销</div>
            </div>
        </div>
    )
}
function Index(props){
    let routeMap=useRef(null).current
    routeMap=flatRouterToMap(router)
    if(props.userInfo.roleFunc){
        return (
            <Box>
                <Clock/>
                <Adapt pic={props.userInfo.userPic} name={props.userInfo.userName}/>
                <TreeView>
                    {
                        menuConfig.map((v,i)=>{
                            if(v.child){
                                if(props.userInfo.roleFunc[v.fid]){
                                    return (
                                        <TreeItem key={`${i}${v.fid}`} nodeId={v.fid} label={v.name}>
                                            {
                                                v.child.map((c,j)=>{
                                                    if(props.userInfo.roleFunc[c]){
                                                        return <TreeItem key={`${j}${c}`} nodeId={`${c}`} label={routeMap[c].name}></TreeItem>
                                                    }else {
                                                        return null
                                                    }
                                                })
                                            }
                                        </TreeItem>
                                    )
                                }else{
                                    return null
                                }

                            }else{
                                if(v.fid){
                                    if(props.userInfo.roleFunc[v.fid]){
                                        return <TreeItem key={`${i}${v.fid}`} nodeId={v.fid} label={routeMap[v.fid].name}></TreeItem>
                                    }else{
                                        return null
                                    }

                                }else{
                                    return <TreeItem key={`${i}${Math.random()}`} nodeId={v.path} label={v.name}></TreeItem>
                                }
                            }
                        })
                    }
                </TreeView>
            </Box>
        )
    }else{
        return null
    }

}
const mapStatesToProps=(state)=>{
    return {
        userInfo:state.userInfo
    }
}

export default connect(mapStatesToProps)(Index)