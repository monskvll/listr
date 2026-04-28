import { useRef, useState } from "react";
import { useSortable } from "@dnd-kit/react/sortable";

import type { TaskProps } from "../../utils/types.types";

import "./Task.css";

const Task = ({
	task,
	index,
	handleEdit,
	setIsConfModalOpen,
	setActiveTask,
}: TaskProps) => {
	const [element, setElement] = useState<Element | null>(null);
	const handleRef = useRef<HTMLButtonElement | null>(null);

	const { id, level, text, color } = task;

	useSortable({
		id,
		index,
		element,
		handle: handleRef,
	});

	return (
		<li
			key={id}
			ref={setElement}
			className={`task task-level-${level} ${color}`}
		>
			<p className="textContent">{text}</p>
			<div className="buttonsWrapper">
				<button
					className="taskButton"
					onClick={() => handleEdit({ id, level, text, color })}
				>
					✎
				</button>
				<button
					className="taskButton"
					onClick={() => {
						setActiveTask(task);
						setIsConfModalOpen(true);
					}}
				>
					🗑
				</button>
				<button
					className="taskButton"
					ref={handleRef}
				>
					⇵
				</button>
			</div>
		</li>
	);
};

export default Task;
