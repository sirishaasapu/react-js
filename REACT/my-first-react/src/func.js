import React, { useState } from 'react';

function Func(){
    //Hook used to store data in functional component
    //Hook:useState -assign value to function component
    const [courses]=useState(['b.tech','M.tech','D.Ed','B.ed']);

    const [branch,setData]=useState({
                             "branch1":'cse',
                              "branch2":'ece',
                              "branch3":'eee',
                              "branch4":'civil',
                              "branch5":'mech'});
          //manipulating data using Hook                    
        let changebranch=()=>
             setData({
            "branch1":'HTML5',
            "branch2":'CSS3',
            "branch3":'bootstrap',
            "branch4":'Angular',
            "branch5":'React'});
   
    return (
        <div className='container mt-5'>
           <h4>This is external functional component</h4>
           <h5>Courses</h5>
           <ul>
           <li>{courses[0]}</li>
            <li>{courses[1]}</li>
           <li>{courses[2]}</li> 
           </ul>
            <h5>Courses</h5>
            <ul>
           <li>{branch.branch1}</li>
           <li>{branch.branch2}</li>
           <li>{branch.branch3}</li>
           <li>{branch.branch4}</li>
           <li>{branch.branch5}</li>
           </ul>
           {/* //calling */}
           <button className="btn btn-primary mb-5" onClick={changebranch}>Change</button>
             {/* (or)*/}
           {/* <button className="btn btn-primary mb-5" onClick={()=>{
            setData({
           "branch1":'HTML5',
            "branch2":'CSS3',
            "branch3":'bootstrap',
            "branch4":'Angular',
            "branch5":'React'}); }}>Change</button> */}
        </div>
    );
}

export default Func;