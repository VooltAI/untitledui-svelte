// @ts-check
import outputComponentsAsSvg from "@figma-export/output-components-as-svg";
import transformSvgWithSvgo from "@figma-export/transform-svg-with-svgo";
import "dotenv/config";

/** @type { import('@figma-export/types').ComponentsCommandOptions } */
const componentOptions = {
	fileId: `${process.env.FIGMA_FILE_ID}`,
	onlyFromPages: ["Line icons"],
	transformers: [
		transformSvgWithSvgo({
			plugins: [
				{
					name: "preset-default",
					params: {
						overrides: {
							removeViewBox: false,
						},
					},
				},
				{
					name: "cleanupIds",
				},
			],
			js2svg: {
				pretty: true,
				indent: "	",
			},
		}),
	],
	outputters: [
		outputComponentsAsSvg({
			output: "./exports",
		}),
	],
};

/** @type { import('@figma-export/types').FigmaExportRC } */
export default {
	commands: [["components", componentOptions]],
};
