import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/header';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Itri Living',
	description: 'Itri Living is a community of like-minded individuals who value exceptional moments, a sense of community, and a love for our planet.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
