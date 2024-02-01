/*import React , {useState,useEffect}  from 'react'

function My12()
{

    const [count,setCount]=useState(0);

    const[color,SetColor]=useState("green");

useEffect(()=>{
document.title={count};
},[count]);




function addCount()
{
    setCount(c=>c+1);
   // setCount(c=>c+1);
}


function subCount()
{
    setCount(c=>c-1);
   // setCount(c=>c+1);
}

function ChangecOlor()
{

SetColor(c=>c==="green"? "red":"blue");


}





    return(<div>
<p style={{color:color}}>Count:{count}</p>
<button onClick={addCount}>Add</button>
<button onClick={subCount}>sub</button>
<button onClick={ChangecOlor}>Change Color</button>
    </div>);



const[width,setWidth]=useState(window,innerWidth);
const[height,setHeight]=useState(window,innerHeight);


function handleresize()
{
    setHeight(window,innerHeight);
    setWidth(window,innerWidth);
}




return(<>

<p>Window width:{width}px</p>
<p>Window height:{height}px</p>


</>);


}
export default My12;

*/

import React , {useState,useEffect}  from 'react'

function My12()
{



const[width,setWidth]=useState(window,innerWidth);
const[height,setHeight]=useState(window,innerHeight);


window.addEventListener("resize",handleresize);
console.log("Event listen added");




function handleresize()
{
    setHeight(window,innerHeight);
    setWidth(window,innerWidth);
}




return(<>

<p>Window width:{width}px</p>
<p>Window height:{height}px</p>


</>);


}
export default My12;



