import React  from "react";
// import {createRoot} from "react-dom/client";
import './index.css';

var myInterval;

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
                timer : this.state.timer - 1
            })
        }, 1000)
    }

    componentDidUpdate(){
        //the time stop at 0 with this if
        if(this.state.timer === 0){
            clearInterval(myInterval);
        }
    }
    render(){
        return(
        <div className="timer">
            <h2 >
                time is : {this.state.timer}
            </h2>
            <button onClick={this.props.chaing}>Chaing</button>
        </div>   
        )
    }
}
export default App2;