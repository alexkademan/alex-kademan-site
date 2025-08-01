import { displayDrafts } from '../utilities/index.js';

export const Posts = (collection) => {
	// console.log('_collections/posts.js');
	const posts = collection
		.getFilteredByTag('blogpost')
		.filter((post) => displayDrafts() || !post.data.draft)
		.sort((a, b) => {
			const aDate = new Date(a.date);
			const bDate = new Date(b.date);
			return aDate.getTime() - bDate.getTime();
		});
	// console.log(posts);
	return posts;
};
