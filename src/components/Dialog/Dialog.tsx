import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

import "./Dialog.css";

const colorChoices = ["honeydew", "frostedBlue", "steelBlue"];

export default function AddTaskModal({
	open,
	onOpenChange,
	onCreate,
	onUpdate,
	task,
}) {
	const [text, setText] = useState(task?.text ?? "");
	const [level, setLevel] = useState(task?.level ?? "one");
	const [color, setColor] = useState(task?.color ?? colorChoices[0]);

	const handleSubmit = (e: React.SubmitEvent) => {
		e.preventDefault();

		const data = {
			...task,
			text,
			level,
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
						<div>
							<p>Content</p>
							<input
								value={text}
								onChange={(e) => setText(e.target.value)}
								placeholder="Task..."
								className="dialogInput"
							/>
						</div>
						<div>
							<p>Level</p>
							<select
								value={level}
								onChange={(e) => setLevel(e.target.value)}
								className="dialogSelect"
							>
								<option value="one">1</option>
								<option value="two">2</option>
								<option value="three">3</option>
							</select>
						</div>
						<div>
							<p>Color</p>
							<div className="dialogColorsWrapper">
								{colorChoices.map((color) => (
									<button
										key={color}
										type="button"
										onClick={() => setColor(color)}
										className={`dialogColor ${color}`}
									/>
								))}
							</div>
						</div>
						<div className="dialogActions">
							<Dialog.Close asChild>
								<button type="button">Cancel</button>
							</Dialog.Close>

							<button
								type="submit"
								disabled={!text}
							>
								{task ? "Update" : "Create"}
							</button>
						</div>
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
