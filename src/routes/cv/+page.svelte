<script>
	import cv from '$lib/assets/lebenslauf.pdf';
</script>

<div class="cv">
	<!-- <iframe
		title="PDF"
		src={'/pdfjs-2.16.105-dist/web/viewer.html?file=' + '/' + 'lebenslauf.pdf'}
		width="100%"
		height="1000px"
	/> -->
	<object data={cv} class="cv" />
</div>

<style>
	.cv {
		position: absolute;
		height: -webkit-fill-available;
		width: -webkit-fill-available;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
</style>
