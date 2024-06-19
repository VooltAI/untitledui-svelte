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
		d="M16.243 5.757a6 6 0 0 1 0 8.486m-8.486 0a6 6 0 0 1 0-8.486M4.93 17.071c-3.906-3.905-3.906-10.237 0-14.142m14.142 0c3.906 3.905 3.906 10.237 0 14.142M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0v9"
	/>
</svg>
