import React from 'react';

class class1 extends React.Component{
    constructor(){
        super();
        this.data=[{
            "name":'sirisha',
            'id':'166p1A0505',
            'branch':'CSE',
            'Course':'B.tech'
        },{
        "name":'shivangi',
        'id':'166p1A0502',
        'branch':'CSE',
        'Course':'B.tech'
        },
        {
            "name":'Krystel',
            'id':'166p1A0503',
            'branch':'CSE',
            'Course':'B.tech'
            }
    ]
    }
    render(){
        return (
            <div className="container">
                <h3>I am a Class component</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>branch</th>
                            <th>Course</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <td>{this.data[0].name}</td>
                            <td>{this.data[0].id}</td>
                            <td>{this.data[0].branch}</td>
                            <td>{this.data[0].Course}</td>
                        </tr>
                        <tr>
                            <td>{this.data[1].name}</td>
                            <td>{this.data[1].id}</td>
                            <td>{this.data[1].branch}</td>
                            <td>{this.data[1].Course}</td>
                        </tr>
                        <tr>
                            <td>{this.data[2].name}</td>
                            <td>{this.data[2].id}</td>
                            <td>{this.data[2].branch}</td>
                            <td>{this.data[2].Course}</td>
                        </tr>
                    </tbody>
                </table>
          </div>
        )
    }
}

export default class1;