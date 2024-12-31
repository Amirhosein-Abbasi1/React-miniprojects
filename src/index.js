import React  from "react";
import {createRoot} from "react-dom/client";

const time = () =>{
    const elem = (
    <div>
        <h1>
            what time is it?
        </h1>
        <h2>
            time is : {new Date().toLocaleTimeString()}
        </h2>
    </div>
    )
    //createRoot(document.getElementById("root")).render(elem);
}
setInterval(
    ()=>{time();}, 1000
)



//Component
class App1 extends React.Component{
    render(){
        return(
            <div>
            <h1>
                what time is it?
            </h1>
        </div>
        )
    }
}
class App2 extends React.Component{
    render(){
        return(
            <div>
            <h2>
                time is : {new Date().toLocaleTimeString()}
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
const timer = () =>{
    createRoot(document.getElementById("root")).render(<App/>);
}
setInterval(()=> {
    timer();}, 1000
)