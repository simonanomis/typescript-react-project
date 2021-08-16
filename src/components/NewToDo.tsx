import React, { useRef } from "react";

const NewToDo: React.FC = () => {
    const textInputReference = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputReference.current!.value;
        console.log(enteredText);
    };
    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">ToDo text</label>
                <input type="text" id="todo-text" ref={textInputReference}/>
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
};

export default NewToDo;