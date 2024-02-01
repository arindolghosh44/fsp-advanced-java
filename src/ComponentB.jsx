import ComponentC from "./ComponentC";
import React,{useState} from "react";

function ComponentB(props)
{

    return(<div className="box">
<h5>ComponentB(<ComponentC user={user.props}/>)</h5>
    </div>);
}

export default ComponentB