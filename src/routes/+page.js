export async function load() {
	const response = await fetch('https://jsonplaceholder.typicode.com/photos');
	const photos = await response.json();

	return {
		body: {
			photos: photos.slice(0, 100)
		}
	};
}
