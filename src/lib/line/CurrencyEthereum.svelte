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
		d="m4 11 8 2 8-2M4 11l8-9m-8 9 8-2m8 2-8-9m8 9-8-2m0-7v7m-6.5 6 6.5 7 6.5-7-6.5 1.5z"
	/>
</svg>
