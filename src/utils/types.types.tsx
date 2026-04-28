export type TaskData = {
	id: string;
	text: string;
	level: "low" | "medium" | "high";
	color: string;
	index: number;
};

export type TaskProps = {
	task: TaskData;
	index: number;
	handleEdit: (task: Omit<TaskData, "index">) => void;
	setIsConfModalOpen: (open: boolean) => void;
	setActiveTask: (task: TaskData | null) => void;
};

export type HeaderProps = {
	setActiveTask: (task: TaskData | null) => void;
	setIsModalOpen: (open: boolean) => void;
	tasks: TaskData[];
	setTasks: (tasks: TaskData[]) => void;
};

export type TaskListProps = {
	tasks: TaskData[];
	handleEdit: (task: Omit<TaskData, "index">) => void;
	setIsConfModalOpen: (open: boolean) => void;
	setActiveTask: (task: TaskData | null) => void;
};

export type TaskModalProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onCreate: (task: Omit<TaskData, "id" | "index">) => void;
	onUpdate: (task: TaskData) => void;
	task: TaskData | null;
};

export type ConfirmationModalProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	handleDelete: (id: string) => void;
	task: TaskData | null;
};
