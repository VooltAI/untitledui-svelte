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
		d="m12 2 2.012 5.231c.282.733.423 1.1.642 1.408q.294.413.707.707c.308.219.675.36 1.408.642L22 12l-5.231 2.012c-.733.282-1.1.423-1.408.642a3 3 0 0 0-.707.707c-.219.308-.36.675-.642 1.408L12 22l-2.012-5.231c-.282-.733-.423-1.1-.642-1.408a3 3 0 0 0-.707-.707c-.308-.219-.675-.36-1.408-.642L2 12l5.231-2.012c.733-.282 1.1-.423 1.408-.642a3 3 0 0 0 .707-.707c.219-.308.36-.675.642-1.408z"
	/>
</svg>
