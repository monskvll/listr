import "./Header.css";

const Header = ({ setEditingTask, setIsModalOpen }) => {
	return (
		<div className="headerWrapper">
			<h1 className="headText">listr</h1>
			<div className="buttonsWrapper">
				<button
					onClick={() => {
						setEditingTask(null);
						setIsModalOpen(true);
					}}
				>
					+
				</button>
				<button>Import</button>
				<button>Export</button>
			</div>
		</div>
	);
};

export default Header;
