var config = {
    entry: './main.js',
output: {
    path:'./',
    filename: 'index.js',
    },
    
    devServer: {
    inline: true,
    port: 7777
    },
    
    module: {
    loaders: [ {
    test: /.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel',
    
         query: {
            presets: ['es2015', 'react']
         }
      }]
    }
    
    }
    
    
    作者：极客教程
    链接：http://www.imooc.com/article/6219
    来源：慕课网