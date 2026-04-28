import type { TaskListProps } from "../../utils/types.types";

import Task from "../Task/Task";

const TaskList = ({
	tasks,
	handleEdit,
	setIsConfModalOpen,
	setActiveTask,
}: TaskListProps) => {
	return (
		<ul className="taskList">
			{tasks.map((task, index: number) => {
				return (
					<Task
						index={index}
						task={task}
						handleEdit={handleEdit}
						setIsConfModalOpen={setIsConfModalOpen}
						setActiveTask={setActiveTask}
					/>
				);
			})}
		</ul>
	);
};

export default TaskList;
