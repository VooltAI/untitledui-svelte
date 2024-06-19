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
			d="M22 16a6 6 0 0 1-12 0c0-4.314 6-14 6-14s6 9.686 6 14M8 9a3 3 0 1 1-6 0c0-2.157 3-7 3-7s3 4.843 3 7"
		/>
	</g>
</svg>
