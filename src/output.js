import React , {useEffect, useState}  from "react";
import './index.css';
import App1 from "./hello";
import App2 from "./timer";
import { firstContext } from "./context";


const App =()=>{
    const [isLight , SetIsLight] = useState(false);
    const [title] = useState("Stopwatch");
    const [timeArr , setTimeArr] = useState([]);

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
        <firstContext.Provider value={{
            timeArr : timeArr,
            setTimeArr : setTimeArr
        }}>
        <div className="main" style={{background:isLight ? "rgb(226, 226, 226)" : "rgb(43, 43, 43)"}}>
            <App1 title={title}/>
            <App2 
             isLight={isLight} 
             handleSetIsLight={handleSetIsLight}
             
             />
        </div>
        </firstContext.Provider>
    )
}

export default App;