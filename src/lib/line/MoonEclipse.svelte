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
		d="M20.002 6A10.01 10.01 0 0 1 20 18.002M12 22a9.96 9.96 0 0 0 4.38-1.008 9 9 0 1 1 0-17.984A9.96 9.96 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"
	/>
</svg>
