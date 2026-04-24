import "./Header.css";

const Header = ({ setEditingTask, setIsModalOpen }) => {
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
				<button disabled>Import</button>
				<button disabled>Export</button>
			</div>
		</div>
	);
};

export default Header;
