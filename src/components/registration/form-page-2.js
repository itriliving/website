'use client';
import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/firebase.config';
import {
	getUser,
	updateUser,
} from '@/utils/database/firestore-helper-functions';
import { onAuthStateChanged } from 'firebase/auth';
import Loading from '../common/loading';

const initialValues = {
	mainMotivation: '',
	stayPreference: '',
	interestInAdditionalServices: '',
};

const validationSchema = Yup.object({
	mainMotivation: Yup.string().required('Choice required'),
	stayPreference: Yup.string().required('Choice required'),
	interestInAdditionalServices: Yup.string().required('Choice required'),
});

export default function FormPage2() {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (!user) {
				router.push('/login');
			} else {
				getUser(auth.currentUser.uid).then((user) => {
					if (!user.hasCompletedFirstForm) {
						router.push('/registration/step-1');
					} else if (user.isRegistered) {
						router.push('/registration/success');
					} else {
						setLoading(false);
					}
				});
			}
		});
		return () => unsubscribe();
	}, [router]);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting }) => {
				const updatedData = {
					isRegistered: true,
					additionalInfo: values,
				};

				updateUser(auth.currentUser.uid, updatedData);
				setSubmitting(false);
				router.push('/registration/success');
			}}
		>
			{({ isSubmitting, handleSubmit }) => (
				<Form onSubmit={handleSubmit}>
					{loading && <Loading />}
					<div className="mb-12">
						<h3 className="mb-3 text-lg lg:text-xl">
							Main Motivation for Joining Itri Living
						</h3>
						<div className="flex flex-wrap gap-x-10 gap-y-4 mb-2">
							<label className="flex items-center gap-2">
								<Field
									name="mainMotivation"
									value="Social events & networking"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">
									Social events & networking
								</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									name="mainMotivation"
									value="Wellness & relaxation"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">
									Wellness & relaxation
								</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									name="mainMotivation"
									value="Outdoor activities & nature"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">
									Outdoor activities & nature
								</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									name="mainMotivation"
									value="Cultural & local experiences"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">
									Cultural & local experiences
								</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									name="mainMotivation"
									value="Nomad working"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">Nomad working</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									name="mainMotivation"
									value="Others"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">Others</span>
							</label>
						</div>
						<ErrorMessage
							className="text-sm text-red-500"
							name="mainMotivation"
							component="div"
						/>
					</div>

					<div className="mb-12">
						<h3 className="mb-3 text-lg lg:text-xl">
							Stay Preference
						</h3>
						<div className="flex flex-wrap gap-x-10 gap-y-4 mb-2">
							<label className="flex items-center gap-2">
								<Field
									name="stayPreference"
									value="Short stay (2-4 days)"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">
									Short stay (2-4 days)
								</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									name="stayPreference"
									value="Long stay (10+ days)"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">
									Long stay (10+ days)
								</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									name="stayPreference"
									value="Medium stay (5-9 days)"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">
									Medium stay (5-9 days)
								</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									name="stayPreference"
									value="Ultra Long stay (20+ days)"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">
									Ultra Long stay (20+ days)
								</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									name="stayPreference"
									value="Others"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">Others</span>
							</label>
						</div>
						<ErrorMessage
							className="text-sm text-red-500"
							name="stayPreference"
							component="div"
						/>
					</div>

					<div className="mb-12">
						<h3 className="mb-3 text-lg lg:text-xl">
							Interest in Additional Services
						</h3>
						<div className="flex flex-wrap gap-x-10 gap-y-4 mb-2">
							<label className="flex items-center gap-2">
								<Field
									name="interestInAdditionalServices"
									value="Spa & wellness"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">Spa & wellness</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									name="interestInAdditionalServices"
									value="Excursions & guided tours"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">
									Excursions & guided tours
								</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									name="interestInAdditionalServices"
									value="Sports activities"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">Sports activities</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									name="interestInAdditionalServices"
									value="Workshops & classes (cooking, crafts, etc.)"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">
									Workshops & classes (cooking, crafts, etc.)
								</span>
							</label>
							<label className="flex items-center gap-2">
								<Field
									name="interestInAdditionalServices"
									value="Others"
									className="block h-5 w-5 accent-brand-orange"
									type="radio"
								/>
								<span className="block">Others</span>
							</label>
						</div>
						<ErrorMessage
							className="text-sm text-red-500"
							name="interestInAdditionalServices"
							component="div"
						/>
					</div>

					<div className="flex justify-between items-end">
						<span className="block text-lg">Page 2/2</span>
						<button
							className="disabled:animate-pulse disabled:opacity-50 disabled:cursor-not-allowed bg-brand-orange hover:brightness-110 text-white font-medium py-3 px-10 rounded-md"
							type="submit"
							disabled={isSubmitting}
						>
							Done
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}
