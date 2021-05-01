function Marksheet(props){

    return(
    <div>
        <h1>RESULT</h1><br/><br/><br/><br/><br/><br/><br/><br/>
        <p>number of question 10</p>
        <h1>NUMBER OF QUESTIONS ARE CORECCT IS :{props.mark}</h1><br/><br/>
        <h1>NUMBER OF INCORRECT QUESTIONS ARE :{(10-(props.mark))} </h1><br/><br/>
        <h1>Obtained Score : {props.mark*2}!!</h1><br/><br/>
    </div>
    );
}
export default Marksheet;