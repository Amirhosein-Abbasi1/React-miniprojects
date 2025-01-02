import React  from "react";
import {createRoot} from "react-dom/client";
import './index.css';

var myInterval;

//React life cycle [[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]
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

    componentDidMount(){
        myInterval = setInterval(()=>{
            this.setState({
                timer : new Date().toLocaleTimeString()
            })
        }, 1000)
        console.log("componentDidMount");
        //With this log you understand how it's work
    }

    componentDidUpdate(){
        //the time stop at 8:48:35 AM with this if
        if(this.state.timer === "8:48:35 AM"){
            clearInterval(myInterval);
        }
        console.log(this.state.timer);
    }

    componentWillUnmount(){
        //it start to ddoing when a component close
    }

    render(){
        // myInterval = setInterval(()=>{
        //     this.setState({
        //         timer : new Date().toLocaleTimeString()
        //     })
        // }, 1000)
        // console.log("render");


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


