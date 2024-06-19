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
		d="M12 19.5h.01M22.806 8.7A15.94 15.94 0 0 0 12 4.5c-4.166 0-7.96 1.592-10.807 4.2m3.539 3.543A10.96 10.96 0 0 1 12 9.5c2.786 0 5.33 1.036 7.268 2.743m-3.57 3.532A5.97 5.97 0 0 0 12 14.5c-1.416 0-2.718.49-3.745 1.312"
	/>
</svg>
