import React , {useState}from "react";
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

  // function cheched(e){
  //   if(e.target.checked===false){
  //     setcheck(false);
  //   console.log("jjj");

  //   }
  //   else if(e.target.checked===true) {
  //   setcheck(true)
  //   console.log("hhh")}
  // }
  return (
    <div >
     {/* <h1>Login here</h1> */}

     <div className='fbox'>
       <form >
         <label  htmlFor="text">STUDENT USERNAME:</label>
         <input type="text" placeholder='username' name='username'   ref={register({ required: true })}/><br/>
         <label htmlFor="pasword">PASSWORD</label>
         <input type='password' placeholder='PASSWORD' name='password' ref={register({required:true})}/>
         {/* <input type="checkbox" value="0"   onChange={cheched}></input>select all

            <input type="checkbox"   checked={check}  value="python"  name="course" ref={register} onClick={check ? false : true}></input>python
                <input type="checkbox" checked={check}  value="PHP" name="course" ref={register}  onClick={check ? false : true}></input>PHP
                <input type="checkbox" checked={check}  value="C,C++" name="course" ref={register} onClick={check ? false : true}></input>C,C++ */}
         
         
         {/* <button type='submit'onClick={handleSubmit(onSubmit)} ><Link to="/Qpaper"  >submit</Link></button>  */}
        <button  type='submit'  onClick={handleSubmit(onSubmit)}>submit</button> 

    
         </form>
         <Link to="/Register">ClickHERE to Register for exam</Link>
         
     </div>
    </div>
  );
}

export default Login;