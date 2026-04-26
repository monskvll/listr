import "./Header.css";

/* Reorganize functions */
function exportData(data) {
	const json = JSON.stringify(data, null, 2);
	const blob = new Blob([json], { type: "application/json" });
	const url = URL.createObjectURL(blob);

	const a = document.createElement("a");
	a.href = url;
	a.download = "listr.json";
	a.click();

	URL.revokeObjectURL(url);
}

function importData(event, setData) {
	const file = event.target.files[0];

	if (!file) return;

	file.text().then((text: string) => {
		try {
			const data = JSON.parse(text);
			setData(data);
		} catch (error) {
			alert("Invalid file imported!");
			console.error("Invalid JSON file: ", error);
		}
	});
}

const Header = ({ setEditingTask, setIsModalOpen, tasks, setTasks }) => {
	return (
		<div className="headerWrapper">
			<h1 className="headText">listr</h1>
			<div className="buttonsWrapper">
				<button
					className="addButton"
					onClick={() => {
						setEditingTask(null);
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
