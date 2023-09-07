import React from 'react'

function CreateUser() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
          <form>
              <h2>Add User</h2>
              <div className='mb-2'>
                 <label htmlFor="">Name</label>
                 <input type="text" placeholder='Enter Name' className="form-control" id='inpNameUser' />
              </div>
              <div className='mb-2'>
                 <label htmlFor="">Email</label>
                 <input type="email" placeholder='Enter Email' className="form-control" id='inpEmailUser'/>
              </div>
              <div className='mb-2'>
                 <label htmlFor="">Age</label>
                 <input type="text" placeholder='Enter Age' className="form-control" id='inpAgeUser'/>
              </div>
              <button className='btn btn=success' id='btnSubm'>Submit</button>	  
          </form>
        </div>		
    </div>
  )
}

export default CreateUser;