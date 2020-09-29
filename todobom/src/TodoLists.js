import React from 'react';

function Todo({ todo, index, completeTodo, removeTodo}) {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            <div>
                <button className='changerButton' onClick={() => completeTodo(index)}>Complete</button>
                <button className='changerButton' onClick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    );
}

export default  Todo;