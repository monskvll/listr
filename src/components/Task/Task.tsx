import { useSortable } from "@dnd-kit/react/sortable";

import "./Task.css";

export default function Task({
	id,
	index,
	level,
	text,
	color,
	handleEdit,
	handleDelete,
}) {
	const { ref } = useSortable({ id, index });
	return (
		<li
			ref={ref}
			key={id}
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
					onClick={() => handleDelete(id)}
				>
					🗑
				</button>
			</div>
		</li>
	);
}
