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
		d="m5 8 5 5m-6 1 6-6 2-3M2 5h12M7 2h1m4.913 15h7.174m-7.174 0L11 21m1.913-4 2.865-5.991c.231-.483.347-.724.505-.8a.5.5 0 0 1 .434 0c.158.076.274.317.505.8L20.087 17m0 0L22 21"
	/>
</svg>
