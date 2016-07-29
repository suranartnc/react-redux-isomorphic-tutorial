import faker from 'faker';

const generatePosts = (limit) => {
	let posts = [];

	for (let i = 0; i < limit; ++i) {
		const title = faker.lorem.sentence();

		posts.push({
			id: i + 1,
			title: title,
			body: faker.lorem.paragraphs(),
			tags: title.replace('.', '').split(' ')
		});
	}

	return posts;
};

export default () => {
	return {
		posts: generatePosts(20)
	};
};