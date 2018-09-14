import React from 'react';
import Table from './table';

export default () => {
    const students = [
        {
            name: 'Peter Parker',
            course: 'Photography',
            grade: 99
        },
        {
            name: 'Tony Stark', 
            course: 'Engineering', 
            grade: 99
        },
        {
            name: 'Bruce Banner', 
            course: 'Psychology', 
            grade: 79
        }
    ];

    return (
    <div className = "container">
        <h1>Student Grade Table</h1>
        <Table data={students}/>
    </div>
    )
}

