import { useState } from "react";
import { useForm } from "react-hook-form";
import Preferences from "../Preferenes/index";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [showPreferences, setShowPreferences] = useState(false);
	const [selectedCards, setSelectedCards] = useState([]);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const nav = useNavigate();

	const onSubmit = (data) => {
		if (isLogin) {
			console.log("Login Data:", data);
			// API call for login can be added here
		} else {
			console.log("Signup Data:", data);
			setShowPreferences(true);
		}
	};

	const handleProceed = () => {
		nav("/explore-projects");
		// Add API call for submitting preferences here
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-transparent text-white'>
			<div className='w-full p-8 space-y-6'>
				{!showPreferences ? (
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='space-y-4'
					>
						{!isLogin && (
							<>
								<div className='mb-4'>
									<input
										type='text'
										placeholder='Full Name'
										{...register("fullName", {
											required: "Full Name is required",
										})}
										className='w-full px-4 py-2 border border-purple-500 rounded bg-transparent'
									/>
									{errors.fullName && (
										<span className='text-red-500'>
											{errors.fullName.message}
										</span>
									)}
								</div>
								<div className='mb-4'>
									<input
										type='tel'
										placeholder='Phone'
										{...register("phoneNumber", {
											required:
												"Phone Number is required",
										})}
										className='w-full px-4 py-2 border border-purple-500 rounded bg-transparent'
									/>
									{errors.phoneNumber && (
										<span className='text-red-500'>
											{errors.phoneNumber.message}
										</span>
									)}
								</div>
							</>
						)}
						<div className='mb-4'>
							<input
								type='email'
								placeholder='E-mail'
								{...register("email", {
									required: "Email is required",
								})}
								className='w-full px-4 py-2 border border-purple-500 rounded bg-transparent'
							/>
							{errors.email && (
								<span className='text-red-500'>
									{errors.email.message}
								</span>
							)}
						</div>
						<div className='mb-4'>
							<input
								type='password'
								placeholder='Password'
								{...register("password", {
									required: "Password is required",
								})}
								className='w-full px-4 py-2 border border-purple-500 rounded bg-transparent'
							/>
							{errors.password && (
								<span className='text-red-500'>
									{errors.password.message}
								</span>
							)}
						</div>
						<button
							type='submit'
							className='w-full px-4 py-2 bg-purple-700 rounded'
						>
							{isLogin ? "Sign In" : "Register"}
						</button>
						<div className='flex justify-center mt-4'>
							<button
								type='button'
								onClick={() => setIsLogin(!isLogin)}
								className='text-purple-500'
							>
								{isLogin
									? "Don't have an account? Register"
									: "Have an account? Sign In"}
							</button>
						</div>
					</form>
				) : (
					<div className='space-y-4'>
						<Preferences
							selectedCards={selectedCards}
							setSelectedCards={setSelectedCards}
						/>
						<button
							onClick={handleProceed}
							className={`w-full px-4 py-2 rounded ${
								selectedCards.length >= 5
									? "bg-purple-700"
									: "bg-gray-500 cursor-not-allowed"
							}`}
							disabled={selectedCards.length < 5}
						>
							{selectedCards.length}/5 Proceed
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default AuthForm;
