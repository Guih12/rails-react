// @ts-ignore
import React from "react"
// @ts-ignore
import ReactDOM from "react";

const Root:React.FC = () =>{
    return(<div className="bg-yellow-300">ROOT</div>)
}

ReactDOM.render(
    <Root />,
    document.getElementById('root-two')
)
export default Root