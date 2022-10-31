<script>
	import cv from '$lib/assets/lebenslauf.pdf';
</script>

<div class="cv">
	<object data={cv} class="cv" title="CV of Simon Müller" />
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
