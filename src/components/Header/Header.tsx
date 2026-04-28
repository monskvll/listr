import { exportData, importData } from "../../utils/utils";

import type { HeaderProps } from "../../utils/types.types";

import "./Header.css";

const Header = ({
	setActiveTask,
	setIsModalOpen,
	tasks,
	setTasks,
}: HeaderProps) => {
	return (
		<div className="headerWrapper">
			<h1 className="headText">listr</h1>
			<div className="buttonsWrapper">
				<button
					className="addButton"
					onClick={() => {
						setActiveTask(null);
						setIsModalOpen(true);
					}}
				>
					+
				</button>
				<input
					type="file"
					accept=".json"
					onChange={(e) => importData(e, setTasks)}
					style={{ display: "none" }}
					id="importFile"
				/>

				<button
					onClick={() =>
						document.getElementById("importFile")?.click()
					}
				>
					Import
				</button>
				<button onClick={() => exportData(tasks)}>Export</button>
			</div>
		</div>
	);
};

export default Header;
