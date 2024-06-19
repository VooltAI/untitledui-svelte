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
	<g
		stroke={color}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
	>
		<path
			d="M16 10c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C19 8.398 19 7.932 19 7s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C17.398 4 16.932 4 16 4H8c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C5 5.602 5 6.068 5 7s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C6.602 10 7.068 10 8 10zM18 20c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 18.398 21 17.932 21 17s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 14 18.932 14 18 14H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 15.602 3 16.068 3 17s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 20 5.068 20 6 20z"
		/>
	</g>
</svg>
