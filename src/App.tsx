import React from 'react';
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";

const App: React.FC = () => {
    const todos = [{id: 't1', text: 'Finish the course'}];

    return (
    <div className="App">
        <NewToDo/>
        <ToDoList items={todos}/>
    </div>
  );
}

export default App;
