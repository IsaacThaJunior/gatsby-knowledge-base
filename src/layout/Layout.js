import React from 'react';
import Header from '../components/Header';
export default function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<footer>
				ButterCMS Knowledge base and Gatsby 2022, all rights reserved.
			</footer>
		</>
	);
}
