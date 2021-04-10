import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Qqpaper(props) {
  const {register,handleSubmit}=useForm() //its a hook for forms in react
  const[disdata,setdisdata]=useState([]);
  const[enable,setenable]=useState(true);


  const question = [
    {
      ques: "1. Everything in React is a _____________",
      anss: [
        { name: "first", options: "Module", iscorrect: 'wrong' },
        { name: "first", options: "component", iscorrect: 'correct!!!' },
        { name: "first", options: "class", iscorrect: 'wrong' },
        { name: "first", options: "package", iscorrect: 'wrong' }
      ],
    },
    {
      ques: "2. What is ReactJS?",
      anss: [
        { name: "first",options: "Server side Framework", iscorrect: 'wrong!' },
        { name: "first",options: "User-interface framework", iscorrect: 'wrong!' },
        { name: "first",options: "User-interface framework", iscorrect: 'correct!!!' },
        { name: "first",options: "None of These", iscorrect: 'wrong!' }
      ],
    },
    {
      ques:
        "  3. What port is the default where the webpack-dev-server will run?",
      anss: [
        {  name: "first",options: "3000", iscorrect: 'correct!!!' },
        {  name: "first",options: "8080", iscorrect: 'wrong!' },
        {  name: "first",options: "3306", iscorrect: 'wrong!' },
        {  name: "first",options: "3001", iscorrect: 'wrong!' }
      ],
    },
    {
      ques:
        "  4. In React what is used to pass data to a component from outside?",
      anss: [
        {  name: "first",options: "setState", iscorrect: 'wrong!' },
        {  name: "first",options: "render with arguments", iscorrect: 'wrong!' },
        {  name: "first",options: "props", iscorrect: 'correct!!!' },
        {  name: "first",options: "props types", iscorrect: 'wrong!' }
      ],
    },
    {
      ques: " 5. React.js Covers only the view layer of the app.",
      anss: [
        { name: "first",options: "NO", iscorrect: 'wrong!' },
        { name: "first",options: "YES", iscorrect: 'correct!!!' }
        
      ],
    },
    {
      ques: " 6. Which of the following option is used to access the state of acomponent from inside of a member function?",
      anss: [
        {  name: "first",options: "this.state", iscorrect: 'wrong!' },
        {  name: "first",options: "this.values", iscorrect: 'correct!!!' },
        {  name: "first",options: "this.getState()", iscorrect: 'wrong!' },
        {  name: "first",options: "this.prototype.stateValue", iscorrect: 'wrong!' }
      ],
    },
    {
      ques: "7. What create-react-app command do",
      anss: [
        {  name: "first",options: "Update a react app", iscorrect: 'wrong!' },
        {  name: "first",options: "Creates new react app", iscorrect: 'correct!!!' },
        {  name: "first",options: "Install dependencies", iscorrect: 'wrong!' },
        {  name: "first",options: "create folder", iscorrect: 'wrong!' }
      ],
    },
    {
      ques: "8. Props are __________ into other components.",
      anss: [
        {  name: "first",options: "Injected", iscorrect: 'wrong!' },
        {  name: "first",options: "Methods", iscorrect: 'correct!!!' },
        {  name: "first",options: "class", iscorrect: 'wrong!' },
        {  name: "first",options: "package", iscorrect: 'wrong!' }
      ],
    },
    {
      ques: "9. ReactJS uses _____ to increase performance.",
      anss: [
        {  name: "first",options: "Original DOM", iscorrect: 'wrong!' },
        {  name: "first",options: "Virtual DOM", iscorrect: 'correct!!!' },
        {  name: "first",options: "Both Original amd Virtual DOM", iscorrect: 'wrong!' },
        {  name: "first",options: "None of the above", iscorrect: 'wrong!' }
      ],
    },
    {
      ques: "10. What is state in React?",
      anss: [
        { name: "first",options: "An internal data store (object) of a component.", iscorrect: 'correct!!!' },
        { name: "first",options: "A persistant storage.", iscorrect: 'wrong!' }
        
      ],
    },
  ];

  const handlechange=(iscorrect)=>{
    
    if(iscorrect==='correct!!!'){
      props.ssc(props.sc+1)
    }
  
    else if (props.sc>=10)
    {
      props.ssc(props.sc+0)

    }
  }

  function nextque(){
    const nextquestion = props.cq+1;
    if(nextquestion < question.length){
      props.scq(nextquestion)
      setdisdata("")
    setenable(true)

    }
  }
  const onSubmit=(data)=>{ 
    console.log(data);
    setdisdata(data);
    setenable(false)
}
  return (
    <div>
      <h1>solve the questions </h1>
      <div className="fbox">
        <>
         <form>
         <p>welcome :{" "+props.dis.username} </p>

          {/* <p>{props.sc}</p>
          <p>{props.wrg}</p> */}
          <div>{question[props.cq].ques}</div>

          {question[props.cq].anss.map((answer)=> (
            <div>
           <input type="radio" name={answer.name}  value={answer.iscorrect} onClick={()=>handlechange(answer.iscorrect)} ref={register} ></input>
            <label>{answer.options}</label>
            </div>
          ))}
          <p>{disdata.first}</p>

          <button className="btn" type="submit" onClick={handleSubmit(onSubmit)}>submit / skip </button>
          {props.cq==question.length-1 ? (<Link to="/Mmarksheet"><button  type='submit'>Finsh</button></Link>) : <button className="btn"  type="button" id="button2"   onClick={nextque} disabled={enable}>nextquestion </button>}
          </form>
          </>
          </div>

         
          

       </div>
  );
}

export default Qqpaper;
