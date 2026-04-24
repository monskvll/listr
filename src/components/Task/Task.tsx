import "./Task.css";
import { useSortable } from "@dnd-kit/react/sortable";

import { useRef, useState } from "react";

export default function Task({
	id,
	index,
	level,
	text,
	color,
	handleEdit,
	handleDelete,
}) {
	const [element, setElement] = useState<Element | null>(null);
	const handleRef = useRef<HTMLButtonElement | null>(null);

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
					onClick={() => handleDelete(id)}
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
}
