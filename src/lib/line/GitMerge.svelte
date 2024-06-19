<script>
	/** @type {number} */
	export let size = 24;
	/** @type {string} */
	export let color = "currentColor";
	/** @type {number} */
	export let strokeWidth = 2;
</script>

<svg
	{...$$restProps}
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill="none"
	viewBox="0 0 24 24"
>
	<path
		stroke={color}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
		d="M15 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 0a9 9 0 0 1-9-9m0 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v12"
	/>
</svg>
