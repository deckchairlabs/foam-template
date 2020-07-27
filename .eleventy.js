const pluginThemeUI = require('eleventy-plugin-theme-ui').default
const theme = require('./theme')

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginThemeUI, {
        theme
    });

    return {
        templateFormats: ['njk', 'md'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true
    }
};