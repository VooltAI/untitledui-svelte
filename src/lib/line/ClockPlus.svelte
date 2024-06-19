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
		d="M21.92 13.265Q22 12.643 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10q.653 0 1.285-.082M12 6v6l3.738 1.87M19 22v-6m-3 3h6"
	/>
</svg>
