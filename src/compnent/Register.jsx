import React from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';


function Register() {
    const {register,handleSubmit}=useForm()
    
    const onSubmit=(data)=>{
      console.log(data);
    }
    return (
      <div >
       <h1>Register here</h1>
  
       <div className='fbox'>
         <form onSubmit={handleSubmit(onSubmit)}>
         <label  htmlFor="text">NAME:</label>
           <input type="text" placeholder='name' name='NAME'  ref={register}/>
           <label  htmlFor="text">EMAIL:</label>
           <input type="text" placeholder='email address' name='email'  ref={register}/><br/>
           <label htmlFor="pasword">PASSWORD</label>
           <input type='password' placeholder='PASSWORD' name='password' ref={register}/><br/>
           <label htmlFor="pasword">PASSWORD CHECK</label>
           <input type='password' placeholder=' REENTER PASSWORD' name='password 2' ref={register}/><br/>
           <button type='submit'>Register</button>
         <p>clickHERE to login</p><Link to="/Login">login</Link>

           </form>
       </div>
      </div>
    );
  }
  
  export default Register;