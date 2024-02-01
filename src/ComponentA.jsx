import React,{useState} from "react";
import ComponentB from "./ComponentB";

function ComponentA()
{



const[user,setUsser]=useState("bro code");






    return(<div className="box">
<h4>ComponentA<h4>hello:{user}</h4>(<ComponentB user={user}/>)</h4>


    </div>);
}

export default ComponentA