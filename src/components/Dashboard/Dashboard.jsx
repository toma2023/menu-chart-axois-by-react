import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const students = [
        { id: 1, name: "Alice", physics: 87, chemistry: 92, math: 78 },
        { id: 2, name: "Bob", physics: 79, chemistry: 84, math: 91 },
        { id: 3, name: "Charlie", physics: 92, chemistry: 73, math: 86 },
        { id: 4, name: "David", physics: 83, chemistry: 89, math: 79 },
        { id: 5, name: "Eve", physics: 77, chemistry: 92, math: 82 },
        { id: 6, name: "Frank", physics: 91, chemistry: 72, math: 81 },
        { id: 7, name: "Grace", physics: 76, chemistry: 83, math: 92 },
        { id: 8, name: "Hannah", physics: 88, chemistry: 94, math: 73 },
        { id: 9, name: "Isaac", physics: 90, chemistry: 81, math: 67 },
        { id: 10, name: "Julia", physics: 83, chemistry: 87, math: 90 },
        { id: 11, name: "Kevin", physics: 75, chemistry: 92, math: 88 },
        { id: 12, name: "Lena", physics: 81, chemistry: 77, math: 94 },
      ];
      
    return (
        <div>
          
        <LineChart
        width={1200}
        height={300}
        data={students}
        >
          <Line dataKey="physics"></Line>  
          <Line dataKey="math"></Line>  
          <Line stroke="#82ca9d" dataKey="chemistry"></Line>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
            </LineChart>   
           
        </div>
    );
};

export default Dashboard;