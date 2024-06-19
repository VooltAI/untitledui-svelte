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
		d="M17 19.4c0 1.436-1.12 2.6-2.5 2.6S12 20.836 12 19.4V12m-9.874-1.594C2.89 5.641 7.02 2 12 2s9.11 3.64 9.874 8.406c.074.465.111.698.018.946a1.1 1.1 0 0 1-.44.516c-.23.132-.504.132-1.052.132H3.6c-.548 0-.821 0-1.052-.132a1.1 1.1 0 0 1-.44-.516c-.093-.248-.056-.48.018-.946"
	/>
</svg>
