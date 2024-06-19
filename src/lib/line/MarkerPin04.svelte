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
		d="M5 14.286c-1.851.817-3 1.955-3 3.214C2 19.985 6.477 22 12 22s10-2.015 10-4.5c0-1.259-1.149-2.397-3-3.214M18 8c0 4.064-4.5 6-6 9-1.5-3-6-4.936-6-9a6 6 0 1 1 12 0m-5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
	/>
</svg>
