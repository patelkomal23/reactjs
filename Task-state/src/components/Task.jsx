import React, { useState } from 'react'
function Task() {
    const [tasks,setTasks] = useState([
        {
            id:1,
            name:'Croma.'
        },
        {
            id:2,
            name:'MIVI '
        },
        {
            id:3,
            name:'Nike'
        },
        {
            id:4,
            name:'Puma'
        },
        {
            id:5,
            name:'Apple'
        }
    ]);

    const handleDelete=(id)=>{
        console.log(id);        
        let data = tasks.filter((task,index)=>{
            return task.id != id;
        })
        console.log(data);
        setTasks(data);
    }


  return (
    <>
      <div className='container'>
        <div className='row'>
            <div className='col-md-6 mx-auto'>
                <table className='table  caption-top'>
                    <caption><h2>Task</h2></caption>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tasks.map((task,index)=>(
                            <tr key={task.id}>
                                <td>{index+1}</td>
                                <td>{task.name}</td>
                                <td>
                                    <button onClick={()=> handleDelete(task.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </>
  )
}

export default Task