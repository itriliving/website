'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useContext } from 'react';
import { Formik } from 'formik';
import { auth } from '@/firebase/firebase.config';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';

export default function SignupForm() {
	const router = useRouter();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user && router.pathname !== '/profile') {
				router.push('/profile');
			}
		});

		return () => unsubscribe();
	}, [router]);

	

	return (
		<div className="space-y-8">
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					phone: '',
					email: '',
					password: '',
				}}
				validate={(values) => {
					const errors = {};
					if (!values.firstName) {
						errors.firstName = 'Required';
					} else if (values.firstName.length > 24) {
						errors.firstName =
							'First name cannot exceed 24 characters';
					}
					if (!values.lastName) {
						errors.lastName = 'Required';
					} else if (values.lastName.length > 24) {
						errors.lastName =
							'Last name cannot exceed 24 characters';
					}
					if (!values.phone) {
						errors.phone = 'Phone number cannot be empty';
					} else if (!/^\d{10}$/.test(values.phone)) {
						errors.phone = 'Invalid phone number';
					}
					if (!values.email) {
						errors.email = 'Email cannot be empty';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
							values.email
						)
					) {
						errors.email = 'Invalid email address';
					}
					if (!values.password) {
						errors.password = 'Password cannot be empty';
					} else if (values.password.length < 8) {
						errors.password =
							'Password must be at least 8 characters';
					} else if (!/[A-Z]/.test(values.password)) {
						errors.password =
							'Password must contain at least one uppercase letter';
					} else if (!/[a-z]/.test(values.password)) {
						errors.password =
							'Password must contain at least one lowercase letter';
					} else if (!/[0-9]/.test(values.password)) {
						errors.password =
							'Password must contain at least one number';
					} else if (
						!/[\^$*.\[\]{}()?\-"!@#%&/,><\':;|_~`]/.test(
							values.password
						)
					) {
						errors.password =
							'Password must contain at least one special character';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					createUserWithEmailAndPassword(
						auth,
						values.email,
						values.password
					)
						.then((userCredential) => {
							// Signed in
							const user = userCredential.user;
							console.log(user);
							router.push('/profile'); // Navigate to profile page
							setSubmitting(false); // Set submitting to false after operation
						})
						.catch((error) => {
							const errorCode = error.code;
							const errorMessage = error.message;
							console.error(errorCode, errorMessage);
							setSubmitting(false); // Ensure to set submitting to false in case of error
						});
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<form onSubmit={handleSubmit}>
						<div className="flex flex-row justify-between">
							<div className="grow mb-6 pr-2 w-1/2">
								<label
									className="text-dark block font-medium mb-2"
									htmlFor="firstName"
								>
									First Name
								</label>
								<input
									className={`block text-base w-full p-4 border bg-transparent rounded-md font-medium text-dark/90 transition-colors focus:outline-none focus:ring-0 focus:bg-dark/[.02] focus:shadow-[0_2px_4px_0_rgba(34,34,34,0.12)] disabled:bg-gray-500 disabled:border-dark/15 disabled:cursor-not-allowed placeholder:text-base placeholder:text-dark/30 placeholder:font-normal ${
										errors.firstName && touched.firstName
											? 'border-red-500'
											: 'border-dark/30 hover:border-dark focus:border-dark'
									}`}
									type="text"
									name="firstName"
									placeholder="First Name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.firstName}
								/>
								{errors.firstName && touched.firstName && (
									<div className="mt-2 text-sm text-red-500">
										{errors.firstName}
									</div>
								)}
							</div>
							<div className="grow mb-6 w-1/2">
								<label
									className="text-dark block font-medium mb-2"
									htmlFor="lastName"
								>
									Last Name
								</label>
								<input
									className={`block text-base w-full p-4 border bg-transparent rounded-md font-medium text-dark/90 transition-colors focus:outline-none focus:ring-0 focus:bg-dark/[.02] focus:shadow-[0_2px_4px_0_rgba(34,34,34,0.12)] disabled:bg-gray-500 disabled:border-dark/15 disabled:cursor-not-allowed placeholder:text-base placeholder:text-dark/30 placeholder:font-normal ${
										errors.lastName && touched.lastName
											? 'border-red-500'
											: 'border-dark/30 hover:border-dark focus:border-dark'
									}`}
									type="text"
									name="lastName"
									placeholder="Last Name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.lastName}
								/>
								{errors.lastName && touched.lastName && (
									<div className="mt-2 text-sm text-red-500">
										{errors.lastName}
									</div>
								)}
							</div>
						</div>
						<div className="grow mb-6">
							<label
								className="text-dark block font-medium mb-2"
								htmlFor="phone"
							>
								Phone Number
							</label>
							<input
								className={`block text-base w-full p-4 border bg-transparent rounded-md font-medium text-dark/90 transition-colors focus:outline-none focus:ring-0 focus:bg-dark/[.02] focus:shadow-[0_2px_4px_0_rgba(34,34,34,0.12)] disabled:bg-gray-500 disabled:border-dark/15 disabled:cursor-not-allowed placeholder:text-base placeholder:text-dark/30 placeholder:font-normal ${
									errors.phone && touched.phone
										? 'border-red-500'
										: 'border-dark/30 hover:border-dark focus:border-dark'
								}`}
								type="text"
								name="phone"
								placeholder="Phone Number"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.phone}
							/>
							{errors.phone && touched.phone && (
								<div className="mt-2 text-sm text-red-500">
									{errors.phone}
								</div>
							)}
						</div>
						<div className="grow mb-6">
							<label
								htmlFor="email"
								className="text-dark block font-medium mb-2"
							>
								Email
							</label>
							<input
								className={`block text-base w-full p-4 border bg-transparent rounded-md font-medium text-dark/90 transition-colors focus:outline-none focus:ring-0 focus:bg-dark/[.02] focus:shadow-[0_2px_4px_0_rgba(34,34,34,0.12)] disabled:bg-gray-500 disabled:border-dark/15 disabled:cursor-not-allowed placeholder:text-base placeholder:text-dark/30 placeholder:font-normal ${
									errors.email && touched.email
										? 'border-red-500'
										: 'border-dark/30 hover:border-dark focus:border-dark'
								}`}
								id="email"
								type="email"
								name="email"
								placeholder="Email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							{errors.email && touched.email && (
								<div className="mt-2 text-sm text-red-500">
									{errors.email}
								</div>
							)}
						</div>
						<div className="grow mb-6">
							<label
								className="text-dark block font-medium mb-2"
								htmlFor="password"
							>
								Password
							</label>
							<input
								className={`block text-base w-full p-4 border bg-transparent rounded-md font-medium text-dark/90 transition-colors focus:outline-none focus:ring-0 focus:bg-dark/[.02] focus:shadow-[0_2px_4px_0_rgba(34,34,34,0.12)] disabled:bg-gray-500 disabled:border-dark/15 disabled:cursor-not-allowed placeholder:text-base placeholder:text-dark/30 placeholder:font-normal ${
									errors.password && touched.password
										? 'border-red-500'
										: 'border-dark/30 hover:border-dark focus:border-dark'
								}`}
								id="password"
								type="password"
								name="password"
								placeholder="Password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
							{errors.password && touched.password && (
								<div className="mt-2 text-sm text-red-500">
									{errors.password}
								</div>
							)}
						</div>

						<button
							className="font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent w-full transition-colors duration-[250ms] text-base gap-2 px-6 py-3 text-off-white bg-dark hover:bg-dark/90 active:bg-dark/80 focus-visible:ring-black"
							type="submit"
							disabled={isSubmitting}
						>
							<span className="leading-6">Create Account</span>
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
}
