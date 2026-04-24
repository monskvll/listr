import { useSortable } from "@dnd-kit/react/sortable";

import Task from "../Task/Task";

const TaskList = ({ tasks, handleEdit, handleDelete }) => {
	return (
		<ul className="taskList">
			{tasks.map((task, index: number) => {
				return (
					<Task
						{...task}
						index={index}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				);
			})}
		</ul>
	);
};

export default TaskList;
