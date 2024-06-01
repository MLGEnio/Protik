import { useState } from "react";
import TinderCard from "react-tinder-card";

const projects = [
	{
		name: "Knitted Coat",
		photo: "/path/to/your/image.png", // replace with actual path
		details: "A beautifully knitted coat with vibrant colors.",
		members: ["Alice", "Bob", "Charlie"],
	},
	{
		name: "Another Project",
		photo: "/path/to/another/image.png", // replace with actual path
		details: "Details about another project.",
		members: ["Dave", "Eve", "Frank"],
	},
	{
		name: "Knitted Coat",
		photo: "/path/to/your/image.png", // replace with actual path
		details: "A beautifully knitted coat with vibrant colors.",
		members: ["Alice", "Bob", "Charlie"],
	},
	{
		name: "Another Project",
		photo: "/path/to/another/image.png", // replace with actual path
		details: "Details about another project.",
		members: ["Dave", "Eve", "Frank"],
	},
	{
		name: "Knitted Coat",
		photo: "/path/to/your/image.png", // replace with actual path
		details: "A beautifully knitted coat with vibrant colors.",
		members: ["Alice", "Bob", "Charlie"],
	},
	{
		name: "Another Project",
		photo: "/path/to/another/image.png", // replace with actual path
		details: "Details about another project.",
		members: ["Dave", "Eve", "Frank"],
	},
	// Add more projects here...
];

const ExploreProjects = () => {
	const [lastDirection, setLastDirection] = useState();

	const swiped = (direction, nameToDelete) => {
		console.log("removing: " + nameToDelete);
		setLastDirection(direction);
	};

	const outOfFrame = (name) => {
		console.log(name + " left the screen!");
	};

	return (
		<div className='min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 overflow-hidden'>
			<div className='w-full max-w-2xl relative'>
				{projects.map((project, index) => (
					<TinderCard
						className='swipe absolute w-full h-full'
						key={index}
						onSwipe={(dir) => swiped(dir, project.name)}
						onCardLeftScreen={() => outOfFrame(project.name)}
						preventSwipe={["up", "down"]}
					>
						<div
							style={{ backgroundImage: `url(${project.photo})` }}
							className='bg-cover bg-center rounded-lg shadow-lg p-6 h-96 flex flex-col justify-end'
						>
							<h3 className='text-2xl font-bold bg-black bg-opacity-50 px-2 py-1 rounded'>
								{project.name}
							</h3>
							<p className='mt-2 text-gray-300 bg-black bg-opacity-50 px-2 py-1 rounded'>
								{project.details}
							</p>
							<div className='mt-4 bg-black bg-opacity-50 px-2 py-1 rounded'>
								<h3 className='font-semibold'>Members</h3>
								<ul className='list-disc list-inside'>
									{project.members.map((member, index) => (
										<li key={index}>{member}</li>
									))}
								</ul>
							</div>
						</div>
					</TinderCard>
				))}
			</div>
			{lastDirection ? (
				<h2 className='mt-4 font-bold'>You swiped {lastDirection}</h2>
			) : (
				<h2 className='mt-4 font-bold' />
			)}
		</div>
	);
};

export default ExploreProjects;
