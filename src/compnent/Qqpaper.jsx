import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Qqpaper(props) {
  const question = [
    {
      ques: "1. Everything in React is a _____________",
      anss: [
        { name: "1", options: "Module", iscorrect: false },
        { name: "1", options: "component", iscorrect: true },
        { name: "1", options: "class", iscorrect: false },
        { name: "1", options: "package", iscorrect: false }
      ],
    },
    {
      ques: "2. What is ReactJS?",
      anss: [
        { name: "2",options: "Server side Framework", iscorrect: false },
        { name: "2",options: "User-interface framework", iscorrect: false },
        { name: "2",options: "User-interface framework", iscorrect: true },
        { name: "2",options: "None of These", iscorrect: false }
      ],
    },
    {
      ques:
        "  3. What port is the default where the webpack-dev-server will run?",
      anss: [
        {  name: "3",options: "3000", iscorrect: true },
        {  name: "3",options: "8080", iscorrect: false },
        {  name: "3",options: "3306", iscorrect: false },
        {  name: "3",options: "3001", iscorrect: false }
      ],
    },
    {
      ques:
        "  4. In React what is used to pass data to a component from outside?",
      anss: [
        {  name: "4",options: "setState", iscorrect: false },
        {  name: "4",options: "render with arguments", iscorrect: false },
        {  name: "4",options: "props", iscorrect: true },
        {  name: "4",options: "props types", iscorrect: false }
      ],
    },
    {
      ques: " 5. React.js Covers only the view layer of the app.",
      anss: [
        { name: "5",options: "NO", iscorrect: false },
        { name: "5",options: "YES", iscorrect: true }
        
      ],
    },
    {
      ques: " 6. Which of the following option is used to access the state of acomponent from inside of a member function?",
      anss: [
        {  name: "6",options: "this.state", iscorrect: false },
        {  name: "6",options: "this.values", iscorrect: true },
        {  name: "6",options: "this.getState()", iscorrect: false },
        {  name: "6",options: "this.prototype.stateValue", iscorrect: false }
      ],
    },
    {
      ques: "7. What create-react-app command do",
      anss: [
        {  name: "7",options: "Update a react app", iscorrect: false },
        {  name: "7",options: "Creates new react app", iscorrect: true },
        {  name: "7",options: "Install dependencies", iscorrect: false },
        {  name: "7",options: "create folder", iscorrect: false }
      ],
    },
    {
      ques: "8. Props are __________ into other components.",
      anss: [
        {  name: "8",options: "Injected", iscorrect: false },
        {  name: "8",options: "Methods", iscorrect: true },
        {  name: "8",options: "class", iscorrect: false },
        {  name: "8",options: "package", iscorrect: false }
      ],
    },
    {
      ques: "9. ReactJS uses _____ to increase performance.",
      anss: [
        {  name: "9",options: "Original DOM", iscorrect: false },
        {  name: "9",options: "Virtual DOM", iscorrect: true },
        {  name: "9",options: "Both Original amd Virtual DOM", iscorrect: false },
        {  name: "9",options: "None of the above", iscorrect: false }
      ],
    },
    {
      ques: "10. What is state in React?",
      anss: [
        { name: "10",options: "An internal data store (object) of a component.", iscorrect: true },
        { name: "10",options: "A persistant storage.", iscorrect: false }
        
      ],
    },
  ];

  const handlechange=(iscorrect)=>{
    
    if(iscorrect===true){
      props.ssc(props.sc+1)
    }
  const nextquestion = props.cq+1;
    if(nextquestion < question.length){
      props.scq(nextquestion)
    }
    else if (props.sc>=10)
    {
      props.ssc(props.sc+0)

    }
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
           <input type="radio" name={answer.name} onClick={()=>handlechange(answer.iscorrect)}></input>
            <label>{answer.options}</label></div>
          ))}

        </form>
        </>
    </div>
    <Link to="/Mmarksheet"><button className="btn" type='submit'>submit</button></Link>

    </div>
  );
}

export default Qqpaper;
