import Task from "../Task/Task";

const TaskList = ({ tasks, handleEdit, handleDelete }) => {
	return (
		<ul className="taskList">
			{tasks.map((item) => {
				console.log(item);
				return (
					<Task
						{...item}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				);
			})}
		</ul>
	);
};

export default TaskList;
