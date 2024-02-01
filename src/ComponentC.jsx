import ComponentD from "./ComponentD";
import React,{useState} from "react";

function ComponentC(props)
{

    return(<div className="box">
<h5>ComponentC(<ComponentD user={user.props}/>)</h5>
    </div>);
}

export default ComponentC