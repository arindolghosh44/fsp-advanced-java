import React ,{useState} from 'react'

function My1()
{

const [car,setCar]=useState({year:2024,
make:"Ford",
model:"Mustang"});


function handleYearChange(event)
{


//setCar({...car,year: event.target.value});

setCar(c=>({...c,year: event.target.value}));




}



function handleMakeChange(event)
{
    setCar({...car,make: event.target.value});
}




function handleModelChange(event)
{
    setCar({...car,model: event.target.value});
}








return(<div>

<p>Your favorite Color is:{car.year},
{car.model},{car.make}</p>
<input type="number" value={car.year} onChange={handleYearChange}></input>
<br></br>
<hr></hr>
<input type="text" value={car.make} onChange={handleMakeChange}></input>
<br></br>
<hr></hr>
<input type="text" value={car.model} onChange={handleModelChange}></input>
<br></br>
<hr></hr>

</div>);    
}
export default My1

