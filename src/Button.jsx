/*function Button()
{

    let count=0;

const handleClick = (name) =>{

if(count <3)
{
    count++;
    console.log('${name} you clicked me down ${count} time/s');
}
else{
console.log('${name} stop clicking Me');
}


};





    //const handleClick=()=> console.log("suraayyaaayay");

//const handleClick2=(name) => console.log('${name} stope');

 //return(<button onClick={()=>handleClick2("bro")}>clikd me77</button>);
 return(<button onClick={() =>handleClick("bro")}>clikd me down</button>);
}
export default Button


*/






//event paramenter in button



function Button()
{

//const handleClick=(e)=>console.log(e);


const handleClick=(e)=>e.target.textContent="Tinku";
//return(<button onClick={(e)=>handleClick(e)}>Onclick me</button>)

//Double Click The Button
return(<button onDoubleClick={(e)=>handleClick(e)}>Onclick me</button>)




}
export default Button










