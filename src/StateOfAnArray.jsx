import React ,{useState} from 'react'

function StateOfAnArray()
{
const[foods,setFoods]=useState(["Apple","Orange","banana"]);

function handleAddFood(event)
{

const newFood=document.getElementById("food-input").value;

document.getElementById("food-input").value="";

//setFoods([...foods,newFood]);

setFoods(f=>[...f,newFood]);
}


function handleremeovedFood(index)
{
//here _ is used for ignored the functionalities;
setFoods(foods.filter((_,i) =>i!==index));




}



    return(<div>

<h2>List of Food</h2>
<ol>
{foods.map((food,index)=><li key={index} onClick={()=>handleremeovedFood(index)}>{food}</li>)}


</ol>

<input type='text' id='food-input' placeholder='Enter the food Name'></input>
<button onClick={handleAddFood}>Add Food</button>

    </div>);
}
export default StateOfAnArray