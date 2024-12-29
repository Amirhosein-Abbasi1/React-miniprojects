import React from "react";
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
    createRoot(document.getElementById("root")).render(elem);
}
setInterval(
    ()=>{time();}, 1000
)