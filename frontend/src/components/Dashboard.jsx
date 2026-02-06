import { useEffect, useState, useCallback } from "react";
import { request } from "./services/api";
import "./Dashboard.css";

function Dashboard() {
    const [taskInput, setTaskInput] = useState("");
    const [list, setList] = useState([]);

    const loadTasks = useCallback(async () => {
        try {
            const data = await request("/tasks", "GET");
            setList(Array.isArray(data) ? data : []); 
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        }
    }, []);

    const addTask = async () => {
        if (!taskInput.trim()) return;
        
        try {
            await request("/tasks", "POST", { title: taskInput });
            setTaskInput("");
            await loadTasks();
        } catch (error) {
            alert("Could not add task.",error);
        }
    };

    const removeTask = async (id) => {
        try {
            await request(`/tasks/${id}`, "DELETE");
            setList(prev => prev.filter(t => t.id !== id));
        } catch (error) {
            console.error("Delete failed:", error);
        }
    };

    useEffect(() => {
        loadTasks();
    }, [loadTasks]);

    return (
        <div className="container">
            <header>
                <h1>My Tasks</h1>
            </header>

            <div className="input-group"> 
                <input 
                    value={taskInput} 
                    onChange={e => setTaskInput(e.target.value)} 
                    onKeyDown={e => e.key === 'Enter' && addTask()}
                    placeholder="What needs to be done?" 
                />
                <button className="add-btn" onClick={addTask} disabled={!taskInput.trim()}>Add</button>
            </div>

            <div className="task-list">
                {list.length > 0 ? (
                    list.map(t => (
                        <div key={t.id} className="task">
                            <span>{t.title}</span>
                            <button className="delete-btn" onClick={() => removeTask(t.id)}>✕</button>
                        </div>
                    ))
                ) : (
                    <p className="empty-state">No tasks yet. Enjoy your day!</p>
                )}
            </div>
        </div>
    );
}

export default Dashboard;