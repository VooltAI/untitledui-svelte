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
		d="M9 3.5V2M5.06 5.06 4 4m1.06 9L4 14.06m9-9L14.06 4M3.5 9H2m6.5-.5 4.111 12.778 2.889-2.89L19.111 22 22 19.111 18.389 15.5l2.889-2.889z"
	/>
</svg>
