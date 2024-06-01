import { useState } from "react";
import { motion } from "framer-motion";
import AuthForm from "../components/AuthForm/index.jsx";

function Home() {
	const [showAuthForm, setShowAuthForm] = useState(false);

	const handleGetStartedClick = () => {
		setShowAuthForm(true);
	};

	return (
		<div className='flex flex-row items-center justify-center py-20 h-screen md:h-auto bg-transparent relative w-full'>
			<div className='max-w-7xl mx-auto w-full relative h-full md:h-[40rem] px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className='div'
				>
					<div
						className={`absolute w-[80%] left-1/2 transform -translate-x-1/2 ${
							showAuthForm ? "top-1/2" : "top-3/4"
						} -translate-y-1/2 z-[100] flex flex-col items-center justify-center`}
					>
						{showAuthForm ? (
							<AuthForm />
						) : (
							<button
								onClick={handleGetStartedClick}
								className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700'
							>
								Proceed
							</button>
						)}
					</div>

					<h2
						className='text-center text-xl md:text-4xl font-bold dark:text-white'
						style={{ color: "#B573EE" }}
					>
						Find Your Perfect Team
					</h2>
					<p className='text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto'>
						Create or join projects, swipe to find your match, and
						collaborate on exciting ventures.
					</p>
				</motion.div>
			</div>
		</div>
	);
}

export default Home;
