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
		d="M16 13.374c3.532.695 6 2.28 6 4.126 0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5c0-1.845 2.468-3.431 6-4.126M12 17V9m0 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
	/>
</svg>
