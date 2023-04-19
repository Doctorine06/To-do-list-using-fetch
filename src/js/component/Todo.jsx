import React, { useState } from "react";
import Tasks from "./Tasks.jsx";
import Footer from "./footer.jsx";

const Todo = () => {
	const [tasks, setTask] = useState([]);

	const [Task, setNewTask] = useState(".");

	const [taskDuplicate, setTaskDuplicated] = useState(false);

	const [Duplicated, setDuplicated] = useState("");
	
	useEffect(()=>{
		fetch("https://assets.breathco.de/apis/fake/todos/user/Doctorine06")
		.then((response)=>{
			return response.json() ;
		})
		.then((data) => {
			setTask(data) ;
		});
	},[]) ;

	useEffect(() => {
		fetch("https://assets.breathco.de/apis/fake/todos/user/Doctorine06", {
			method: "PUT",
			body: JSON.stringify(tasks),
			headers: {"Content-type": application/json },
		})
			.then((response) => {
				return response.json();
			})
			.then((response) => console.log(response))
			.catch ((error) => {
				console.log(error)
			}) ;
	}, [tasks]) ;
	


	function Change(event) {
		setNewTask(event.target.value);
	}

	function Enter(event) {
		if (event.key === "Enter") {
			let value = event.target.value;
			let tasksLowerCase = tasks.map(task => task.toLowerCase());

			if (tasksLowerCase.includes(value.toLowerCase())) {
				setTaskDuplicated(true);
				setDuplicated(value);
			} else {
				if (value === "") {
					alert("task cant be empty");
				} else {
					setTask([...tasks, Task]);
				}
				setTaskDuplicated(false);
			}

			event.target.value = "";
		}
	}

	function removeTask(taskToRemove) {
		setTaks(tasks.filter(task => task !== taskToRemove));
	}

	return (
		<div className="diary">
			<h1 className="title-list">TO DO</h1>
			<input
				className="New-Task"
				type="text"
				placeholder="What do you need to do?"
				onChange={Change}
				onKeyPress={Enter}
			/>
			<ul className="Task-list">
				<Tasks
					tasks={tasks}
					removeTask={removeTask}
					taskDuplicate={taskDuplicate}
					Task={Task}
					Duplicated={Duplicated}
				/>
				{/* {tasks.map((it, i) => {
					return <Item task={it} key={i} />;
				})} */}
				<Footer tasks={tasks} />
			</ul>
		</div>
	);
};

export default Todo;