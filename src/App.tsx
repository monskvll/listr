import { useState, type SetStateAction } from "react";
import { Theme } from "@radix-ui/themes";

import Task from "./components/Task/Task";
import Header from "./components/Header/Header";
import Dialog from "./components/Dialog/Dialog";

import "./App.css";

type Task = {
	id: string;
	text: string;
	priority: "low" | "medium" | "high";
	color: string;
};

type TaskInput = {
	text: string;
	priority: "low" | "medium" | "high";
	color: string;
};

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [tasks, setTasks] = useState<Task[]>([]);
	const [editingTask, setEditingTask] = useState<Task | null>(null);

	const handleCreate = (task: TaskInput) => {
		setTasks((prev) => [...prev, { ...task, id: crypto.randomUUID() }]);
	};

	const handleUpdate = (task: Task) => {
		if (task.id) {
			setTasks((prev) =>
				prev.map((t) =>
					t.id === task.id ? { ...task, id: task.id } : t,
				),
			);
		}
	};

	const handleEdit = (task: SetStateAction<Task | null>) => {
		setEditingTask(task);
		setIsModalOpen(true);
	};

	const handleDelete = (id: string) => {
		setTasks((prev) => prev.filter((t) => t.id !== id));
	};

	return (
		<>
			<Theme>
				<Header
					setIsModalOpen={setIsModalOpen}
					setEditingTask={setEditingTask}
				/>
				<Dialog
					open={isModalOpen}
					onOpenChange={setIsModalOpen}
					onCreate={handleCreate}
					onUpdate={handleUpdate}
					task={editingTask}
					key={editingTask?.id ?? "new"}
				/>
				<ul>
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
			</Theme>
		</>
	);
}

export default App;
