import Item from "./Item";

const timeList =(props)=>{
    return(
        <div className="main-timeList">
            {props.children.map((c)=>(
               <Item key={Math.random}>
                {c}
               </Item> 
            ))}
            
        </div>
    )

}


export default timeList;