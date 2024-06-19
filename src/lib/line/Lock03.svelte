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
		d="M17 11V8A5 5 0 0 0 7 8v3m1.8 10h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 18.72 20 17.88 20 16.2v-.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 11 16.88 11 15.2 11H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 13.28 4 14.12 4 15.8v.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 21 7.12 21 8.8 21"
	/>
</svg>
