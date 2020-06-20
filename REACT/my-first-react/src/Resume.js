import React from 'react';

function Resume(){
   return (
       <div className="row">
            <div className="col-3 card mr-3" style={{boxShadow:'1px 1px 1px 1px',height:'20%'}}>
                 <div className="card-body text-center h-100" >
                     <img src={require('./Images/Woman.svg')} alt="profilepic" style={{width:'70%'}}/> 
                     <h4 className="mt-2">{'Sirisha Asapu'}</h4>
                   <h5 style={{color:'grey'}}>{'166P1A0505'}</h5>
                  <h5>{'Student'}</h5>
                     <hr/>
                 <h5 style={{color:'purple'}}>{'sirisha@gmail.com'}</h5>
                <h5 style={{color:'purple'}}>{'7935793457'}</h5>
                     </div>
            </div>
            <div className="col-8 card" style={{boxShadow:'1px 1px 1px 1px'}}>
                <div className="card-body">
                <img src={require('./Images/Woman.svg')} alt="profilepic" style={{width:'20%',float:'right'}}/>
                       <h4 className="text-info">Sirisha Asapu</h4>
                       <h5>Hyderbad</h5>
                       <h5>sirisha@gmail.com</h5>
                       <h5>76238247288</h5>
                       <hr/>
                       <h5>CAREER OBJECTIVE</h5>
                       <p>
                       Seeking a productive position to utilize my skills and upgrade them through continuous learning in a challenging environment that helps me to contribute efficiently for the growth of the organization while being resourceful and innovative
                       </p>
                    <hr/>		
                    <h5>ACADEMICS</h5>
                    <div className="table-responsive">
                    <table className="table border-none w-auto">
                        <thead>
                            <tr>
                            <th>Qualification</th>
                            <th>Course </th>
                            <th>Grades</th>
                            <th>Year</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>B.tech</td>
                                    <td>CSE</td>
                                    <td>8.0</td>
                                    <td>2020</td>
                                </tr>
                            
                                <tr>
                                    <td>Inter</td>
                                    <td>Mpc</td>
                                    <td>93.9</td>
                                    <td>2016</td>
                                </tr>
                            
                                <tr>
                                    <td>X class</td>
                                    <td>SSC</td>
                                    <td>9.2</td>
                                    <td>2014</td>
                                </tr>
                            
                                </tbody>
                    </table>
                    </div>
                    <hr/>
                    <h5>TECHNICAL SKILLS</h5>
                    <ul>
                        <li>
                            <b>web technologies:</b>
                            html,css,bootstrap,Angular
 
                        </li>
                        <li>
                            <b>Programming languages :</b>Basics of c,java,javascript 
                        </li>
                    </ul>
                    <hr/>
                    <h5>Hobbies</h5>
                    <ul>
                        <li>DRAWING</li>
                        {/* <h5 style={{float:'right'}}>Sirisha Asapu</h5> */}
                        <li>PLAYING SHUTTLE</li>
                    </ul>

                    </div>

            </div>
       </div>
   )
}

export default Resume; 