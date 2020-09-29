import React, {useState} from 'react';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap';
import 'reactstrap';
import TodoForm from "./ToDoForm";
import Todo from "./TodoLists";
import './style.css'






function App() {
    const [todos, setTodos] = React.useState([]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        if(newTodos[index].isCompleted)
            newTodos[index].isCompleted=false
        else
            newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}

                AddSomething <TodoForm addTodo={addTodo} />
            </div>
        </div>
    );
}


/*function App() {
    const [state, setState] = useState([]);
    function onClick(data){
        setState(state => [...state, data]);
    };
    function onRemove(data){
    console.log(data);
    }

  return (
    <div className="container">
        <TodoListComponent thing={state} remove={onRemove}/>
        <AddComponent onClick={onClick}/>
    </div>
  );
}*/

export default App;
