import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

import type { TaskModalProps } from "../../utils/types.types";

import "./TaskModal.css";

const colorChoices = ["honeydew", "frostedBlue", "steelBlue"];

const TaskModal = ({
	open,
	onOpenChange,
	onCreate,
	onUpdate,
	task,
}: TaskModalProps) => {
	const [text, setText] = useState(task ? task?.text : "");
	const [level, setLevel] = useState<"low" | "medium" | "high">(
		task?.level ?? "low",
	);
	const [color, setColor] = useState(task?.color ?? colorChoices[0]);

	const handleSubmit = (e: React.SubmitEvent) => {
		e.preventDefault();

		if (task?.id) {
			onUpdate({
				...task,
				text,
				level,
				color,
			});
		} else {
			setText("");
			onCreate({
				text,
				level,
				color,
			});
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
								onChange={(e) =>
									setLevel(
										e.target.value as
											| "low"
											| "medium"
											| "high",
									)
								}
								className="dialogSelect"
							>
								<option value="high">1</option>
								<option value="medium">2</option>
								<option value="low">3</option>
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
};

export default TaskModal;
