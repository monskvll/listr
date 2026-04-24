import "./Task.css";

export default function Task({
	id,
	priority,
	text,
	color,
	handleEdit,
	handleDelete,
}) {
	return (
		<li
			key={id}
			className="task"
			style={{ backgroundColor: color }}
		>
			<div>{id}</div>
			<div>{priority}</div>
			<p>{text}</p>
			<button onClick={() => handleEdit({ id, priority, text, color })}>
				Edit
			</button>
			<button onClick={() => handleDelete(id)}>Delete</button>
		</li>
	);
}
