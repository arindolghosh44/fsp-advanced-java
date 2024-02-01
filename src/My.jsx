import React ,{useState} from 'react'

function My()
{

const [count,setCount]=useState(0);

function increment()
{

    //do not increment at this time at one so we use updater function
/*setCount(count+1);
setCount(count+1);
setCount(count+1);
*/
//instead of this we updater function
//c=0
//c=0+1=1
//now c=1
setCount(c=>c+1);
//c=1
//c=c+1
//c=1+1
//c=2
setCount(c=>c+1);
//c=3
setCount(c=>c+1);











};

function decerment()
{
    setCount(count-1);
};

function reset()
{
    setCount(0);
}

return(<div>
<p>Count:{count}</p>
<button onClick={decerment}>Decrement</button>
<br></br>
<hr></hr>
<button onClick={reset}>Reset</button>
<br></br>
<hr></hr>
<button onClick={increment}>Increment</button>

</div>);



}
export default My











