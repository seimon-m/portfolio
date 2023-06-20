import VanillaTilt from 'vanilla-tilt';

export function tilt(node) {
	VanillaTilt.init(node, {
		max: 3,
		speed: 500
	});

	// return {
	// 	destroy() {
	// 		VanillaTilt.destroy();
	// 	}
	// };
}
