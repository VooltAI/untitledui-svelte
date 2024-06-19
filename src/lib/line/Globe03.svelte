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
		d="M12 2c3 2 3.923 6.292 4 10-.077 3.708-1 8-4 10m0-20C9 4 8.077 8.292 8 12c.077 3.708 1 8 4 10m0-20C6.477 2 2 6.477 2 12M12 2c5.523 0 10 4.477 10 10M12 22c5.523 0 10-4.477 10-10M12 22C6.477 22 2 17.523 2 12m20 0c-2 3-6.292 3.923-10 4-3.708-.077-8-1-10-4m20 0c-2-3-6.292-3.923-10-4-3.708.077-8 1-10 4"
	/>
</svg>
