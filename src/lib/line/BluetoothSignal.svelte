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
		d="m2 7 12 10-6 5V2l6 5L2 17M20.145 6.5a9.4 9.4 0 0 1 1.769 5.5 9.4 9.4 0 0 1-1.77 5.5M17 8.857c.621.891.986 1.975.986 3.143A5.48 5.48 0 0 1 17 15.143"
	/>
</svg>
