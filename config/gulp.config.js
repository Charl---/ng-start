var config = {
    port: 5000,
    portDist:5001,
    paths: {
        dist: './dist',
        srcFolder: 'src',
        buildFolder: 'src/build',
        jsSource: ['src/app/**/*.js', '!src/app/**/*.spec.js'],
        sassSource: ['src/**/*.scss','!src/vendor/**/*.scss'],
        indexFile: 'src/index.html',
        templates: 'src/app/**/*.html',
        unitTests: 'src/app/**/*.spec.js',
        karmaConfigFile: 'config/karma.config.js',
        e2eTests: 'test-e2e/**/*.spec.js',
        pageObjects: 'test-e2e/**/*.page.js',
        protractorConfigFile: 'config/protractor.config.js'
    }
};

module.exports = config;