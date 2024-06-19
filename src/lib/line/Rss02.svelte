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
		d="M3 13.023c5.185-.78 8.756 2.792 7.977 7.977M3 8.038c7.938-.78 13.742 5.024 12.962 12.962M3 3.052C13.692 2.274 21.726 10.308 20.948 21M5 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
	/>
</svg>
