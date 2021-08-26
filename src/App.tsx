import React, {useState} from 'react';
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";
import {IToDo} from "./ToDoModel";

const App: React.FC = () => {
    const [todos, setTodos] = useState<IToDo[]>([]);

    const todoAddHandler = (text: string) => {
        setTodos(prevTodos => [
            ...prevTodos,
            { id: Math.random().toString(), text: text }
        ]);
    };

    const toDoDeleteHandler = (toDoId: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== toDoId);
        });
    };

    return (
    <div className="App">
        <NewToDo onAddTodo={todoAddHandler}/>
        <ToDoList items={todos} onDeleteTodo={toDoDeleteHandler}/>
    </div>
  );
}

export default App;
