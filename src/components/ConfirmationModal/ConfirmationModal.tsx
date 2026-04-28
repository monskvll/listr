import * as Dialog from "@radix-ui/react-dialog";

import type { ConfirmationModalProps } from "../../utils/types.types";

import "./ConfirmationModal.css";

const ConfirmationModal = ({
	open,
	onOpenChange,
	handleDelete,
	task,
}: ConfirmationModalProps) => {
	if (!task) return null;

	const handleSubmit = (e: React.SubmitEvent) => {
		e.preventDefault();
		handleDelete(task.id);
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
					<Dialog.Title>{"Delete Task"}</Dialog.Title>
					<form
						onSubmit={handleSubmit}
						className="dialogForm"
					>
						<p>Are you sure you want to delete this task?</p>
						<div className="dialogActions">
							<button type="submit">
								<p>Yes</p>
							</button>
							<Dialog.Close asChild>
								<button type="button">No</button>
							</Dialog.Close>
						</div>
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export default ConfirmationModal;
