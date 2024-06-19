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
		d="M6.06 20.913c1.21.55 2.75.55 3.96 0s2.75-.55 3.96 0 2.75.55 3.96 0M12 3v2m-8 8H2m4.314-5.686L4.9 5.9m12.786 1.414L19.1 5.9M22 13h-2M7 13a5 5 0 0 1 10 0M2.1 17.413c1.21-.55 2.75-.55 3.96 0s2.75.55 3.96 0 2.75-.55 3.96 0 2.75.55 3.96 0 2.75-.55 3.96 0"
	/>
</svg>
