export const load = async ({ fetch, params }) => {
	const slug = params['slug'];
	const res = await fetch(`projects/${slug}/${slug}.html`);
	if (res.status !== 200) {
		throw new Error();
	}
	const post = await res.text();

	console.log(slug);

	return {
		slug,
		post
	};
};
