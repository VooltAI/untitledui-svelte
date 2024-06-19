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
		d="M15.631 7.631c-.396-.396-.594-.594-.668-.822a1 1 0 0 1 0-.618c.074-.228.272-.426.668-.822L18.47 2.53a6 6 0 0 0-8.3 6.895c.12.49.179.734.168.888a.85.85 0 0 1-.11.392c-.07.138-.207.274-.48.547L3.5 17.5a2.121 2.121 0 0 0 3 3l6.248-6.248c.273-.273.41-.41.547-.48a.85.85 0 0 1 .392-.11c.154-.011.399.049.888.168q.687.168 1.425.17a6 6 0 0 0 5.47-8.47L18.63 8.37c-.396.396-.594.594-.822.668a1 1 0 0 1-.618 0c-.228-.074-.426-.272-.822-.668z"
	/>
</svg>
