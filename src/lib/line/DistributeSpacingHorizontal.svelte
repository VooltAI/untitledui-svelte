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
		d="M21 21V3M3 21V3m6 5v8c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 19 11.068 19 12 19s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 17.398 15 16.932 15 16V8c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C13.398 5 12.932 5 12 5s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C9 6.602 9 7.068 9 8"
	/>
</svg>
