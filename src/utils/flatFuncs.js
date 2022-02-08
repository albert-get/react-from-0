export default function flatFuncs (functions){
    let roles={}
    functions.map((v)=>{
        roles[v.fid]=v.name
        if(v.subFunctions){
            Object.assign(roles,flatFuncs(v.subFunctions))
        }
    })
    return roles
}