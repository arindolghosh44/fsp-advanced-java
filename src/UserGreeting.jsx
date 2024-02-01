import PropTypes from 'prop-types';

function UserGreeting(props)
{

   /* if(props.isLoggedIn)
    {
        return <h2>Welcome   {props.username}</h2>
    }

    else{
        return <h2>Please lOggedIn for Open</h2>
    }*/

    //ternary Opeartor



    /*
return(props.isLoggedIn ? 
<h2 className="welcome-message">Welcome</h2> 
:<h2 className="welcome-title">Please LoggedIn</h2>);

*/

const welcomeMessage=<h2 className="welcome-message">Welcome BroCode</h2> 


const loginPrompt=<h2 className="welcome-title">Please LoggedIn for futher information</h2>






return(props.isLoggedIn ? 
   welcomeMessage
    :loginPrompt);


















}

UserGreeting.prototype={

    isLoggedIn:PropTypes.bool,
    username:PropTypes.string,
}

UserGreeting.prototype={

    isLoggedIn:false,
    username:"Thor",
}







export default UserGreeting