import React, {useMemo, useRef, useState} from "react";
import TinderCard from "react-tinder-card";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import {AnimatePresence, motion} from 'framer-motion';
import {MenuItem, TextField} from "@mui/material";

const projects = [
	{
		name: "Knitted Coat",
		photo: "/placeholders/img1.png", // replace with actual path
		details: "A beautifully knitted coat with vibrant colors.",
		members: ["Alice", "Bob", "Charlie"],
	},
	{
		name: "Another Project",
		photo: "/placeholders/img.png", // replace with actual path
		details: "Details about another project.",
		members: ["Dave", "Eve", "Frank"],
	},
	{
		name: "Knitted Coat",
		photo: "/placeholders/img1.png", // replace with actual path
		details: "A beautifully knitted coat with vibrant colors.",
		members: ["Alice", "Bob", "Charlie"],
	},
	{
		name: "Another Project",
		photo: "/placeholders/img.png", // replace with actual path
		details: "Details about another project.",
		members: ["Dave", "Eve", "Frank"],
	},
	{
		name: "Knitted Coat",
		photo: "/placeholders/img1.png", // replace with actual path
		details: "A beautifully knitted coat with vibrant colors.",
		members: ["Alice", "Bob", "Charlie"],
	},
	{
		name: "Another Project",
		photo: "/placeholders/img.png", // replace with actual path
		details: "Details about another project.",
		members: ["Dave", "Eve", "Frank"],
	},
];

const ExploreProjects = () => {
	const [currentIndex, setCurrentIndex] = useState(projects.length - 1);
	const [lastDirection, setLastDirection] = useState();
	const [expandedCardIndex, setExpandedCardIndex] = useState(null);
	const currentIndexRef = useRef(currentIndex);
	const [mainFilterText, setMainFilterText] = useState("Projects")
	const [mainFilter, setMainFilter] = useState([
		{ title: 'Projects'},
		{ title: 'People'} ,
	])
	const handleSwap = (title) => {
		if(title !== mainFilter[0].title){
			setMainFilter([mainFilter[1], mainFilter[0]]);
			setMainFilterText(title)
		}

	};
	const childRefs = useMemo(
		() =>
			Array(projects.length)
				.fill(0)
				.map(() => React.createRef()),
		[],
	);

	const updateCurrentIndex = (val) => {
		setCurrentIndex(val);
		currentIndexRef.current = val;
	};

	const canSwipe = currentIndex >= 0;

	const swiped = (direction, nameToDelete, index) => {
		setLastDirection(direction);
		updateCurrentIndex(index - 1);
	};

	const outOfFrame = (name, idx) => {
		console.log(
			`${name} (${idx}) left the screen!`,
			currentIndexRef.current,
		);
		currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
	};

	const swipe = async (dir) => {
		if (canSwipe && currentIndex < projects.length) {
			setExpandedCardIndex(null)
			await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
		}
	};

	const getCardStyle = (index) => {
		if (index === 0) return {}
		const variance = Math.random() < 0.5 ? -5 : 5; // Randomly choose -5 or 5 for variance
		const rotate = Math.floor(Math.random() * 10) - 5; // Randomly rotate between -5 and 5 degrees
		const translateX = Math.floor(Math.random() * 20) - 10; // Randomly translate between -10 and 10 pixels
		return {
			transform: `rotate(${rotate}deg) translateX(${translateX}px)`,
		};
	};

	return (
		<>
			<div className="flex items-end mb-4">
				<AnimatePresence initial={false}>
					{mainFilter.map((item, index) => (
						<motion.h2
							key={item.title}
							className={`relative flex flex-col items-center text-[#B573EE] cursor-pointer ${index === 0 ? "text-5xl mr-5" : "text-xl"}`}
							onClick={() => handleSwap(item.title)}
							initial={{opacity: 0, y: -20}}
							animate={{opacity: 1, y: 0}}
							exit={{opacity: 0, y: 20}}
							layout
						>
							{item.title}
						</motion.h2>
					))}
				</AnimatePresence>
				{mainFilterText === "People" &&
					<select className="ml-2 bg-transparent text-white border border-white">
						<option className="text-black" value="3d Design">3d Design For Car ad</option>
						<option className="text-black" value="School Project">School Project</option>
						<option className="text-black" value="New app system for cars">New app system for cars</option>
					</select>
				}
			</div>
			<div className='min-h-screen text-white flex flex-col items-center p-4 overflow-hidden'>

				<div className='w-full max-w-full relative'>
					{projects.map((project, index) => (
						<TinderCard
							ref={childRefs[index]}
							className='swipe absolute flex justify-center w-full h-full'
							key={index}
							onSwipe={(dir) => swiped(dir, project.name, index)}
							onCardLeftScreen={() => outOfFrame(project.name, index)}
							preventSwipe={["up", "down"]}
						>
							<div
								onClick={() => {
									if (expandedCardIndex) {
										setExpandedCardIndex(null)
									} else {
										setExpandedCardIndex(index)
									}
								}}
								style={{
									backgroundImage: `url(${expandedCardIndex === index ? "" : project.photo})`,
									backgroundColor: 'rgba(174,175,255,0.1)',
									backdropFilter: 'blur(10px)',
									...getCardStyle(index),
									zIndex: projects.length - index,
									transition: 'transform 0.5s ease, width 0.5s ease, height 0.5s ease',
									width: expandedCardIndex === index ? '1000px' : '400px',
									height: expandedCardIndex === index ? '550px' : '500px',
								}}
								className='rounded-lg bg-cover bg-center object-center fit-content shadow-lg p-6 flex flex-col justify-end'
							>
								{expandedCardIndex !== index && (
									<h3 className='text-2xl font-bold bg-black bg-opacity-20 rounded'>
										{project.name}
									</h3>
								)}
								{expandedCardIndex === index ? (
									<div className="grid grid-cols-2 h-full">
										<div className="flex flex-col p-6">
											<h3 className='text-2xl font-bold'>
												{project.name}
											</h3>
											<p className='mt-2 text-gray-300'>
												{project.details}
											</p>
											<div className='mt-4'>
												<h3 className='font-semibold'>Members</h3>
												<ul className='list-disc list-inside'>
													{project.members.map((member, index) => (
														<li key={index}>{member}</li>
													))}
												</ul>
											</div>
										</div>
										<img src={project.photo} alt={project.name}
											 className="h-full max-h-[550px] bg-cover bg-center object-center fit-content ml-2 rounded-lg"/>
									</div>
								) : (
									<p className='mt-2 text-gray-300 bg-black bg-opacity-20 rounded'>
										Click to see more...
									</p>
								)}
							</div>
						</TinderCard>
					))}
				</div>
				<div className='flex space-x-10 relative top-[300px] mt-4 z-50'>
					<button
						className='p-2 rounded-full flex justify-center items-center'
						style={{border: "2px solid red"}}
						onClick={() => swipe("left")}
					>
						<CloseIcon sx={{color: "red"}} fontSize="large"/>
					</button>
					<button
						className='p-2 rounded-full flex justify-center items-center'
						style={{border: "2px solid green"}}
						onClick={() => swipe("right")}
					>
						<FavoriteIcon sx={{color: "green"}} fontSize="large"/>
					</button>
				</div>
			</div>
		</>
	);
};

export default ExploreProjects;
