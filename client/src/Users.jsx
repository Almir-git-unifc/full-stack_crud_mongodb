import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Users () {
    const [users, setUsers] = useState([{
        Name: "Yoseph", Email:"yosep@gmail.com", Age: 20
     }]);
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>

      <div className='tab vw-100 w-50 bg-white rounded p-3'>
 
      {/*  Botão que chama a tela ou rota criar usuário, usando um link */} 
      <Link to="/create" className="btn btn-success">Add +</Link>
 
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th colSpan='2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
                console.log(', user');
              return (
                // eslint-disable-next-line react/jsx-key
                <tr>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Age}</td>                  
                  <td>                  
                    <Link to="/update" className="btnEdit btn btn-success" >Update</Link>
                  </td>
                  <td>
                    <button id='btnDelete'>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Users
