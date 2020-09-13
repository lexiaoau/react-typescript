import React from "react";
import "./App.css";
import StoredState from './components/commonTypes/state'
import {  useSelector } from "react-redux";
// import { Counter } from "./Counter";
import Board from './components/Board';  

// props
// hooks
// render props

const App: React.FC = () => {
    const enteredPin = useSelector((state : StoredState) => state.enteredPin);
    const errorMsg = useSelector((state : StoredState) => state.errorMsg);
    const isLocked = useSelector((state : StoredState) => state.isLocked);
    const savedPin = useSelector((state : StoredState) => state.savedPin);
    return (
      // <div className="">
      <div className="App">
          <div className="buttondiv">
            <Board 
            />
          </div>
          <div className="rightdiv">
              <div className="textdiv">
                <input className="textinput"
                  value={enteredPin}
                  readOnly
                />   
                <label>{errorMsg}</label>             
              </div>

            </div>
      </div>  

    );
};

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

export default App;
