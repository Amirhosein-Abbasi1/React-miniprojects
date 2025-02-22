import { useContext } from "react";
import { firstContext } from "./context";

const Item =(props)=>{
    const context = useContext(firstContext);
    return(
        <div style={{color:context}}>
            {props.children}
        </div>
    )
}


export default Item;