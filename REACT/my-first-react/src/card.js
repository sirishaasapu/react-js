import React from 'react';
import Card from './data/carded.json'
// import Profilei from './images/woman.svg';
import {Link}  from 'react-router-dom';

function card(){    
   return(
       <div className="container mt-5">
           <div className="row justify-content-center">
           {Card.profiles.map((value,index)=>(
           <div className="col-3 card m-3" style={{boxShadow:'1px 1px 1px 1px'}}>
           <div className="card-body text-center">
           <img src={value.images} alt="profilepic" style={{width:'70%'}}/>
            {/* <img src={require('./Images/Woman.svg')}/> */}
            <h4 className="mt-2">{value.name}</h4>
            <h5 style={{color:'grey'}}>{value.Id}</h5>
            <h5>{value.role}</h5>
            <hr/>
            <h5 style={{color:'purple'}}>{value.Email}</h5>
            <h5 style={{color:'purple'}}>{value.contact}</h5>
            <Link to={{pathname:'/resume'}} className="btn btn-primary mt-3">view profile</Link>
           </div>
           </div>
           ))}
           </div>

       </div>
   )
}
 export default card;