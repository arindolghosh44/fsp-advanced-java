import React,{useState} from "react";


function MyComponent1()
{

const[name,setName]=useState("Guest");

const[quantity,setQuantity]=useState(6767);


const[comment,setComment]=useState("");

const[payment,setPayment]=useState("");


const[shipping,setShipping]=useState("");


function handleNameChange(event){

setName(event.target.value);


}


function handleQuantityChange(event){

    setQuantity(event.target.value);
    
    
    }

function CommentHandler(event){
    setComment(event.target.value);
}


function handlepaymentChange(event){
    setPayment(event.target.value);
}

function handleshipping(event){
    setShipping(event.target.value);
}




return(<div>
<br></br>
<input value={name} onChange={handleNameChange}></input>
<p>Name:{name}</p>
<br></br>
<hr>
</hr>
<br></br>

<input value={quantity} onChange={handleQuantityChange} type="number"></input>
<p>quantity:{quantity}</p>
<br></br>
<hr>
</hr>
<br></br>

<textarea value={comment}  onChange={CommentHandler}
placeholder="comment"/>
<p >value:{comment}</p>
<br></br>
<hr>
</hr>
<br></br>

<select value={payment} onChange={handlepaymentChange}>
<option value="">Choice an Option</option>
<option value="MasterCard">--MasterCard--</option>
<option value="game">--game--</option>
<option value="thth">--thth--</option>
<option value="cash">--cash--</option>
<option value="dsd">--dsd--</option>
</select>
<p>Payment:{payment}</p>
<br></br>
<hr>
</hr>
<br></br>


<label>
<input type="radio" value="pickup"    
checked={shipping === "pickup"}
onChange={handleshipping}
></input>
pickUp

</label>

<label>

<input type="radio" value="deliever"    
checked={shipping === "deliever"}
onChange={handleshipping}

></input>
delivery
</label>
<p>Label:{shipping}</p>

</div>);
}

export default MyComponent1












