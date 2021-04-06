function Mmarksheet1(props){

    return(
    <div>
        <h1>RESULT</h1><br/><br/><br/><br/><br/><br/><br/><br/>
        <p>total question are 10</p>
        <h1>NUMBER OF QUESTIONS ARE CORECCT IS :{props.sc}</h1><br/><br/>
        <h1>NUMBER OF INCORRECT QUESTIONS ARE :{(10-(props.sc))} </h1><br/><br/>
        <h1>Obtained Score : {props.sc*2}!!</h1><br/><br/>
        {/* <h1>Total Questions attempted : {(10-(props.sc))+props.mark}</h1> */}
    </div>
    );
}
export default Mmarksheet1;