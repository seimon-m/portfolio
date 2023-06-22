import { redirect } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	const slug = params['slug'];
	const res = await fetch(`projects/${slug}/${slug}.html`);
	if (res.status !== 200) {
		throw redirect(307, '/#work');
	}
	const post = await res.text();

	console.log(slug);

	return {
		slug,
		post
	};
};
