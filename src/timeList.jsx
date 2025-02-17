import Item from "./Item";

const timeList =(props)=>{
    return(
        <div className="main-timeList">
            {props.children.map((c)=>(
               <Item key={Item}>
                {c}
               </Item> 
            ))}
            
        </div>
    )

}


export default timeList;