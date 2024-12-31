import React  from "react";
import {createRoot} from "react-dom/client";
import './index.css';

//state and style css [[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]
class App1 extends React.Component{
    render(){
        return(
        <div>
            <h1 className="main">
                what time is it?
            </h1>
        </div>
        )
    }
}
class App2 extends React.Component{
    constructor(){
        super();
        this.state = {
            timer : new Date().toLocaleTimeString()
        }
    }
    render(){
        setInterval(()=>{
            this.setState({
                timer : new Date().toLocaleTimeString()
            })
        }, 1000)

        return(
        <div className="timer">
            <h2 >
                time is : {this.state.timer}
            </h2>
        </div>   
        )
    }
}
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
    createRoot(document.getElementById("root")).render(<App/>);


// setInterval(()=> {
//     timer();}, 1000
// )