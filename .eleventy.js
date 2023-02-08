const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/.htaccess');

    eleventyConfig.addPassthroughCopy('./src/img');
    eleventyConfig.addPassthroughCopy('./src/includes');
    eleventyConfig.addPassthroughCopy('./src/fonts');
    eleventyConfig.addPassthroughCopy('./src/scripts');


    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}