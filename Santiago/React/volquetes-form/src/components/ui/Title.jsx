function RequiredSeccionTitle({value}){
    return(
        <h1 className="text-slate-900 ">{value}<span className="text-red-600 text-xl"> *</span></h1>
    )
}
function SeccionTitle({value}){
    return(
        <h1 className="text-slate-900">{value}</h1>
    )
}

export {RequiredSeccionTitle, SeccionTitle}