import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Users () {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios
      .get('http://localhost:3005') // axios.get chama a rota app.get
      .then(result => {setUsers(result.data)        
      })
      .catch(err => console.log(err))
     }, []);


    const handleDelete = id => {
    // 👇️ filter with 1 condition
  const filtered = users.filter(user => {
    return user.name && user._id === id;
  });
  
  
  
    /* Object { _id: "657470004e6e383fe03ed7ac", name: "Yoyo", email: "yoyo @gmail.com", age: 32, __v: 0 } */
  /* ABAIXO SELECIONA NA STRING (ex. acima), SOH O NOME PARA SER EXIBIDO **************** */
   /* só mostra texto após o caracter 43 */
  var casa = JSON.stringify(filtered)
  
    /* Abaixo deteta o indice do texto que será eliminado */
   const searchTerm = '","email"';
   var indexOfFirst = casa.indexOf(searchTerm);
   console.log('o indice mutante do termo a cortar é: ', indexOfFirst);
  
  var substrtemp = casa.substring(43,indexOfFirst) 
  console.log(substrtemp);
  /* FIM DO TRECHO QUE SELECIONA O NAME  *************************************************/
  
  
      const confirmDelete = window.confirm( 
        `Are you sure you want to delete the user with name: ${substrtemp}`
      )

      if (confirmDelete) {
      /** A rota  http://localhost:3005/ deleteUser/id   é rota que está no servidor index.js */
        axios
          .delete('http://localhost:3005/deleteUser/' + id) // Aos 54:33 minutos axios.delete chama a rota app.delete
          .then(res => {
            console.log(res)
            window.location.reload()
          })
          .catch(errr => console.log(errr))
      }      
    }



  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='tab vw-100 w-50 bg-white rounded p-3'>
        <div>
          {' '}
          <h2>Home Page</h2>
        </div>

        {/*  Botão que chama a tela ou rota criar usuário, usando um link */}
        <Link to='/create' className='btn btn-success'>
          Add +
        </Link>

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
              console.log(user)
              return (
                // eslint-disable-next-line react/jsx-key
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      className='btnEdit btn btn-success'
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      className='btn btn-danger'
                      id='btnDelete'
                      onClick={() => handleDelete(user._id)}
                    >
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
