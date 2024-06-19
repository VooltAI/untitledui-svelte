# Untitled UI Icons for Svelte

The _**ultimate**_ icon library for Svelte 🧡✨ — Untitled UI Icons are a clean, consistent, and neutral icon library crafted specifically for modern UI design.

> [!IMPORTANT]  
> This is an unofficial port of [Untitled UI](https://www.untitledui.com) to Svelte, and is _not_ affiliated with them.

👉 Want to see what's included? [**Browse all icons here!**](https://www.untitledui.com/free-icons)

## Installation

```sh
npm install @voolt/untitledui-svelte
```

## Usage

Untitled UI Icons is built with ES Modules, so it's completely tree-shakable.

Each icon can be imported as a Svelte component, which renders an inline SVG element. This way, only the icons that are imported into your project are included in the final bundle. The rest of the icons are tree-shaken away.

### Examples

Default usage:

```svelte
<script>
	import { FaceWink } from "@voolt_technologies/untitledui-svelte";
</script>

<FaceWink />
```

Additional props can be passed to adjust the icon:

```svelte
<script>
	import { ThumbsUp } from "@voolt_technologies/untitledui-svelte";
</script>

<ThumbsUp size={32} color="#ff3e98" />
```

Icon components are always in PascalCase. If you want to use `calendar-check-02`, you can import it as `CalendarCheck02`:

```svelte
<script>
	import { CalendarCheck02 } from "@voolt_technologies/untitledui-svelte";
</script>

<CalendarCheck02 />
```

## PRO Icons

This library provides access to the free Untitled UI icons only. If you purchased Untitled UI PRO, you will need to fork this project, prepare the icons and publish a private library to utilize them within your projects, as we do not support them out of the box.

## Developing

If you want to update the icons from source, you can follow these steps:

1. Clone the ".env.example" file to ".env" and fiil it with...
   1. Your [Figma access token](https://www.figma.com/developers/api#access-tokens)
   2. The ID for your copy of the Untitled UI [Figma file](https://store.untitledui.com/buy/icons-free)
2. Run `npm run figma:export` to download the SVGs
3. Run `npm run figma:prepare` to prepare the Svelte components

## License

The untitledui-svelte library is distributed under the [MIT License](./LICENSE). While Untitled UI itself is distributed under a [proprietary license](https://www.untitledui.com/legal/license), we have received express permission from Jordan Hughes to distribute the untitledui-svelte library.
