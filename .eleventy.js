module.exports = function (eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/img');
    eleventyConfig.addPassthroughCopy('./src/scripts');
    eleventyConfig.addPassthroughCopy('./src/style.css');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}