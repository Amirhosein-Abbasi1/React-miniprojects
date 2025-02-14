import React , {useState}  from "react";
//import {createRoot} from "react-dom/client";
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
        // <div>
        //     <App1 title={this.state.title}/>
        //     <App2/>
        // </div>
//         )
//     }
// }

const App =()=>{
    const [title , setTitle] = useState("Stopwatch");

    const handleSetTitle =()=>{
        setTitle("you changed it");
    }
     return(
       <div>
        <App1 title={title}/>
        <App2 handleSetTitle={handleSetTitle}/>
       </div>
     )
}

export default App;