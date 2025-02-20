// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Simplehulist = () => {
//     const [user, setUsers] = useState([]);
    

//     const setUsersData = async() =>{
//         let result = await fetch("http://srv577826.hstgr.cloud:8001/api/v1/data/simplehumanuser")
//         result = await result.json()       
//         setUsers(result)        
//         console.log(result)
//     }
  
  
//       useEffect(()=>{
//         setUsersData()
//     },[])
//       const deleteuser = async(id)=>{
//           // console.log(id)
//           try {
//               let result= await fetch(`http://srv577826.hstgr.cloud:8001/api/v1/data/simplehumanuserid/${id}`,{
//             method:"delete"
         
//           })
//           result= await result.json()
//           if(result){
//             setUsersData()
//           }
          
         
      
//           } catch (error) {
//               alert("Error in deleting data")
//           }
          
          
//         }
//   return (
//     <div>
        
//     <div className='container w-75'>
//            <h4 className='my-4 text-center text-warning display-4 fw-bold'>List of Simple Human Products</h4>
//            <Link to="/simplehumanform" ><button className='btn btn-success mb-2 w-10'>+ Add New Product </button></Link>  
//            <table class="table table-striped table-hover">
//                  <thead>
//                      <tr className='btn-dark text-light text-center'>
//                          <th scope="col">#</th>
//                          <th scope="col">Name</th>
//                          <th scope="col">Title</th>
//                          <th scope="col">Price</th>
//                          <th scope="col">Image</th>
//                          <th scope="col">Operations</th>
//                      </tr>
//                  </thead>
//                  <tbody>
//                      {
//                          user.map((ele,ind)=>{
//                              return(
//                                  <>
//                                      <tr>
//                                          <th scope="row">{ind+1}</th>
//                                          <td>{ele.name}</td>
//                                          <td>{ele.title}</td>
//                                          <td>{ele.price}</td>
//                                          <td> {ele.image && (
//                               <img 
//                             src={`http://srv577826.hstgr.cloud:8001/${ele.image}`} 
//                                      alt={ele.name} 
//                                          className='img-fluid' 
//                                     style={{ height: '70px', width: '100px' }}
//                                           />
//                                )}</td>
//                                          <td>
//                                              <Link to={`/listsimplehuman/${ele._id}`} className='btn btn-success'>Edit</Link>
//                                              <a onClick={()=>deleteuser(ele._id)} className='btn btn-danger ms-2'>Delete</a>
//                                          </td>
//                                      </tr>
//                                  </>
//                              )
//                          })
//                      }
     
//                  </tbody>
//          </table>
     
     
//          </div>


// </div>
//   )
// }

// export default Simplehulist; 
 

import React, { useState, useEffect } from 'react';
import StaticListComponent from '../../../../../Staticlist'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const Simplehulist = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data here
    const fetchData = async () => {
      try {
        const response = await fetch('http://srv577826.hstgr.cloud:8001/api/v1/data/simplehumanuser');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://srv577826.hstgr.cloud:8001/api/v1/data/simplehumanuserid/${id}`, {
        method: 'DELETE',
      });
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (id) => {
    // Handle edit logic here, if needed
  };

  return (
    <StaticListComponent
      data={data}
      onDelete={handleDelete}
      onEdit={handleEdit}
      editUrlBase='/listsimplehuman'  // Set the base URL for editing
      addProductUrl='/simplehumanform'  // Set the URL for adding a new product
    />
  );
};

export default Simplehulist;