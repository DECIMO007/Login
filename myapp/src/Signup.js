import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Signup</h2>
                <form action ="">
                    <div className='mb-3'>
                        <label htmlFor='email'>Username</label>
                        <input type="Text" placeholder='Enter Name' className='form-control rounded-0'/>
    
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>password</label>
                        <input type="password" placeholder='Enter Password' className='form-control rounded-0'/>
                     </div>
                     <button className='btn btn-success w-100 rounded-0'>Signup</button>
                     <Link to="/" className='btn btn-default border w-100 bg-light'>Login</Link>
    
                </form>
            </div>
        </div>
      )
}

export default Signup