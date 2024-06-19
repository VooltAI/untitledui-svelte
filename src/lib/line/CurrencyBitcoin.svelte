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
		d="M9.5 2v2m0 16v2m4-20v2m0 16v2m-6-18H14a4 4 0 0 1 0 8H7.5 15a4 4 0 0 1 0 8H7.5m0-16h-2m2 0v16m0 0h-2"
	/>
</svg>
