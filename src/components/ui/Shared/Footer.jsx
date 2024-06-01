import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();
	const [selected, setSelected] = useState("");

	const navConfig = [
		{ title: "Users & Projects", path: "/users-projects" },
		{ title: "Directory", path: "/directory" },
		{ title: "Submit a Question", path: "/submit-question" },
		{ title: "Meet D Team", path: "/meet-d-team" },
		{ title: "Profile", path: "/profile" },
	];

	const handleButtonClick = (title, path) => {
		setSelected(title);
		navigate(path);
	};

	return (
		<footer
			className='absolute bottom-0 w-full bg-cover bg-center py-8 bg-top z-50'
			style={{ backgroundImage: `url(/footerShadow.png)` }}
		>
			<div className='container mx-auto flex justify-center space-x-8 z-[1000] min-h-[100px]'>
				{navConfig.map((item) => (
					<div
						key={item.title}
						className='relative flex flex-col items-center'
					>
						<button
							className={`bg-gray-800 text-white py-1 px-4 rounded-full hover:bg-gray-700 focus:bg-[#B573EE] ${
								selected === item.title ? "bg-gray-700" : ""
							}`}
							onClick={() =>
								handleButtonClick(item.title, item.path)
							}
						>
							{item.title}
						</button>
						{selected === item.title && (
							<div className='w-8 h-3 bg-[#B573EE] rounded-lg mt-2' />
						)}
					</div>
				))}
			</div>
		</footer>
	);
};

export default Footer;
