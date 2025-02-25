import { useContext } from "react";
import Item from "./Item";
import { firstContext } from "./context";

const timeList =()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const context = useContext(firstContext);

    const handleDeleteItem=(e)=>{
        context.setTimeArr(context.timeArr.filter(t=>t =! e.target.innerHTML));
    }
    return(
        <div className="main-timeList"  onClick={handleDeleteItem}>
            {context.timeArr.map((c)=>(
               <Item key={Math.random()}>
                {c}
               </Item> 
            ))}
            
        </div>
    )

}


export default timeList;