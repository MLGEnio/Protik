import { useState } from "react";
const cardConfig = [
	{
		title: "programming",
		subcategories: [
			{
				title: "frontend",
				subcategories: [
					{
						title: "react",
						subcategories: [
							{ title: "hooks", subcategories: [] },
							{ title: "context", subcategories: [] },
						],
					},
					{
						title: "angularjs",
						subcategories: [
							{ title: "directives", subcategories: [] },
							{ title: "services", subcategories: [] },
						],
					},
					{
						title: "vuejs",
						subcategories: [
							{ title: "vuex", subcategories: [] },
							{ title: "router", subcategories: [] },
						],
					},
					{ title: "svelte", subcategories: [] },
					{ title: "ember", subcategories: [] },
					{ title: "backbone", subcategories: [] },
				],
			},
			{
				title: "backend",
				subcategories: [
					{
						title: "nodejs",
						subcategories: [
							{ title: "express", subcategories: [] },
							{ title: "koa", subcategories: [] },
						],
					},
					{
						title: "django",
						subcategories: [
							{ title: "rest framework", subcategories: [] },
							{ title: "channels", subcategories: [] },
						],
					},
					{ title: "flask", subcategories: [] },
					{ title: "spring", subcategories: [] },
					{ title: "laravel", subcategories: [] },
					{ title: "rails", subcategories: [] },
				],
			},
			{
				title: "mobile",
				subcategories: [
					{ title: "react native", subcategories: [] },
					{ title: "flutter", subcategories: [] },
					{ title: "swift", subcategories: [] },
					{ title: "kotlin", subcategories: [] },
					{ title: "ionic", subcategories: [] },
				],
			},
		],
	},
	{
		title: "entrepreneurship",
		subcategories: [
			{
				title: "startup",
				subcategories: [
					{ title: "fundraising", subcategories: [] },
					{ title: "marketing", subcategories: [] },
					{ title: "pitching", subcategories: [] },
					{ title: "scaling", subcategories: [] },
				],
			},
			{
				title: "business",
				subcategories: [
					{
						title: "management",
						subcategories: [
							{ title: "project management", subcategories: [] },
							{ title: "team management", subcategories: [] },
						],
					},
					{
						title: "strategy",
						subcategories: [
							{
								title: "competitive analysis",
								subcategories: [],
							},
							{ title: "market research", subcategories: [] },
						],
					},
					{ title: "leadership", subcategories: [] },
					{ title: "operations", subcategories: [] },
					{ title: "sales", subcategories: [] },
					{ title: "finance", subcategories: [] },
				],
			},
		],
	},
	{
		title: "devops",
		subcategories: [
			{
				title: "docker",
				subcategories: [
					{ title: "docker-compose", subcategories: [] },
					{ title: "docker-swarm", subcategories: [] },
				],
			},
			{ title: "kubernetes", subcategories: [] },
			{ title: "jenkins", subcategories: [] },
			{ title: "terraform", subcategories: [] },
			{ title: "ansible", subcategories: [] },
			{ title: "puppet", subcategories: [] },
			{ title: "chef", subcategories: [] },
		],
	},
	{
		title: "data science",
		subcategories: [
			{
				title: "python",
				subcategories: [
					{ title: "pandas", subcategories: [] },
					{ title: "numpy", subcategories: [] },
				],
			},
			{ title: "r", subcategories: [] },
			{ title: "julia", subcategories: [] },
			{ title: "pandas", subcategories: [] },
			{ title: "numpy", subcategories: [] },
			{ title: "scikit-learn", subcategories: [] },
			{ title: "tensorflow", subcategories: [] },
			{ title: "keras", subcategories: [] },
		],
	},
	{
		title: "cloud computing",
		subcategories: [
			{ title: "aws", subcategories: [] },
			{ title: "azure", subcategories: [] },
			{ title: "google cloud", subcategories: [] },
			{ title: "ibm cloud", subcategories: [] },
			{ title: "oracle cloud", subcategories: [] },
		],
	},
	{
		title: "cybersecurity",
		subcategories: [
			{ title: "network security", subcategories: [] },
			{ title: "application security", subcategories: [] },
			{ title: "cloud security", subcategories: [] },
			{ title: "endpoint security", subcategories: [] },
			{ title: "identity management", subcategories: [] },
			{ title: "penetration testing", subcategories: [] },
		],
	},
	{
		title: "artificial intelligence",
		subcategories: [
			{
				title: "machine learning",
				subcategories: [
					{ title: "supervised learning", subcategories: [] },
					{ title: "unsupervised learning", subcategories: [] },
				],
			},
			{ title: "deep learning", subcategories: [] },
			{ title: "natural language processing", subcategories: [] },
			{ title: "computer vision", subcategories: [] },
			{ title: "reinforcement learning", subcategories: [] },
		],
	},
	{
		title: "project management",
		subcategories: [
			{ title: "agile", subcategories: [] },
			{ title: "scrum", subcategories: [] },
			{ title: "kanban", subcategories: [] },
			{ title: "waterfall", subcategories: [] },
			{ title: "prince2", subcategories: [] },
		],
	},
	{
		title: "design",
		subcategories: [
			{ title: "ux design", subcategories: [] },
			{ title: "ui design", subcategories: [] },
			{ title: "graphic design", subcategories: [] },
			{ title: "product design", subcategories: [] },
			{ title: "web design", subcategories: [] },
		],
	},
	{
		title: "marketing",
		subcategories: [
			{ title: "digital marketing", subcategories: [] },
			{ title: "seo", subcategories: [] },
			{ title: "content marketing", subcategories: [] },
			{ title: "social media marketing", subcategories: [] },
			{ title: "email marketing", subcategories: [] },
		],
	},
];
const Preferences = ({selectedCards,setSelectedCards}) => {

	const [visibleSubcategories, setVisibleSubcategories] = useState([]);
	console.log(selectedCards);
	const handleCardClick = (card) => {
		const isSelected = selectedCards.includes(card.title);
		const isVisible = visibleSubcategories.includes(card.title);

		if (isSelected) {
			setSelectedCards(
				selectedCards.filter((title) => title !== card.title),
			);
		} else {
			setSelectedCards([...selectedCards, card.title]);
		}

		if (!isVisible && card.subcategories.length > 0) {
			setVisibleSubcategories([...visibleSubcategories, card.title]);
		}
	};

	const generateCards = (cards) => {
		return cards.flatMap((card) => [
			<div
				key={card.title}
				onClick={() => handleCardClick(card)}
				className={`m-1 p-2 cursor-pointer border rounded-3xl border-purple-600  text-white ${
					selectedCards.includes(card.title)
						? "bg-purple-600 "
						: "bg-black bg-opacity-40 "
				}`}
			>
				{card.title}
			</div>,
			...(visibleSubcategories.includes(card.title)
				? generateCards(card.subcategories)
				: []),
		]);
	};

	return (
		<div className='p-4 text-center text-lg'>
			<div className='flex flex-wrap justify-center max-h-[600px] overflow-y-auto'>
				{generateCards(cardConfig)}
			</div>
		</div>
	);
};

export default Preferences;
