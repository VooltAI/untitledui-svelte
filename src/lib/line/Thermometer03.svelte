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
		d="M21 3h-6m6 4h-6m6 4h-6m-9.5 2.758V4.5a2.5 2.5 0 0 1 5 0v9.258a4.5 4.5 0 1 1-5 0M9 17.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
	/>
</svg>
