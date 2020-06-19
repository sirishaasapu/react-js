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
            {/* <div className="col-3 card m-2">
           <div className="card-body text-center">
           <img src={Profilei} style={{width:'30%'}}/>
           <h2>hello</h2>
           </div>
           </div>
           <div className="col-3 card m-2">
           <div className="card-body text-center">
           <img src={Profilei} style={{width:'30%'}}/>
           <h2>hello</h2>
           </div>
           </div> */}
           
           </div>
        
           {/* <div className="row justify-content-center">
           <div className=" col-lg-3 col-md-4 col-sm-5 m-2 ">
                       {Card.profiles.map((value,index)=>(  
                           <div className="card">
                           <div className='card-body'>
                            <img src={Profilei} style={{width:'50%'}}/>
                             <h3>{value.name}</h3> 
                         </div>
                        </div>
                        ))}
                     </div>
                    
                   </div>             */}
       </div>
   )
}
 export default card;