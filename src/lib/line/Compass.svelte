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
		d="M12 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 0V2m9 12.938A11.97 11.97 0 0 1 12 19a11.97 11.97 0 0 1-9-4.062m7.745-6.276L3 22M13.255 8.662 21 22"
	/>
</svg>
