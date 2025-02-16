import React  from "react";
// import {createRoot} from "react-dom/client";
import './index.css';

class App1 extends React.Component{
    render(){
        return(
        <div>
            <h1>
                {this.props.title}
            </h1>
        </div>
        )
    }
}
export default App1;