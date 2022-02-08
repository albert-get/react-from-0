import {useEffect, useState} from "react";

export default function useClock(){
    let [second,setSecond]=useState(new Date().getSeconds())
    const clockControl=new function (){
        this.flag=false
        this.secondChange=()=>{
            let s=new Date().getSeconds()
            if(s!==second&&!this.flag){
                setSecond(s)
            }
            requestAnimationFrame(this.secondChange)
        }
        this.cancel=()=>{
            this.flag=true
        }
    }

    useEffect(()=>{

        clockControl.secondChange()
        return ()=>{
            clockControl.cancel()
        }
    },[])
    let [minutes,setMinutes]=useState(new Date().getMinutes())
    useEffect(()=>{
        if(second<=3){
            let m=new Date().getMinutes()
            if(m!==minutes){
                setMinutes(m)
            }
        }
    },[second])
    let [hour,setHour]=useState(new Date().getHours())
    useEffect(()=>{
        if(minutes<=3){
            let h=new Date().getHours()
            if(h!==hour){
                setHour(h)
            }
        }
    },[minutes])
    let [day,setDay]=useState(new Date().getDate())
    useEffect(()=>{
        if(hour<3){
            let d=new Date().getDate()
            if(d!==day){
                setDay(d)
            }
        }
    },[hour])
    let [month,setMonth]=useState(new Date().getMonth()+1)
    useEffect(()=>{
        if(day<3){
            let m=new Date().getMonth()+1
            if(m!==month){
                setMonth(m)
            }
        }
    },[day])
    let [year,setYear]=useState(new Date().getFullYear())
    useEffect(()=>{
        if(month<3){
            let y=new Date().getFullYear()
            if(y!==year){
                setYear(y)
            }
        }
    },[month])
    return [second,minutes,hour,day,month,year]
}