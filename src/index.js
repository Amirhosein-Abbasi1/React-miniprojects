import React  from "react";
import {createRoot} from "react-dom/client";
import './index.css';

var myInterval;

//Countdown timer [[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]
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
            timer : 10
        }
    }

    componentDidMount(){
        myInterval = setInterval(()=>{
            this.setState({
                timer : this.state.timer -1
            })
        }, 1000)
    }

    componentDidUpdate(){
        //the time stop at 0 with this if
        if(this.state.timer === 0){
            clearInterval(myInterval);
        }
        console.log(this.state.timer);
    }
    render(){
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


