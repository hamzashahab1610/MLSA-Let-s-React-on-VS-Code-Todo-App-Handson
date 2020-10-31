import React from "react";
import "../Styles/Todo.css";

function Todo({ todo, deleteTodo }) {
	const handleDelete = () => {
		deleteTodo(todo);
	};
	return (
		<div className="container">
			<p>{todo.task}</p>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
}

export default Todo;
