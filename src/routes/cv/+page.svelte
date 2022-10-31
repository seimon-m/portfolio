<script>
	import cv from '$lib/assets/lebenslauf.pdf';
</script>

<div class="cv">
	<iframe src={cv} class="cv" title="CV of Simon Müller" type="application/pdf" />
</div>

<style>
	.cv {
		position: absolute;
		height: -webkit-fill-available;
		width: -webkit-fill-available;
		top: 0;
		left: 0;
	}
</style>
