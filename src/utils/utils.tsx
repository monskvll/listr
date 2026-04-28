export function exportData(data) {
	const json = JSON.stringify(data, null, 2);
	const blob = new Blob([json], { type: "application/json" });
	const url = URL.createObjectURL(blob);

	const a = document.createElement("a");
	a.href = url;
	a.download = "listr.json";
	a.click();

	URL.revokeObjectURL(url);
}

export function importData(event, setData) {
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
