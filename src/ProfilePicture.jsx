
function ProfilePicture()
{

const imageUrl ='./src/assets/blog-1.jpg';

//const handleClick=()=>console.log("ouch");

const handleClick=(e)=>e.target.style.display="none";



//return(<img    onClick={handleClick} src={imageUrl}></img>);
return(<img    onClick={(e)=>handleClick(e)} src={imageUrl}></img>);
}

export default ProfilePicture