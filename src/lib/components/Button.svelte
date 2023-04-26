<button>
	<slot />
</button>

<style>
	button {
		color: var(--font);
		display: flex;
		width: fit-content;
		flex-direction: column;
		align-items: center;
		background-color: var(--white);
		border: 1px solid var(--font);
		border-radius: 75px;
		padding: 0.4rem 1.5rem;
	}
</style>
