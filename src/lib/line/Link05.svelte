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
		d="M9 17H7A5 5 0 0 1 7 7h2m-1 5h10m-2.222 5H17a5 5 0 0 0 0-10h-1.222a.78.78 0 0 0-.778.778v8.444c0 .43.348.778.778.778"
	/>
</svg>
