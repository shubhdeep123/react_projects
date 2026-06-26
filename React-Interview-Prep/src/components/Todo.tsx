import React, { useState } from "react";

interface TodoItem {
    task :string,
    id:number,
    completed:boolean
}

export function Todo () {

    const [todos,setTodos] = useState<TodoItem[]>([]);
    const [task,setTask] = useState<string>("");

    function addTask () {
        if (!task) return;

        setTodos((prev) => [...prev, {
            task: task,
            id: Date.now(),
            completed: false
        }])

        setTask("")
    }

    function handleComplete (id:number) {
        setTodos(prev => prev.map((todo)=>(todo.id === id ? {...todo, completed: true}:todo)))
    }

    return (
        <div>
            <div>
                <input type="text" value={task} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTask(e.target.value)}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div>
                <ul>
                    {todos.filter(todo => !todo.completed).map((todo)=>(
                        <li key={todo.id}>{todo.task}
                            <button onClick={() => handleComplete(todo.id)}>Completed</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}