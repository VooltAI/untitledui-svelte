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
		d="M9 9v6m0 0h6m-6 0L19 5m2.66 4.41a10 10 0 0 1-2.589 9.661c-3.905 3.905-10.237 3.905-14.142 0s-3.905-10.237 0-14.142a10 10 0 0 1 9.66-2.59"
	/>
</svg>
