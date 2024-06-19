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
		d="M10.5 1.5v1.6M3.6 10H2m3.451-5.049L4.32 3.82m11.23 1.131L16.68 3.82M19 10h-1.6M6.5 10A4 4 0 0 1 14 8.062M6 22a4 4 0 1 1 1.324-7.775 5.002 5.002 0 0 1 9.352 0A4 4 0 1 1 18 22z"
	/>
</svg>
