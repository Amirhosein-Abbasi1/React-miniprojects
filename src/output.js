import React , {useEffect, useState}  from "react";
import './index.css';
import App1 from "./hello";
import App2 from "./timer";
import TimeList from "./timeList";

const App =()=>{
    const [isLight , SetIsLight] = useState(false);
    const [title] = useState("Stopwatch");
    const [timeArr] = useState(["00 : 07 : 35" , "00 : 24 : 10" , "00 : 32 : 41"])

    //I use this useEffect to introduction it 
    useEffect(()=>{
        console.log("useEffect");

        return ()=>{

        }
    },[isLight])
    

    const handleSetIsLight =()=>{
        SetIsLight(!isLight)
    }

    return(
        <div className="main" style={{background:isLight ? "rgb(226, 226, 226)" : "rgb(43, 43, 43)"}}>
            <App1 title={title}/>
            <App2 isLight={isLight} handleSetIsLight={handleSetIsLight}/>
            <TimeList>
                {timeArr}
            </TimeList>
        </div>
    )
}

export default App;