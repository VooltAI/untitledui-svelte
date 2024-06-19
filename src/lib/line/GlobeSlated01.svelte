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
		d="M18.632 2.368c4.49 4.491 4.49 11.773 0 16.264-4.301 4.3-11.161 4.483-15.679.546-.197-.172-.295-.258-.34-.375a.52.52 0 0 1-.01-.322c.036-.12.134-.218.33-.415L5.15 15.85M18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
	/>
</svg>
