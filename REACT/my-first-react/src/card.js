import React from 'react';
import Card from './data/carded.json'
// import Profilei from './images/woman.svg';

function card(){    
   return(
       <div className="container mt-5">
           <div className="row">
           {Card.profiles.map((value,index)=>(
           <div className="col-3 card m-3">
           <div className="card-body text-center">
           <img src={value.images} alt="profilepic" style={{width:'70%'}}/>
           {/* <img src={require('./Images/girl.jpg')}/> */}
            <h4 className="mt-2">{value.name}</h4>
            <h5 style={{color:'grey'}}>{value.Id}</h5>
            <h5>{value.role}</h5>
            <hr/>
            <h5 style={{color:'purple'}}>{value.Email}</h5>
            <h5 style={{color:'purple'}}>{value.contact}</h5>
            <button className="btn btn-primary mt-3">view profile</button>
           </div>
           </div>
           ))}
           </div>

       </div>
   )
}
 export default card;