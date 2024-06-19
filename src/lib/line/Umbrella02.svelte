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
		d="M7 19.4C7 20.836 8.12 22 9.5 22s2.5-1.164 2.5-2.6V11m0 0c-1.61 0-4 1-4 1s-1.39-1-3-1-3 1-3 1C2 6.477 6.477 2 12 2s10 4.477 10 10c0 0-1.39-1-3-1s-3 1-3 1-2.39-1-4-1"
	/>
</svg>
