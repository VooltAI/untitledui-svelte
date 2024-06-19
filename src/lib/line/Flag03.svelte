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
		d="M4 13h15.587c.462 0 .694 0 .826-.097a.5.5 0 0 0 .202-.357c.015-.163-.104-.361-.342-.758l-2.026-3.376c-.09-.15-.135-.225-.152-.305a.5.5 0 0 1 0-.214c.017-.08.062-.155.152-.305l2.026-3.376c.238-.397.357-.595.342-.758a.5.5 0 0 0-.202-.357C20.28 3 20.049 3 19.587 3H4v18"
	/>
</svg>
