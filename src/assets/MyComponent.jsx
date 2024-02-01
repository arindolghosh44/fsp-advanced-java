import React,{useState} from "react";

function MyComponent()
{
    //useState() return the array of two values
const[name,setName]=useState("guest");

const[age,setAge]=useState(0);

const[isEmployee,SetisEmployee]=useState(false);



const updateName=()=>{


setName("suraj");

   /* name="suraj";
    console.log(name);*/

}
const updateAge=()=>{


   // setAge(12);
    
       /* age=34;
        console.log(age);*/
    
setAge(age+1);


    }
    
const updateemployee=()=>{

    //SetisEmployee(true);
    SetisEmployee(!isEmployee);
}






return(<div>
<p>Name:{name}</p>
<button onClick={updateName}>SetName</button>
<br></br>
<p>Age:{age}</p>
<button onClick={updateAge}>SetAge</button>
<br></br>
<p>IsEmployee:{isEmployee ? "Yes" :"No"}</p>
<button onClick={updateemployee}>Setbool</button>

</div>);
}
export default MyComponent