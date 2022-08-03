import React, { useState } from "react";
import {addItem} from "../actions/listAction"
import {useDispatch} from "react-redux"


function TodoForm(props){

    const [text, setText] = useState(""); //setando o estado e colocando o valor dele vazio
    const dispatch = useDispatch()

    function handleChange(event) {
        let t = event.target.value; //pegando o valor do input com o evento onchange e atribuindo a variavel t
        setText(t); //setando o valor da variavel t 
        
    }
    function addItemEvent(event) {
        event.preventDefault()
        if(text){
           dispatch(addItem(text))
            setText("");
            props.onHideModal()
        }
    }

    return(
        <form>
        <input  onChange={handleChange} type="text" value={text}></input>
        <button className="addSubmit" onClick={addItemEvent}>Add</button>
     </form>   
    )
}

export default TodoForm;