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
		d="m18 8 4 4m0 0-4 4m4-4H9m6-7.796A8.4 8.4 0 0 0 10.667 3C5.88 3 2 7.03 2 12s3.88 9 8.667 9A8.4 8.4 0 0 0 15 19.796"
	/>
</svg>
