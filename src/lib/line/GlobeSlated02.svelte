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
		d="m2.661 18.34 4.594-4.595M18.218 2.783A9.5 9.5 0 1 1 4.783 16.218M17 22H7m5 0v-3m5.5-9.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
	/>
</svg>
