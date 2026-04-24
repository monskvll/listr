import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

import "./Dialog.css";

export default function AddTaskModal({
	open,
	onOpenChange,
	onCreate,
	onUpdate,
	task,
}) {
	const [text, setText] = useState(task?.text ?? "");
	const [priority, setPriority] = useState(task?.priority ?? "low");
	const [color, setColor] = useState(task?.color ?? "white");

	console.log("task", task);

	const handleSubmit = (e: React.SubmitEvent) => {
		e.preventDefault();

		const data = {
			...task,
			text,
			priority,
			color,
		};

		if (task?.id) {
			console.log("update");
			onUpdate(data);
		} else {
			console.log("create");
			onCreate(data);
		}

		onOpenChange(false);
	};

	return (
		<Dialog.Root
			open={open}
			onOpenChange={onOpenChange}
		>
			<Dialog.Portal>
				<Dialog.Overlay className="dialogOverlay" />

				<Dialog.Content className="dialogContent">
					<Dialog.Title>
						{task ? "Edit Task" : "Add Task"}
					</Dialog.Title>

					<form
						onSubmit={handleSubmit}
						className="dialogForm"
					>
						<input
							value={text}
							onChange={(e) => setText(e.target.value)}
							placeholder="Task..."
							className="dialogInput"
						/>

						<select
							value={priority}
							onChange={(e) => setPriority(e.target.value)}
							className="dialogSelect"
						>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
						</select>

						<input
							type="color"
							id="color"
							name="color"
							value={color}
							onChange={(e) => setColor(e.target.value)}
							className="dialogColors"
						/>

						{/* <div className="flex gap-2">
							{["blue", "green", "red"].map((c) => (
								<button
									key={c}
									type="button"
									onClick={() => setColor(c)}
									style={{ backgroundColor: c }}
									className={`w-20 h-20 rounded-full ${
										color === c ? "ring-2 ring-black" : ""
									}`}
								/>
							))}
						</div> */}

						<div className="dialogActions">
							<Dialog.Close asChild>
								<button type="button">Cancel</button>
							</Dialog.Close>

							<button type="submit">
								{task ? "Update" : "Create"}
							</button>
						</div>
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
