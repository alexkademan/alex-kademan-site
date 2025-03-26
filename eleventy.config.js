import pluginWebc from "@11ty/eleventy-plugin-webc";
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default function(eleventyConfig) {
	eleventyConfig.ignores.add("README.md");

	eleventyConfig.addPlugin(pluginWebc, {
		components: [
			"./_components/**/*.webc",
			"npm:@11ty/is-land/*.webc"
		]
	});

	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

	eleventyConfig.addPassthroughCopy("./content/fonts/DMSerifDisplay-Regular.woff2");
	eleventyConfig.addPassthroughCopy("./content/fonts/Lato-Light.woff2");
	eleventyConfig.addPassthroughCopy("./content/fonts/Lato-Bold.woff2");
	eleventyConfig.addPassthroughCopy("./content/svg/alexkademan-bg6.svg");
	eleventyConfig.addPassthroughCopy("./content/svg/ak-logomark.svg");
	eleventyConfig.addPassthroughCopy("./content/images/favicon.png");
	eleventyConfig.addPassthroughCopy("./content/images/favicon.ico");
	eleventyConfig.addPassthroughCopy("./content/css/reset.css");
	eleventyConfig.addPassthroughCopy("./content/css/base.css");
	// eleventyConfig.addBundle("css");

	eleventyConfig.setServerOptions({
		domDiff: false
	});

	// eleventyConfig.addFilter("cssmin", function (code) {
	// 	return new CleanCSS({}).minify(code).styles;
	// });
};

export const config = {
	dir: {
		input: "content",          // default: "."
		includes: "../_includes",  // default: "_includes"
		data: "../_data",          // default: "_data"
	}
};
