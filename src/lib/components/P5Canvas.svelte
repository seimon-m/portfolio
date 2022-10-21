<script>
	import P5 from 'p5-svelte';
	// import fonr from '../assets/cormorant-garamond-regular.woff2'
	let width = 500;
	let height = 500;

	let points;
	let font;
	let minMouseDist = 5000;
	let txt = 'Interaction';

	let sketch = (p5) => {
		p5.preload = () => {
			// font = p5.loadFont('$lib/assets/cormorant-garamond-regular.tff');
		};
		p5.setup = function () {
			p5.createCanvas(700, 300);
			p5.background('#e1b9b9');

			// p5.textFont(font);
			p5.textColor;
			p5.textSize(120);
			p5.textAlign(p5.LEFT);

			points = new Array(txt.length);
			for (let i = 0; i < points.length; i++) {
				points[i] = new Array(2);
			}

			let textW = p5.textWidth(txt);
			let s2 = '';

			for (var i = 0; i < txt.length; i++) {
				points[i][0] = p5.createVector((width - textW) / 2 + p5.textWidth(s2), height / 2);

				s2 = s2 + txt.charAt(i);

				console.log('s2: ' + s2);
			}

			console.log(points);
		};

		p5.draw = () => {
			p5.background('#e1b9b9');
			for (let i = 0; i < txt.length; i++) {
				let p = points[i][0];
				let p2 = p5.createVector(0, 0);

				let mouseDist = p5.dist(p.x, p.y, p5.mouseX, p5.mouseY);

				if (mouseDist < minMouseDist) {
					p2 = p5.createVector(p.x - p5.mouseX, p.y - p5.mouseY);

					let distDifference = minMouseDist - mouseDist;
					p2.setMag(p5.sqrt(distDifference));
				}

				points[i][1] = p2;
				p5.fill(0, 102, 153, 51);
				p5.text(txt.charAt(i), p.x + p2.x + 100, p.y + p2.y - 90);
			}
		};
	};
</script>

<div>
	<P5 {sketch} />
</div>

<style>
	div {
		display: inline-block;
	}
</style>
