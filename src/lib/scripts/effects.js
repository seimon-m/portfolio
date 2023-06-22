import VanillaTilt from 'vanilla-tilt';

export function tilt(node) {
	VanillaTilt.init(node, {
		max: 3,
		speed: 500
	});
}

export function tiltButton(node) {
	VanillaTilt.init(node, {
		max: 12,
		speed: 500
	});
}
