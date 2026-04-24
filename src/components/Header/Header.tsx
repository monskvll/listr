import "./Header.css";

const Header = ({ setEditingTask, setIsModalOpen }) => {
	return (
		<div className="headerWrapper">
			<h1>listr</h1>
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
	);
};

export default Header;
