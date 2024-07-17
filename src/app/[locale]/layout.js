import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
	title: 'Itri Living',
	description:
		'Itri Living is a community of like-minded individuals who value exceptional moments, a sense of community, and a love for our planet.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={raleway.className}>
				{children}
			</body>
		</html>
	);
}
