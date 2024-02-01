import PropTypes from 'prop-types';
function List(props)
{


const p=props.items;
const listItem=p.map(arindol=><li key={arindol.id}>&nbsp;{arindol.name}&nbsp;:&nbsp;
    <b>{arindol.thor}</b>&nbsp;
    
    </li>







   /* const fruits=[{id:1,name:"apple",thor:45}
    ,{id:2,name:"mango",thor:787}
    ,{id:3,name:"banana",thor:6767}
    ,{id:4,name:"tata",thor:6886}
    ,{id:5,name:"iiitit",thor:5656}
    ,{id:6,name:"itit",thor:6767}];*/
    //fruits.sort();

//fruits.sort((a,b)=>a.name.localeCompare(b.name));//alphabatical

//fruits.sort((a,b)=>b.name.localeCompare(a.name));//alphabatical reverseOrder

//fruits.sort((a,b)=>a.id-b.id);//Numeric
//fruits.sort((a,b)=>b.id-a.id)//reverse numeric



//filter methods using

//const LocalFruits=fruits.filter(arindol=>arindol.id<2);

/*
 const listItem=LocalFruits.map(arindol=><li key={arindol.id}>&nbsp;{arindol.name}&nbsp;:&nbsp;
    <b>{arindol.thor}</b>&nbsp;
    
    </li>
*/





   /* const listItem=fruits.map(arindol=><li key={arindol.id}>&nbsp;{arindol.name}&nbsp;:&nbsp;
    <b>{arindol.thor}</b>&nbsp;
    
    </li>*/);



    return(
    <>
    <ol>{listItem}</ol>
    <ul>{listItem}</ul>
    <ol>{listItem}</ol>
    <ul>{listItem}</ul>
    </>
    
    
    );

}







export default List