'use client';
import { Formik } from 'formik';

export default function LoginForm() {
	return (
		<div className="space-y-8">
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={(values) => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Required';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
							values.email
						)
					) {
						errors.email = 'Invalid email address';
					}
					if (!values.password) {
						errors.password = 'Required';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
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
						<div className="grow mb-6">
							<label
								htmlFor="email"
								className="text-dark block font-medium mb-2"
							>
								Email
							</label>
							<input
								className="block text-base w-full p-4 border bg-transparent rounded-md font-medium text-dark/90 transition-colors focus:outline-none focus:ring-0 focus:bg-dark/[.02] focus:shadow-[0_2px_4px_0_rgba(34,34,34,0.12)] disabled:bg-gray-500 disabled:border-dark/15 disabled:cursor-not-allowed placeholder:text-base placeholder:text-dark/30 placeholder:font-normal border-dark/30 hover:border-dark focus:border-dark"
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
								className="block text-base w-full p-4 border bg-transparent rounded-md font-medium text-dark/90 transition-colors focus:outline-none focus:ring-0 focus:bg-dark/[.02] focus:shadow-[0_2px_4px_0_rgba(34,34,34,0.12)] disabled:bg-gray-500 disabled:border-dark/15 disabled:cursor-not-allowed placeholder:text-base placeholder:text-dark/30 placeholder:font-normal border-dark/30 hover:border-dark focus:border-dark"
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
						<div className="mb-8">
							<p className="font-medium underline text-base cursor-pointer hover:text-light active:text-extra-light">
								Forgot password?
							</p>
						</div>
						<button
							className="font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent w-full transition-colors duration-[250ms] text-base gap-2 px-6 py-3 text-off-white bg-dark hover:bg-dark/90 active:bg-dark/80 focus-visible:ring-black"
							type="submit"
							disabled={isSubmitting}
						>
							<span className="leading-6">Sign Up</span>
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
}