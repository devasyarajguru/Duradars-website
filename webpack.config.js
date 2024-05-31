const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
    entry: './src/main.jsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      open: true,
      port: 9002,
      hot:true,
      client: {
        logging: 'none', // This replaces clientLogLevel: 'silent'
      }
     },


    module: {
      rules: [
        {
            test: /\.(js|jsx)$/, // Process .js and .jsx files
            exclude: /node_modules/, // Exclude node_modules directory
            use: {
              loader: 'babel-loader', // Use Babel loader for JS/JSX files
            }
          },

          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },

          {
            test: /\.webp$/,
            type: 'asset/resource',
            generator: {
              filename: 'images/[name][ext]',
            },
          },
        
      ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve both .js and .jsx extensions
      },
      
  };