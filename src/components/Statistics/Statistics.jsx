import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const Statistics = () => {
    const chart = useLoaderData();
    console.log(chart)

    const COLORS = ['red', 'blue', 'gray', 'orange', 'purple', 'green', 'yellow', 'lightblue'];
    

    return (
        <div>
            <div className='text-center h-32 bg-slate-50'>
                <h1 className='text-3xl '>Statistics</h1>
            </div>
            <h1 className='text-3xl font-bold text-center'>There is a pie chart about my assignment marks</h1>
            <PieChart className='w-10/12 mx-auto' width={500} height={500}>
                <Pie data={chart} cx={200} cy={200} outerRadius={80} fill="bgColor" dataKey="marks">
                        {chart.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
                    </Pie>
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default Statistics;