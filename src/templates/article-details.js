import React from 'react';
import { graphql, Link } from 'gatsby';

const Index = ({ data }) => {
	const post = data.allButterPage.edges[0].node;

	return (
		<div>
			<header>
				<nav>
					<div className="h-24 flex items-center justify-center">
						<Link
							className="text-3xl text-center bg-green-700 cursor-pointer"
							to="/"
						>
							ButterCMS Knowledge Base
						</Link>
					</div>
				</nav>
			</header>

			<main>
				<div className="bg-gray-100 flex justify-center">
					<div className="mt-10 max-w-5xl bg-white p-10">
						<h1 className="text-4xl mb-10 flex justify-center">
							{' '}
							{post.article_name}{' '}
						</h1>

						<div
							dangerouslySetInnerHTML={{
								__html: post.article_body,
							}}
						></div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Index;

export const query = graphql`
	query BlogDetail($slug: String) {
		allButterPage(filter: { slug: { eq: $slug } }) {
			edges {
				node {
					article_name
					article_body
					slug
				}
			}
		}
	}
`;
