'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/firebase.config';
import { updateUser, getUser } from '@/utils/database/firestore-helper-functions';
import { onAuthStateChanged } from 'firebase/auth';

const initialValues = {
	ageRange: '',
	gender: '',
	status: '',
	email: '',
	region: '',
	phoneNumber: '',
};

const validationSchema = Yup.object({
	ageRange: Yup.string().required('Age range is required'),
	gender: Yup.string().required('Gender is required'),
	status: Yup.string().required('Status is required'),
	email: Yup.string().required('Email is required'),
	region: Yup.string().required('Region is required'),
	phoneNumber: Yup.string().required('Phone number is required'),
});

export default function FormPage1() {
	const router = useRouter();

	onAuthStateChanged(auth, (user) => {
		if (!user) {
			router.push('/login');
		} else {
			getUser(auth.currentUser.uid).then((user) => {
				if (user.hasCompletedFirstForm) {
					router.push('/registration/step-2');
				}
			});
		}
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting }) => {
				const updatedData = {
					ageRange: values.ageRange,
					gender: values.gender,
					status: values.status,
					region: values.region,
					phone: values.phoneNumber,
					hasCompletedFirstForm: true,
				};
				updateUser(auth.currentUser.uid, updatedData);
				setSubmitting(false);
				router.push('/registration/step-2');
			}}
		>
			{({ isSubmitting, handleSubmit, values }) => (
				<Form onSubmit={handleSubmit}>
					<div className="mb-12">
						<h3 className="mb-3 text-lg lg:text-xl">Age range</h3>
						<div className="flex flex-wrap gap-x-10 gap-y-4 mb-2">
							<label className="flex items-center gap-2">
								<Field
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
									id="ageRange30-45"
									name="ageRange"
									value="30-45"
								/>
								<span className="block">30-45 years</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
									id="ageRange45-55"
									name="ageRange"
									value="45-55"
								/>
								<span className="block">45-55 years</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
									id="ageRange55-65"
									name="ageRange"
									value="55-65"
								/>
								<span className="block">55-65 years</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
									id="ageRangeOver65"
									name="ageRange"
									value="over65"
								/>
								<span className="block">Over 65 years</span>
							</label>
						</div>
						<ErrorMessage
							className="text-sm text-red-500"
							name="ageRange"
							component="div"
						/>
					</div>

					<div className="mb-12">
						<h3 className="mb-3 text-lg lg:text-xl">Gender</h3>
						<div className="flex flex-wrap gap-x-10 gap-y-4 mb-2">
							<label className="flex items-center gap-2">
								<Field
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
									id="genderMale"
									name="gender"
									value="male"
								/>
								<span className="block">Male</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
									id="genderFemale"
									name="gender"
									value="female"
								/>
								<span className="block">Female</span>
							</label>
						</div>
						<ErrorMessage
							className="text-sm text-red-500"
							name="gender"
							component="div"
						/>
					</div>

					<div className="mb-12">
						<h3 className="mb-3 text-lg lg:text-xl">Status</h3>
						<div className="flex flex-wrap gap-x-10 gap-y-4 mb-2">
							<label className="flex items-center gap-2">
								<Field
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
									id="statusSingle"
									name="status"
									value="single"
								/>
								<span className="block">Single</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
									id="statusMarried"
									name="status"
									value="married"
								/>
								<span className="block">Married</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
									id="statusFamily"
									name="status"
									value="family"
								/>
								<span className="block">Family</span>
							</label>
						</div>
						<ErrorMessage
							className="text-sm text-red-500"
							name="status"
							component="div"
						/>
					</div>

					<div className="mb-12">
						<label
							className="block mb-3 text-lg lg:text-xl"
							htmlFor="email"
						>
							<h3>Email</h3>
						</label>
						<Field
							className="mb-2 block text-base w-full p-4 border bg-transparent rounded-md focus:border-dark font-medium text-dark/90 transition-colors focus:outline-none focus:ring-0 disabled:bg-gray-500 disabled:border-dark/15 disabled:cursor-not-allowed placeholder:text-base placeholder:text-dark/30 placeholder:font-normal"
							type="email"
							placeholder="Email"
							id="email"
							name="email"
						/>
						<ErrorMessage
							className="text-sm text-red-500"
							name="email"
							component="div"
						/>
					</div>

					<div className="mb-12">
						<label
							className="block mb-3 text-lg lg:text-xl"
							htmlFor="region"
						>
							Region
						</label>
						<Field
							className="mb-2 block text-base w-full p-4 border bg-transparent rounded-md focus:border-dark font-medium text-dark/90 transition-colors focus:outline-none focus:ring-0 disabled:bg-gray-500 disabled:border-dark/15 disabled:cursor-not-allowed placeholder:text-base placeholder:text-dark/30 placeholder:font-normal"
							type="text"
							placeholder="Region"
							id="region"
							name="region"
						/>
						<ErrorMessage
							className="text-sm text-red-500"
							name="region"
							component="div"
						/>
					</div>

					<div className="mb-12">
						<label
							className="block mb-3 text-lg lg:text-xl"
							htmlFor="phoneNumber"
						>
							Phone Number
						</label>
						<Field
							className="mb-2 block text-base w-full p-4 border bg-transparent rounded-md focus:border-dark font-medium text-dark/90 transition-colors focus:outline-none focus:ring-0 disabled:bg-gray-500 disabled:border-dark/15 disabled:cursor-not-allowed placeholder:text-base placeholder:text-dark/30 placeholder:font-normal"
							type="tel"
							placeholder="Phone number"
							id="phoneNumber"
							name="phoneNumber"
						/>
						<ErrorMessage
							className="text-sm text-red-500"
							name="phoneNumber"
							component="div"
						/>
					</div>

					<div className="flex justify-between items-end">
						<span className="block text-lg">Page 1/2</span>
						<button
							className="disabled:animate-pulse disabled:opacity-50 disabled:cursor-not-allowed bg-brand-orange hover:brightness-110 text-white font-medium py-3 px-10 rounded-md"
							type="submit"
							disabled={isSubmitting}
						>
							Next
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}
