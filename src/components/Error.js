import { useRouteError } from "react-router-dom"

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div className="">
            <h1>Oops, there seems to be an error</h1>
            <h3>{err.status +" " + err.statusText}</h3>
        </div>
    )
}

export default Error