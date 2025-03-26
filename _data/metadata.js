import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const pkg = require("../package.json");

export default {
	// Feel free to override these, they are pulling from package.json for default values.
	title: "Alex Kademan" || pkg.name,
	description: "" || pkg.description,
	language: "en",
	url: "alexkademan.site",
	email: "alexkademan.@gmail"
};
