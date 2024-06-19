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
		d="M17.5 5.256V16.5a5.5 5.5 0 1 1-11 0V5.667a3.667 3.667 0 0 1 7.333 0v10.779a1.833 1.833 0 1 1-3.666 0V6.65"
	/>
</svg>
