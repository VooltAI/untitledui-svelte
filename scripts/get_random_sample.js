import { promises as fs } from "fs";
import * as prettier from "prettier";

(async () => {
	const prettierOptions = {
		...(await prettier.resolveConfig("./prettierrc")),
		parser: "typescript",
	};
	const dir = (await fs.readdir("./src/lib")).filter((x) =>
		x.includes(".svelte"),
	);
	const sample = dir
		.map((x) => ({ x, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ x }) => x.split(".svelte")[0])
		.slice(0, 20 * 8) // 20 cols, 8 rows
		.join(",");
	const data = `
    import { ${sample} } from "$lib";

    export const sample = [ ${sample} ];
  `;
	const formatted = await prettier.format(data, prettierOptions);
	await fs.writeFile("./src/routes/_components/sample.js", formatted);
})();
