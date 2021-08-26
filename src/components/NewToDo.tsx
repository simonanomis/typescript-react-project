import React, { useRef } from "react";
import "./NewTodo.css";

type NewToDoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = props => {
    const textInputReference = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputReference.current!.value;
        console.log(enteredText);
        props.onAddTodo(enteredText);
    };
    return (
        <form onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">ToDo text</label>
                <input type="text" id="todo-text" ref={textInputReference}/>
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
};

export default NewToDo;