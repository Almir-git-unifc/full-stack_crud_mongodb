import {useState, useEffect} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";



function UpdateUser () {
  const  { id } = useParams();  // assim capturamos o ID da url
  // vamos criar hook para atualizar os campos, como no arquivo CreateUser.jsx
  const [name, setName] = useState( )
  const [email, setEmail] = useState( )
  const [age, setAge] = useState( )
  const navigate = useNavigate()


// Aqui, em useEffect, prencheremos os campos do formulário updateUser
  useEffect( ( ) => {
    const urlGetUser = `http://localhost:3005/getUser/${id}`;
    axios.get(urlGetUser)
    .then( result =>  { 
      console.log(result) 
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch( err => console.log(err) )
    }, [id] );

// Podemos copiar o método Submit do Create.User.jsx
const Update = (e) => {
    e.preventDefault();
    // vamos chamar a URL/server  dentro do método PUT do axios
    // A rota /updateUser abaixo, deverá ser definida no arquivo index.jsx 
    axios.put("http://localhost:3005/updateUser/"+id, {name, email, age}  )
   .then( result => {
      console.log(result)
      navigate("/")
    })
   .catch( err => console.log(err) )
};

const handleCancel = () => {
  navigate("/");
};

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='formupd vw-100  bg-white rounded p-3'>

        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className='mb-2'>
            { /* O comando htmlFor faz o link do label com o campo, e dá uma descrição que é lida por leitor de código (para deficientes visuais) */ }
            <label htmlFor="input-name-update">Name</label>
            <input type="text"  placeholder='Enter Name' className="form-control"  id='input-name-update' 
               value = {name}
               onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className='mb-2'>
            <label htmlFor="input-email-update">Email</label>
            <input type="email" placeholder='Enter Email' className='form-control' id='input-email-update' 
                value = {email}
                onChange={(e) => setEmail(e.target.value)}/>
          </div>
       
          <div className='mb-2'>
            <label htmlFor="input-Age-Update">Age</label>
            <input type="text" placeholder='Enter Age' className='form-control' id='input-Age-Update' 
                value = {age}
                onChange={(e) => setAge(e.target.value)}/>
          </div>
          <div className="flexContainer">
              <button className='btn btn-success btnSubmUpd'>Update</button>
              <button onClick={handleCancel} className="btn btn-success" id="btnCancelUpd" >Cancel</button>
          </div>    			 		 
        </form>

    </div>
  </div>
  );
}

export default UpdateUser
