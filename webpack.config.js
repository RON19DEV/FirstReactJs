var path = require('path');

module.exports={
    entry: path.resolve(__dirname,'src')+'/app/index.js',
    output: { 
        path:path.resolve(__dirname,'dist') + '/app',
        filename:'bundle.js',
        publicPath:'/app/'
    },

    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
      },

    module:{
        rules:[
            {
                test:/\.js$/,
                include:path.resolve(__dirname,'src'),
                loader:'babel-loader',
                query:{
                    presets:["@babel/react"]
                }
            
            },
            {
                test:/\.css$/,
                loader:'style-loader|css-loader'

            }
        ]
    }
};