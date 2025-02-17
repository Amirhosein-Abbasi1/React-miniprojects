import React from "react";
// import {createRoot} from "react-dom/client";
import './index.css';
import TimeList from "./timeList";

var myInterval;

class App2 extends React.Component{
    constructor(){
        super();
        this.state = {
            houre : 0,
            minute : 0,
            second : 0,
            milliseconds : 0,
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
                milliseconds : this.state.milliseconds + 1
            })
            if(this.state.milliseconds === 99){
                this.setState({
                    milliseconds : 0,
                    second : this.state.second + 1
                })
            }
            // I changed the number 60 to 59 because that's how it is originally
            if(this.state.second === 59){
                this.setState({
                    second : 0,
                    minute : this.state.minute + 1
                })
            }
            if(this.state.minute === 59){
                this.setState({
                    minute : 0,
                    houre : this.state.houre + 1
                })
            }
        }, 10)
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
            second : 0,
            milliseconds : 0
        })
    }

    handleSaveTime =()=>{
        let h = this.state.houre;
        let m = this.state.minute;
        let s = this.state.second;
        let ms = this.state.milliseconds;
        let newTime = `${h>9 ? h : "0"+h} : ${m>9 ? m : "0"+m} : ${s>9 ? s : "0"+s} . ${ms>9 ? ms : "0"+ms}`
        this.props.setTimeArr([ ...this.props.timeArr , newTime]);
    }

    render(){
        let h = this.state.houre;
        let m = this.state.minute;
        let s = this.state.second;
        let ms = this.state.milliseconds;
        return(
        <>
        <div className="timer" onClick={this.handleSaveTime}>
            <h2 >
              {`${h>9 ? h : "0"+h} : ${m>9 ? m : "0"+m} : ${s>9 ? s : "0"+s} . ${ms>9 ? ms : "0"+ms}`}
            </h2>
        </div>
        <div className="mainbtn">
            <button className="action-button start" onClick={this.startInterval}>Start</button>
            <button className="action-button stop" onClick={this.stopInterval}>Stop</button>
            <button className="action-button reset" onClick={this.resetInterval}>Reset</button>
            <button 
            className="action-button handle" 
            onClick={this.props.handleSetIsLight}
            style={{
                background : this.props.isLight ? "rgb(43, 43, 43)" : "rgb(213, 213, 177)",
                color : this.props.isLight ? "white" : "black",
                fontSize : "30px"
            }}
            >
                {this.props.isLight ? "🌙" : "🌞"}
            </button>
        </div>
        <TimeList>
                {this.props.timeArr}
        </TimeList>
        </>   
        )
    }
}
export default App2;