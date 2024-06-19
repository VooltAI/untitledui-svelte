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
		d="M20 5c0 1.657-3.582 3-8 3S4 6.657 4 5m16 0c0-1.657-3.582-3-8-3S4 3.343 4 5m16 0v14c0 1.657-3.582 3-8 3s-8-1.343-8-3V5m16 4.667c0 1.656-3.582 3-8 3s-8-1.344-8-3m16 4.663c0 1.657-3.582 3-8 3s-8-1.343-8-3"
	/>
</svg>
