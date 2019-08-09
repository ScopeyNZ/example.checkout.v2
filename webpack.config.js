const path = require('path');

module.exports = {
  // entry points for javascript and css
  entry: [
    './src/index.js',
    './src/styles/application.scss'
  ],
  output: {
    path: path.resolve(__dirname, ""),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
       test: /\.(png|jpg|gif|svg)$/,
       use: [
         {
           loader: 'file-loader',
           options: {
             limit: 8192,
             publicPath: __dirname
           },
         },
       ],
     },
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
};
