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
		d="M15 9.4V5a3 3 0 0 0-5.688-1.334M12 19v3m0-3a7 7 0 0 1-7-7v-2m7 9a7 7 0 0 0 7-7v-2M8 22h8M2 2l20 20m-10-7a3 3 0 0 1-3-3V9l5.123 5.12A3 3 0 0 1 12 15"
	/>
</svg>
