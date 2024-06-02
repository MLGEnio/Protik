import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();
	const [selected, setSelected] = useState("");

	const navConfig = [
		{ title: "Users & Projects", path: "/users-projects" },
		{ title: "Explore Projects", path: "/explore-projects" },
		{ title: "Dashboard", path: "/dashboard" },
		{ title: "Profile", path: "/profile" },
	];
	console.log(selected)
	const handleButtonClick = (title, path) => {
		setSelected(title);
		navigate(path);
	};

	return (
		<footer
			className='absolute bottom-0 w-full bg-cover py-6 bg-top z-50'
			style={{ backgroundImage: `url(/footerShadow.png)` }}
		>
			<div className='container mx-auto flex flex-wrap justify-center realtive top-14 space-x-8 z-[1000] min-h-[100px]'>
				{navConfig.map((item) => (
					<div
						key={item.title}
						className='relative flex flex-col items-center'
					>
						<button
							className={` text-md text-white py-1 px-6 rounded-full  ${
								selected == item.title ? "bg-[#B573EE]" : "bg-gray-800"
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
