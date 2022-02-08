export default function (router){
    let map={}
    router.map((v)=>{
        map[v.fid]=v
    })
    return map
}