import {Navigate, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {connect} from "react-redux";


function Index(props){
    let navigate=useNavigate()
    useEffect(()=>{
        let iR=`${window.location.pathname}${window.location.search}`
        props.dispatch({type:'setInitialRouter',data:iR})
        navigate('/')
    },[])
    return null
}

const mapStatesToProps=(state)=>{
    return {
        initialRouter:state.initialRouter
    }
}
export default connect(mapStatesToProps)(Index)