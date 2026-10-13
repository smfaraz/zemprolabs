const { DateTime } = require("./src/_data/helpers.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/CNAME", { failOnError: false });

  eleventyConfig.addCollection("caseStudies", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/work/*.njk")
      .filter((item) => item.fileSlug !== "work" && item.url !== "/work/")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  eleventyConfig.addCollection("servicePages", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/services/*.njk").sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
