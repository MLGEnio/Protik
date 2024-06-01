import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';

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
	// Add more projects here...
];

const ExploreProjects = () => {
	const [currentIndex, setCurrentIndex] = useState(projects.length - 1);
	const [lastDirection, setLastDirection] = useState();
	const currentIndexRef = useRef(currentIndex);

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
		<div className='min-h-screen text-white flex flex-col items-center p-4 overflow-hidden'>
			<div className='w-full max-w-2xl relative'>
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
							style={{
								backgroundImage: `url(${project.photo})`,
								...getCardStyle(index),
								zIndex: projects.length - index,
							}}
							className='bg-cover bg-center rounded-lg shadow-lg p-6 h-[550px] w-[400px] flex flex-col justify-end'
						>
							<h3 className='text-2xl font-bold'>
								{project.name}
							</h3>

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
	);
};

export default ExploreProjects;
