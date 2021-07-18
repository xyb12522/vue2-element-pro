const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // where to output built files
  outputDir: 'lib',
  'lintOnSave': true,
  // 多页面配置
  pages: {
    app: { // 主app入口
      // 修改项目入口文件
      entry: 'examples/main.js',
      template: 'examples/template/index.html',
      filename: 'index.html'
    }
  },
  // 扩展webpack配置,使webpages加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname,'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options;
      });

    // 设置别名
    config.resolve.alias.set('@examples', resolve('examples'));
    config.resolve.alias.set('@packages', resolve('packages'));
  }
};
