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
		d="M12 19v-7m.292 7.084 6.978 2.337c.547.183.82.274.99.209a.5.5 0 0 0 .3-.331c.048-.175-.07-.438-.305-.964L12.766 3.622c-.23-.514-.346-.772-.507-.852a.5.5 0 0 0-.443 0c-.16.079-.277.336-.51.85L3.753 20.336c-.237.526-.356.789-.308.963a.5.5 0 0 0 .3.332c.168.066.442-.025.99-.206l7.052-2.341c.094-.031.14-.047.189-.053a.5.5 0 0 1 .128 0c.048.006.095.022.189.053"
	/>
</svg>
