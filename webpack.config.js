

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.[contenthash].js',

    clean: true,
  },
  devtool: 'source-map',
  plugins: [

  },
};
