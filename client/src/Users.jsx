import axios from "axios";
import { useEffect,  useState } from 'react';
import { Link } from "react-router-dom";

function Users () {
    const [users, setUsers] = useState([]);

    useEffect( ( ) => {
      axios.get("http://localhost:3005")   // axios.get chama a rota app.get
     .then( result => setUsers(result.data) )
     .catch( err => console.log(err) )
    }, [ ] );

    const handleDelete = (id) => {  //
      const confirmDelete = window.confirm('Are you sure you want to delete this item');

      if (confirmDelete){
        axios.delete('http://localhost:3005/deleteUser/'+id)  // Aos 54:33 minutos axios.delete chama a rota app.delete
        .then(res  =>  { 
           console.log(res) 
           window.location.reload( )
        })
        .catch(errr => console.log(errr))  
      }
    };


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>

      <div className='tab vw-100 w-50 bg-white rounded p-3'>
 
        <div> <h2>Home Page</h2></div>

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
                console.log(user);
              return (
                // eslint-disable-next-line react/jsx-key
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>                  
                  <td>                  
                    <Link to={`/update/${user._id}`} className="btnEdit btn btn-success" >Update</Link>
                  </td>
                  <td>
                     <button className="btn btn-danger" id='btnDelete' onClick ={() => handleDelete(user._id)}>
                        Delete
                     </button>
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
