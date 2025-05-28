import React from 'react';
import { Link } from 'react-router-dom';

function Students(props) {
    let students = [
        {id:1,name:"Aarush"},
        {id:2,name:"Kabir"},
        {id:3,name:"Adhira"}
    ]
    return (
        <div>
            
            {
                students.map((s)=>{
                    return (
                        <>
                        <Link to ={`/Stud_Details/${s.id}`}  key={s.id}>{s.name}</Link> <br />
                        </>
                    )
                })
            }

        </div>
    );
}

export default Students;