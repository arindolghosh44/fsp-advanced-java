import PropTypes from 'prop-types'
function Student(props)
{

    return(
<div className="student">
<p>

    Name:{props.name}

</p>
<p>

    Age:{props.age}
    
</p>

<p>

    salary:{props.salary}
    
</p>


<p>

    address:{props.address}
    
</p>

<p>

Student:{props.isStudent ?  "Yes" :  "No"}

</p>




</div>



    );
}

Student.prototype={
name:PropTypes.string,
age:PropTypes.number,
salary:PropTypes.number,
address:PropTypes.string,
isStudent:PropTypes.bool

}
Student.defaultProps={
    name:"Guest",
    age:0,
    salary:1000,
    address:"sukuna",
    isStudent:false


}










export default Student