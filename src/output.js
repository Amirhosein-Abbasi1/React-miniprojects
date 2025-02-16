import React , {useState}  from "react";
import './index.css';
import App1 from "./hello";
import App2 from "./timer";

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//            title : "Stopwatch"
//         }
//     }
//     render(){
//         return(
//         <div>
//             <App1 title={this.state.title}/>
//             <App2/>
//         </div>
//         )
//     }
// }

const App =()=>{
    const [isLight , SetIsLight] = useState(false);
    const [title] = useState("Stopwatch");

    const handleSetIsLight =()=>{
        SetIsLight(!isLight)
    }

    return(
        <div className="main" style={{background:isLight ? "rgb(226, 226, 226)" : "rgb(43, 43, 43)"}}>
            <App1 title={title}/>
            <App2 isLight={isLight} handleSetIsLight={handleSetIsLight}/>
        </div>
    )
}

export default App;