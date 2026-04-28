import { useState, type SetStateAction } from "react";
import { Theme } from "@radix-ui/themes";

import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import TaskModal from "./components/TaskModal/TaskModal";
import Header from "./components/Header/Header";
import type { TaskData } from "./utils/types.types";
import TaskList from "./components/TaskList/TaskList";

import "./App.css";

type TaskInput = {
	text: string;
	level: "low" | "medium" | "high";
	color: string;
};

const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isConfModalOpen, setIsConfModalOpen] = useState(false);
	const [tasks, setTasks] = useState<TaskData[]>([]);
	const [activeTask, setActiveTask] = useState<TaskData | null>(null);

	const handleCreate = (task: TaskInput) => {
		setTasks((prev) => [
			...prev,
			{ ...task, id: crypto.randomUUID(), index: prev.length },
		]);
	};

	const handleUpdate = (task: TaskData) => {
		if (task.id) {
			setTasks((prev) =>
				prev.map((t) =>
					t.id === task.id ? { ...task, id: task.id } : t,
				),
			);
		}
	};

	const handleEdit = (task: SetStateAction<TaskData | null>) => {
		setActiveTask(task);
		setIsModalOpen(true);
	};

	const handleDelete = (id: string) => {
		setTasks((prev) => prev.filter((t) => t.id !== id));
	};

	return (
		<>
			<Theme>
				<TaskModal
					open={isModalOpen}
					onOpenChange={setIsModalOpen}
					onCreate={handleCreate}
					onUpdate={handleUpdate}
					task={activeTask}
					key={activeTask?.id ?? "new"}
				/>
				<ConfirmationModal
					open={isConfModalOpen}
					onOpenChange={setIsConfModalOpen}
					handleDelete={handleDelete}
					task={activeTask}
				/>
				<Header
					setIsModalOpen={setIsModalOpen}
					setActiveTask={setActiveTask}
					setTasks={setTasks}
					tasks={tasks}
				/>
				<TaskList
					tasks={tasks}
					handleEdit={handleEdit}
					setActiveTask={setActiveTask}
					setIsConfModalOpen={setIsConfModalOpen}
				/>
			</Theme>
		</>
	);
};

export default App;
