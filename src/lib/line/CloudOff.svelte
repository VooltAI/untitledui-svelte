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
		d="M21.7 16.118a4.5 4.5 0 0 0-3.78-6.099 6 6 0 0 0-7.22-4.878M7.287 7.286a6 6 0 0 0-1.207 2.733A4.5 4.5 0 0 0 6.5 19h11c.456 0 .896-.068 1.311-.194M3 3l18 18"
	/>
</svg>
