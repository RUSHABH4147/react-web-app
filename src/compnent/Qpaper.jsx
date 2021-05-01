import React from 'react';
import {Link} from 'react-router-dom';


function Qpaper(props) {

    
   
    
    return (
      <div >
       <h1>solve the questions </h1>
       <div className='fbox'>
         <form >
           {/* <p>{props.mark}</p>
           <p>{props.wrg}</p> */}
          <p>welcome :{" "+props.dis.username} </p>        {/*this props usestate (for displaying data from login component)is also coming from app.js (one way data flow) */}
         <hr/>

         <label  htmlFor="text">1. Everything in React is a _____________</label><br/>
         <input type="radio" name="test" value="1"  onChange={props.chck }  />Module <br/>
         <input type="radio" name="test" value="2" onChange={props.chck } />component <br/>  {/*we can also share function call */}
         <input type="radio" name="test" value="1" onChange={props.chck}  />class <br/>
         <input type="radio" name="test" value="1" onChange={props.chck}  />package <br/><br/>

         <label  htmlFor="text">2.  What is ReactJS?</label><br/>
         <input type="radio" name="2nd" value="Server side Framework" onChange={props.chck}/>Server side Framework<br/>
         <input type="radio" name="2nd" value="User-interface framework" onChange={props.chck}/>User-interface framework<br/>
         <input type="radio" name="2nd" value="2" onChange={props.chck}/>A Library for building interaction interfaces<br/>
         <input type="radio" name="2nd" value="1" onChange={props.chck}/>None of These<br/><br/>
          
         <label  htmlFor="text">3. What port is the default where the webpack-dev-server will run?</label><br/>
         <input type="radio" name="3rd" value="2" onChange={props.chck}/>3000<br/>
         <input type="radio" name="3rd" value="8080" onChange={props.chck}/>8080<br/>
         <input type="radio" name="3rd" value="3306" onChange={props.chck}/>3306<br/>
         <input type="radio" name="3rd" value="3001" onChange={props.chck}/>3001<br/><br/>

         <label  htmlFor="text">4. In React what is used to pass data to a component from outside?</label><br/>
         <input type="radio" name="4th" value="setState" onChange={props.chck}/>setState<br/>
         <input type="radio" name="4th" value="render with arguments" onChange={props.chck}/>render with arguments<br/>
         <input type="radio" name="4th" value="2" onChange={props.chck}/>props<br/>
         <input type="radio" name="4th" value="PropTypes" onChange={props.chck}/>PropTypes<br/><br/>

         <label  htmlFor="text">5. React.js Covers only the view layer of the app.</label><br/>
         <input type="radio" name="5th" value="2" onChange={props.chck}/>yes<br/>
         <input type="radio" name="5th" value="NO" onChange={props.chck}/>NO<br/><br/>

         <label  htmlFor="text">6) Which of the following option is used to access the state of a component from inside of a member function?</label><br/>
         <input type="radio" name="6th" value=" this.state" onChange={props.chck}/> this.state<br/>
         <input type="radio" name="6th" value="2" onChange={props.chck}/>this.values<br/>
         <input type="radio" name="6th" value="this.getState()" onChange={props.chck}/>this.getState()<br/>
         <input type="radio" name="6th" value="this.prototype.stateValue" onChange={props.chck}/>this.prototype.stateValue<br/><br/>

         <label  htmlFor="text">7) What create-react-app command do</label><br/>
         <input type="radio" name="7th" value=" Update a react app" onChange={props.chck}/> Update a react app<br/>
         <input type="radio" name="7th" value="2" onChange={props.chck}/>Creates new react app<br/>
         <input type="radio" name="7th" value="install dependencies" onChange={props.chck}/>install dependencies<br/>
         <input type="radio" name="7th" value="create folder" onChange={props.chck}/>create folder<br/><br/>

         <label  htmlFor="text">8) Props are __________ into other components.</label><br/>
         <input type="radio" name="8th" value="Injected" onChange={props.chck}/>Injected<br/>
         <input type="radio" name="8th" value="2" onChange={props.chck}/>Methods<br/><br/>

         <label  htmlFor="text">9)ReactJS uses _____ to increase performance.</label><br/>
         <input type="radio" name="9th" value="Original DOM" onChange={props.chck}/>Original DOM<br/>
         <input type="radio" name="9th" value="2" onChange={props.chck}/>Virtual DOM<br/>
         <input type="radio" name="9th" value="Both Original and Virtual DOM" onChange={props.chck}/>Both Original amd Virtual DOM<br/>
         <input type="radio" name="9th" value="None of the above" onChange={props.chck}/>None of the above<br/><br/>

         <label  htmlFor="text">10) What is state in React?</label><br/>
         <input type="radio" name="10th" value=" A persistant storage." onChange={props.chck}/> A persistant storage.<br/>
         <input type="radio" name="10th" value="2" onChange={props.chck}/>An internal data store (object) of a component.<br/><br/>
         


          

                     <Link to="/Marksheet"><button type='submit'>submit</button></Link>


           </form>
       </div>
      </div>
    );
  }
  
  export default Qpaper;