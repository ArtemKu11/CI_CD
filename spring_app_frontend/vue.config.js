module.exports = {
    // outputDir: 'dist1',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/style/normalize.css";\n @import "@/style/variables.scss";
                \n@import "@/style/mainStyle.scss";`
            }
        }
    }
}