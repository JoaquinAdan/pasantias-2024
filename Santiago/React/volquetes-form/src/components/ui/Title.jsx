function RequiredSeccionTitle({ value }) {
    return (
        <h1 className="text-center w860:text-left text-slate-900 font-medium">{value}<span className="text-red-600 text-xl"> *</span></h1>
    )
}
function SeccionTitle({ value }) {
    return (
        <h1 className="text-center w860:text-left text-slate-900 font-medium">{value}</h1>
    )
}

export { RequiredSeccionTitle, SeccionTitle }