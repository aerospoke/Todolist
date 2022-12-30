import React from "react";
import ItemContainer from "../styles/itemContainer";

function TodoItem(props){
    return(
        <ItemContainer>
        <li>
            <span>c</span>
            <p>{props.text}</p>
            <span>x</span>
        </li>
        </ItemContainer>
    
    )
}
export default TodoItem;