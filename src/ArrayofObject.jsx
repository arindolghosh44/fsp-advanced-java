import React ,{useState} from 'react'

function ArrayofObject()
{

    const [cars,SetCars]=useState([]);
    const[carYear,setCarYear]=useState(new Date().getFullYear());
    const[carMake,SetcarMake]=useState("");
    const [carModel,Setcarmodel]=useState("");


    function handleAddCar()
    {

        const newCar={year: carYear,make:carMake,model:carModel};

SetCars(c=>[...c,newCar]);


    }

    function handleRemoveCar(index)
    {
SetCars(c=>c.filter( (_,i) => i!==index));

    }

function handleYearChaneg(event)
{

setCarYear(event.target.value);

}


function handleModelChaneg(event)
{
Setcarmodel(event.target.value);
}

function handleMakeChaneg(event)
{
SetcarMake(event.target.value);
}









    return(<div>

<h2>List of Car Objects</h2>
<ol>
{
cars.map((car,index)=>
<li key={index} onClick={()=>handleRemoveCar(index)}>
{car.year},{car.make},{car.model}


</li>

)


}

</ol>


<input type='number' value={carYear} onChange={handleYearChaneg}></input><br></br>
<br></br>
<input type='text' value={carMake} onChange={handleMakeChaneg} placeholder='Enter car maker'></input><br></br>
<br></br>
<input type='text' value={carModel} onChange={handleModelChaneg} placeholder='Enter car Model'></input>
<br></br><br></br>
<button onClick={handleAddCar}>Add Car</button>
<br></br><br></br>
<button onClick={handleRemoveCar}>Remove  Car</button>
    </div>);
}
export default ArrayofObject


