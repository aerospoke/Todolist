import React from "react";
import ListStyle from "../styles/TodoList";

function TodoList(props){
    return(
        <ListStyle>
            <ul>
                {props.children}
            </ul>
        </ListStyle>
    )
}
export default TodoList;