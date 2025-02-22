import React  from "react";
// import {createRoot} from "react-dom/client";
import './index.css';
import { firstContext } from "./context";
class App1 extends React.Component{
    static contextType = firstContext;
    render(){
        return(
        <div>
            <h1 style={{color:this.context}}>
                {this.props.title}
            </h1>
        </div>
        )
    }
}
export default App1;