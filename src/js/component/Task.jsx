import React from "react";
import propTypes from "prop-types";

const Tasks = ({ tasks, taskDuplicate, Duplicated, removeTask }) => {
	return tasks.map(task => {
		if (taskDuplicate && Duplicated.toLowerCase() === task.toLowerCase()) {
			return (
				<li key={Duplicated} className={"task alert"}>
					{task}
					<span
						className="trash"
						onClick={function Remove() {
							removeTask(task);
						}}>
						<i className="far fa-trash-alt"></i>
					</span>
				</li>
			);
		} else {
			return (
				<li key={task} className={"task"}>
					{task}
					<span
						className="trash"
						onClick={function Remove() {
							removeTask(task);
						}}>
						<i className="far fa-trash-alt"></i>
					</span>
				</li>
			);
		}
	});
};

Tasks.propTypes = {
	tasks: propTypes.array,
	removeTask: propTypes.func,
	taskDuplicate: propTypes.bool,
	Duplicated: propTypes.string
};
export default Tasks;