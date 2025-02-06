import React  from "react";
// import {createRoot} from "react-dom/client";
import './index.css';

var myInterval;

class App2 extends React.Component{
    constructor(){
        super();
        this.state = {
            houre : 0,
            minute : 0,
            second : 0,
            isStart : false
        }
    }

    startInterval =()=>{
        if(this.state.isStart === false){
            this.setState({
                isStart : true
            })
        myInterval = setInterval(()=>{
            this.setState({
                second : this.state.second + 1
            })
            if(this.state.second === 60){
                this.setState({
                    second : 0,
                    minute : this.state.minute + 1
                })
            }
            if(this.state.minute === 60){
                this.setState({
                    minute : 0,
                    houre : this.state.houre + 1
                })
            }
        }, 1000)
      }
    }

    stopInterval =()=>{
        this.setState({
            isStart : false
        })
        clearInterval(myInterval);
    }

    resetInterval =()=>{
        this.stopInterval();
        this.setState({
            houre : 0,
            minute : 0,
            second : 0
        })
    }

    render(){
        let h = this.state.houre;
        let m = this.state.minute;
        let s = this.state.second;
        return(
        <>
        <div className="timer">
            <h2 >
              {`${h>9 ? h : "0"+h} : ${m>9 ? m : "0"+m} : ${s>9 ? s : "0"+s}`}
            </h2>
        </div>
        <div className="mainbtn">
            <button className="action-button start" onClick={this.startInterval}>Start</button>
            <button className="action-button stop" onClick={this.stopInterval}>Stop</button>
            <button className="action-button reset" onClick={this.resetInterval}>Reset</button>
        </div>
        </>   
        )
    }
}
export default App2;