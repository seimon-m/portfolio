<script>
	import cv from '$lib/assets/lebenslauf.pdf';
</script>

<div class="cv">
	<iframe
		title="PDF"
		src={`/pdfjs-2.16.105-dist/web/viewer.html?file=${cv}`}
		width="100%"
		height="1000px"
	/>
</div>

<style>
	.cv {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
</style>
