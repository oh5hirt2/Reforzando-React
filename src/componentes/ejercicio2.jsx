import React, { useState } from 'react';

function Tareas() {
    const [tasks, setTasks] = useState([
        { name: "Hacer la comida", completed: false },
        { name: "Lavar los platos", completed: false },
        { name: "Limpiar la casa", completed: false },
        { name: "Limpiar el carro", completed: false }
    ]);

    const handleCompleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = true;
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = true;
        updatedTasks[index].deleted = true;
        setTasks(updatedTasks);
    };


    return (
        <table>
            <tbody>
                <tr>
                    <th>Tareas:</th>
                    <th>Estado:</th>
                </tr>
                 {tasks.map((task, index) => (
                    <tr key={index}>
                        <td>{task.name}</td>
                        <td>
                            {!task.completed && !task.deleted ? (
                                <>
                                    <button onClick={() => handleDeleteTask(index)} style={{ color: "red" }}>X</button>
                                    <button onClick={() => handleCompleteTask(index)}>O</button>
                                </>
                            ) : (
                                <span style={{ color: "green", textDecoration: "line-through" }}>{task.deleted ? "Eliminado" : "Completado"}</span>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tareas;
