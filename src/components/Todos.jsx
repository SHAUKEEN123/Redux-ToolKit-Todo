
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    
    const [editTodoId, setEditTodoId] = useState(null);
    const [editText, setEditText] = useState("");

    const handleUpdate = (id, currentText) => {
        const trimmedText = editText.trim();
    
        // Prevent saving if the text is empty or unchanged
        if (trimmedText === "" || trimmedText === currentText.trim()) {
            setEditTodoId(null); // Close edit mode if no change
            return; // Exit the function without dispatching
        }
    
        // Dispatch update only if valid changes are made
        dispatch(updateTodo({ id, newText: trimmedText }));
        setEditTodoId(null);
        setEditText("");
    };

    return (
        <>
            {/* <div>Todos</div> */}
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        {editTodoId === todo.id ? (
                            <>
                                <input 
                                    type="text" 
                                    placeholder='Edit Todo...'
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="ml-2 px-2 py-1 bg-gray-700 text-white rounded"
                                />
                                <button
                                    onClick={() => handleUpdate(todo.id,todo.text)}
                                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md ml-2"
                                >
                                    📁
                                </button>
                            </>
                        ) : (
                            <>
                                <div className='text-white'>{todo.text}</div>
                                <div className="flex gap-2"> {/* Flex container for buttons */}
                                    <button
                                        onClick={() => { setEditTodoId(todo.id); setEditText(todo.text); }}
                                        className="bg-white border-0 py-1 px-4 focus:outline-none hover:bg-white/70 rounded text-md"
                                    >
                                       ✏️
                                    </button>
                                    <button
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                        className="bg-white border-0 py-1 px-4 focus:outline-none hover:bg-white/70 rounded text-md"
                                    >
                                        ❌
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;