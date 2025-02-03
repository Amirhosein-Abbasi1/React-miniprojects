import React  from "react";
//import {createRoot} from "react-dom/client";
import './index.css';
import App1 from "./hello";
import App2 from "./timer";

class App extends React.Component{
    constructor(){
        super();
        this.state={
           title : "Reverse timer"
        }
    }
    chaing =()=>{
        this.setState({
            title : "You clicked on it"
        });
    }
    render(){
        return(
        <div>
            <App1 title={this.state.title}/>
            <App2 chaing={this.chaing}/>
        </div>
        )
    }
}
export default App;