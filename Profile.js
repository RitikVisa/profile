import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [users, setUsers] = useState([]);
  const url = 'http://localhost:3000/api/customers'; // Replace with your API URL

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await axios.get(url);
      setUsers(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }


  async function deleteUser(id) {
    try {
      const response = await axios.delete(`${url}/delete?id=${id}`);
      console.log("Deleted Data : ", response);
      
      // Update the users state after a successful delete operation
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  }
  

  return (
    <div className="profile-section p-5 shadow ">
      <div className='register-user-container d-flex flex-column align-items-center'>
        <h1 className='text-center'>Registered Users </h1>
        
          {users.map(user => (
            
              <div key={user.id} className="mx-0 my-4  p-3 card shadow-sm w-75 ">
                <div  className="row d-flex ">
                  <div className="col-md-2  p-3">
          
                      <img src={user.imageUrl} alt="Profile Picture" className='img-fluid rounded-circle shadow-sm ' />
                    
                  </div>
                  <div className="col-md-8 d-flex flex-column justify-content-center">
                    <h6 className='mb-1 text-uppercase'>{user.name}</h6>
                    <p className='mb-1'>Mobile : {user.mobile}</p>
                    <p className='mb-1'>Email :  {user.email}</p>
                    <p className='mb-1 connect'>Connect Now</p>
                  </div>
                  <div className="col-md-2 ">
                    <button className='btn edit-bt btn-primary my-3'>Edit</button>
                    <button className='btn delete-bt btn-primary my-3' onClick={()=>{deleteUser(user.id)}} >Delete</button>

                  </div>
                </div>
              </div>
            
          ))}
        
      </div>
    </div>
  );
}

export default Profile;