import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import "../Styles/TodoList.css";

function TodoList() {
	const [state, setstate] = useState([
		{ id: uuid(), task: "Giving water to plants" },
		{ id: uuid(), task: "Grocery shopping" },
	]);
	const [newTodo, setnewTodo] = useState({});

	console.log("state", state);

	const addTodo = (todo) => {
		setstate((prev) => [...prev, { id: uuid(), task: todo.task }]);
	};

	const deleteTodo = (todo) => {
		setstate(state.filter((item) => item.id !== todo.id));
	};

	const handleChange = (e) => {
		setnewTodo({ id: uuid(), task: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(newTodo);
		setnewTodo({ task: "" });
	};

	return (
		<>
			<h1>Todo List</h1>
			{state.map((todo) => (
				<Todo todo={todo} deleteTodo={deleteTodo} />
			))}

			<form onSubmit={(e) => handleSubmit(e)}>
				<label className="label" htmlFor="NewTask">
					New Todo
				</label>
				<input
					className="input"
					type="text"
					id="NewTask"
					name="task"
					placeholder="Add todo"
					onChange={(e) => handleChange(e)}
				/>
				<input
					className="input"
					type="text"
					id="Name"
					name="task"
					placeholder="Add todo"
					onChange={(e) => handleChange(e)}
				/>
				<button type="submit">Add</button>
			</form>
		</>
	);
}

export default TodoList;
