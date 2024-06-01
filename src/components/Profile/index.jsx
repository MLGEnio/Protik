import React from "react";

const UserProfile = ({ isAdmin }) => {
	const dummyData = {
		fullName: "John Doe",
		description:
			"A passionate developer with experience in web technologies.",
		skills: ["JavaScript", "React", "Node.js", "TailwindCSS"],
		experience: [
			{
				company: "Tech Company",
				role: "Frontend Developer",
				duration: "Jan 2020 - Present",
			},
			{
				company: "Another Tech Company",
				role: "Backend Developer",
				duration: "Jan 2018 - Dec 2019",
			},
		],
		education: [
			{
				institution: "University of Technology",
				degree: "B.Sc. in Computer Science",
				duration: "2014 - 2018",
			},
		],
		tags: ["Web Development", "Programming", "Tech Enthusiast"],
		profilePic: "./avatars/img_6.png",
	};

	return (
		<div className='min-h-screen flex flex-col items-center bg-transparent text-white py-8'>
			<div className='w-full max-w-4xl p-8 bg-transparent rounded-lg shadow-lg'>
				<div className='flex flex-col items-center mb-8'>
					<img
						src={dummyData.profilePic}
						alt='Profile'
						className='w-32 h-32 rounded-full mb-4'
					/>
					<h1 className='text-3xl font-bold'>{dummyData.fullName}</h1>
					<span className='px-4 py-1 bg-purple-700 rounded-full text-sm mt-2'>
						UI/UX Designer
					</span>
				</div>
				<div className='mb-8 w-full'>
					<div className='flex justify-between items-center'>
						<h2 className='text-xl font-semibold mb-2'>About Me</h2>
						<button className='text-sm text-purple-700 underline'>
							Edit
						</button>
					</div>
					<hr className='border-purple-700 mb-4' />
					<p className='text-gray-400'>{dummyData.description}</p>
				</div>
				<div className='mb-8 w-full'>
					<div className='flex justify-between items-center'>
						<h2 className='text-xl font-semibold mb-2'>Skills</h2>
						<button className='text-sm text-purple-700 underline'>
							Edit
						</button>
					</div>
					<hr className='border-purple-700 mb-4' />
					<ul className='list-disc list-inside text-gray-400'>
						{dummyData.skills.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				</div>
				<div className='mb-8 w-full'>
					<div className='flex justify-between items-center'>
						<h2 className='text-xl font-semibold mb-2'>
							Experience
						</h2>
						<button className='text-sm text-purple-700 underline'>
							Edit
						</button>
					</div>
					<hr className='border-purple-700 mb-4' />
					{dummyData.experience.map((exp, index) => (
						<div key={index} className='mb-4'>
							<h3 className='text-lg font-semibold'>
								{exp.company}
							</h3>
							<p className='text-gray-400'>{exp.role}</p>
							<p className='text-gray-400'>{exp.duration}</p>
						</div>
					))}
				</div>
				<div className='mb-8 w-full'>
					<div className='flex justify-between items-center'>
						<h2 className='text-xl font-semibold mb-2'>
							Education
						</h2>
						<button className='text-sm text-purple-700 underline'>
							Edit
						</button>
					</div>
					<hr className='border-purple-700 mb-4' />
					{dummyData.education.map((edu, index) => (
						<div key={index} className='mb-4'>
							<h3 className='text-lg font-semibold'>
								{edu.institution}
							</h3>
							<p className='text-gray-400'>{edu.degree}</p>
							<p className='text-gray-400'>{edu.duration}</p>
						</div>
					))}
				</div>
				<div className='mb-8 w-full'>
					<div className='flex justify-between items-center'>
						<h2 className='text-xl font-semibold mb-2'>Tags</h2>
						<button className='text-sm text-purple-700 underline'>
							Edit
						</button>
					</div>
					<hr className='border-purple-700 mb-4' />
					<div className='flex flex-wrap'>
						{dummyData.tags.map((tag, index) => (
							<span
								key={index}
								className='mr-2 mb-2 px-3 py-1 bg-purple-700 rounded-full'
							>
								{tag}
							</span>
						))}
					</div>
				</div>
				{isAdmin && (
					<div className='flex justify-center mt-4'>
						<button className='px-4 py-2 bg-purple-700 rounded'>
							Edit Profile
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default UserProfile;
