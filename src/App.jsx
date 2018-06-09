import React, { Component } from 'react';
import { ScatterChart, Scatter, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const plotpoints = [
    {
      "start_time": "2017-11-29T04:56:12Z",
      "date_time": "2017-11-29",
      "status": "pass",
      "duration": 126, // in seconds
    },
    {
      "start_time": "2017-11-28T03:22:12Z",
      "date_time": "2017-10-20",
      "status": "error",
      "duration": 205,
    },
    {
      "start_time": "2017-11-28T02:24:12Z",
      "date_time": "2017-01-19",
      "status": "fail",
      "duration": 20,
    },
    {
      "start_time": "2017-11-28T05:24:12Z",
      "date_time": "2017-11-12",
      "status": "pass",
      "duration": 90,
    },
    {
      "start_time": "2017-11-29T06:24:12Z",
      "date_time": "2017-11-08",
      "status": "error",
      "duration": 80,
    },
    {
      "start_time": "2017-11-28T14:12:12Z",
      "date_time": "2017-11-14",
      "status": "pass",
      "duration": 200,
    },
    {
        "start_time": "2017-11-28T14:12:12Z",
        "date_time": "2017-11-17",
        "status": "error",
        "¸": 201,
      }
  
];

class App extends Component {
    render() {
        return (
            <ScatterChart width={700} height={300} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <CartesianGrid  horizontal={true} vertical={false}/>
            <Legend />
            <XAxis type="number" dataKey={'duration'} allowDuplicatedCategory={false} />
            <YAxis type="number" dataKey={'duration'} unit=' sec'/>
            <Scatter name='Scatter' data={plotpoints} fill='#01FF90'>
                {plotpoints.map((entry, index) => {
                    let colorFill = entry.status == 'pass' ? "green" : entry.status == 'fail' ? "red" : "orange";
                    return <Cell key={index} fill={colorFill}  />;
                })}
            </Scatter>
        </ScatterChart>
        );
    }
}

export default App;