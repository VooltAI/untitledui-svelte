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
		d="M14.59 21.66a10 10 0 0 1-9.661-2.589c-3.905-3.905-3.905-10.237 0-14.142s10.237-3.905 14.142 0a10 10 0 0 1 2.59 9.66M9 15V9m0 0h6M9 9 19 19"
	/>
</svg>
