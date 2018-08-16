const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

// const resolve = file => path.resolve(__dirname, file)
module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
    }
}