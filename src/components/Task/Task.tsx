import "./Task.css";

export default function Task({
	id,
	level,
	text,
	color,
	handleEdit,
	handleDelete,
}) {
	return (
		<li
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
