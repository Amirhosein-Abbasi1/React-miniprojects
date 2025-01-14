import React  from "react";
//import {createRoot} from "react-dom/client";
import './index.css';
import App1 from "./hello";
import App2 from "./timer";

class App extends React.Component{
    render(){
        return(
        <div>
            <App1/>
            <App2/>
        </div>
        )
    }
}
export default App;