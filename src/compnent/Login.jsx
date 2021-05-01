import React from "react";
import '../App.css';
import {useForm} from 'react-hook-form';// npm install react-hook-form
import {Link , useNavigate} from 'react-router-dom'; // npm install ract-router-dom



function Login(props) {
  const {register,handleSubmit}=useForm() //its a hook for forms in react
//this is function for geting the data from the form
  const onSubmit=(data)=>{ 
    console.log(data);
    props.disdat(data) //usestate is define in App.js ( one way data-flow )
    navigate("/Qqpaper");
  }
  const navigate = useNavigate();

  
  return (
    <div >
     {/* <h1>Login here</h1> */}

     <div className='fbox'>
       <form >
         <label  htmlFor="text">STUDENT USERNAME:</label>
         <input type="text" placeholder='username' name='username'   ref={register({ required: true })}/><br/>
         <label htmlFor="pasword">PASSWORD</label>
         <input type='password' placeholder='PASSWORD' name='password' ref={register({required:true})}/>
         
        <button  type='submit'  onClick={handleSubmit(onSubmit)}>submit</button> 

    
         </form>
         <Link to="/Register">ClickHERE to Register for exam</Link>
         
     </div>
    </div>
  );
}

export default Login;