import '../src/styles/unauthorized.css'

export function Unauthorized({result}){
    return(
        <>
            <div className="textContainer">
                <p>
                    {result}
                </p>
            </div>
        </>
    )
}