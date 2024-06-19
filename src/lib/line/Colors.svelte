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
		d="M12 20.472a6 6 0 1 0 5.58-10.262m-11.16 0a6 6 0 1 0 7.16 3.58M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0"
	/>
</svg>
