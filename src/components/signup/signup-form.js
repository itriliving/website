'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { auth } from '@/firebase/firebase.config';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { createUser } from '@/utils/database/firestore-helper-functions';

export default function SignupForm() {
	const router = useRouter();
	const { t } = useTranslation();

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
						errors.firstName = t('required');
					} else if (values.firstName.length > 24) {
						errors.firstName = t('fname-char-max');
					}
					if (!values.lastName) {
						errors.lastName = t('required');
					} else if (values.lastName.length > 24) {
						errors.lastName = t('lname-char-max');
					}
					if (!values.phone) {
						errors.phone = t('phone-empty');
					} else if (!/^\d{10}$/.test(values.phone)) {
						errors.phone = t('phone-invalid');
					}
					if (!values.email) {
						errors.email = t('email-empty');
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
							values.email
						)
					) {
						errors.email = t('email-invalid');
					}
					if (!values.password) {
						errors.password = t('password-empty');
					} else if (values.password.length < 8) {
						errors.password = t('password-short');
					} else if (!/[A-Z]/.test(values.password)) {
						errors.password = t('password-uppercase');
					} else if (!/[a-z]/.test(values.password)) {
						errors.password = t('password-loswercase');
					} else if (!/[0-9]/.test(values.password)) {
						errors.password = t('password-number');
					} else if (
						!/[\^$*.\[\]{}()?\-"!@#%&/,><\':;|_~`]/.test(
							values.password
						)
					) {
						errors.password = t('password-special-char');
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
							const user = userCredential.user;
							createUser(user.uid, {
								email: user.email,
								name: `${values.firstName} ${values.lastName}`,
								phone: values.phone,
								photoURL: null,
								ageRange: null,
								gender: null,
								status: null,
								region: null,
								additionalInfo: null,
								hasCompletedFirstForm: false,
								isRegistered: false,
								hasBookedCall: false,
							});
							// setUserState
							router.push('/registration/step-1');
							setSubmitting(false);
						})
						.catch((error) => {
							const errorCode = error.code;
							const errorMessage = error.message;
							console.error(errorCode, errorMessage);
							setSubmitting(false);
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
									{t('first-name')}
								</label>
								<input
									className={`block text-base w-full p-4 border bg-transparent rounded-md font-medium text-dark/90 transition-colors focus:outline-none focus:ring-0 focus:bg-dark/[.02] focus:shadow-[0_2px_4px_0_rgba(34,34,34,0.12)] disabled:bg-gray-500 disabled:border-dark/15 disabled:cursor-not-allowed placeholder:text-base placeholder:text-dark/30 placeholder:font-normal ${
										errors.firstName && touched.firstName
											? 'border-red-500'
											: 'border-dark/30 hover:border-dark focus:border-dark'
									}`}
									type="text"
									name="firstName"
									placeholder={t('first-name')}
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
									{t('last-name')}
								</label>
								<input
									className={`block text-base w-full p-4 border bg-transparent rounded-md font-medium text-dark/90 transition-colors focus:outline-none focus:ring-0 focus:bg-dark/[.02] focus:shadow-[0_2px_4px_0_rgba(34,34,34,0.12)] disabled:bg-gray-500 disabled:border-dark/15 disabled:cursor-not-allowed placeholder:text-base placeholder:text-dark/30 placeholder:font-normal ${
										errors.lastName && touched.lastName
											? 'border-red-500'
											: 'border-dark/30 hover:border-dark focus:border-dark'
									}`}
									type="text"
									name="lastName"
									placeholder={t('last-name')}
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
								{t('phone-number')}
							</label>
							<input
								className={`block text-base w-full p-4 border bg-transparent rounded-md font-medium text-dark/90 transition-colors focus:outline-none focus:ring-0 focus:bg-dark/[.02] focus:shadow-[0_2px_4px_0_rgba(34,34,34,0.12)] disabled:bg-gray-500 disabled:border-dark/15 disabled:cursor-not-allowed placeholder:text-base placeholder:text-dark/30 placeholder:font-normal ${
									errors.phone && touched.phone
										? 'border-red-500'
										: 'border-dark/30 hover:border-dark focus:border-dark'
								}`}
								type="text"
								name="phone"
								placeholder={t('phone-number')}
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
								{t('password')}
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
								placeholder={t('password')}
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
							<span className="leading-6">
								{t('create-account')}
							</span>
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
}
