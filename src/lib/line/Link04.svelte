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
		d="M7.5 7H7a5 5 0 0 0 0 10h2a5 5 0 0 0 5-5m2.5 5h.5a5 5 0 0 0 0-10h-2a5 5 0 0 0-5 5"
	/>
</svg>
