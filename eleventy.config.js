const { minifiedCSSfromSCSS } = require('./utils/filters.js');
const yaml = require("js-yaml");

const {
    heroImage,
    navbarLogo,
    socialImage,
    sponsorImage
} = require('./utils/image_shortcodes.js');

module.exports = function (eleventyConfig) {

    // compile SCSS to CSS and minify
    eleventyConfig.addFilter("generateFromSCSS", minifiedCSSfromSCSS);

    // for testing - stringify JSON
    eleventyConfig.addFilter("stringify", text => JSON.stringify(text));

    // add YAML handling
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    // passthrough the js folder (for now?)
    eleventyConfig.addPassthroughCopy({ "src/js": "./js" });

    // image handlers
    eleventyConfig.addShortcode("heroImage", heroImage);
    eleventyConfig.addShortcode("navbarLogo", navbarLogo);
    eleventyConfig.addShortcode("socialImage", socialImage);
    eleventyConfig.addShortcode("sponsorImage", sponsorImage);

    // Return Object options:
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
};