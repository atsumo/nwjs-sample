var dest = './dist';
var src = './src';

module.exports = {
  server: {
    settings: {
      root: dest,
      host: 'localhost',
      port: 8080,
      livereload: {
        port: 35929
      }
    }
  },
  sass: {
    src: src + '/styles/**/*.{sass,scss,css}',
    dest: dest + '/styles',
    settings: {
      indentedSyntax: false, // Enable .sass syntax?
      imagePath: '/images' // Used by the image-url helper
    }
  },
  webpack: {
    src: src + '/js/index.js',
    dest: dest + 'js',
    output: {
      filename: 'index.js'
    },
    cache: true,
    debug: true,
    uglify: false,
    module: {
      loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
      ]
    },
    resolve: {
      extendions: ['', 'js', '.jsx']
    },
    externals: [{
      xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    }]
  },
  browserify: {
    settings: {
      transform: ['babelify', 'reactify']
    },
    src: src + '/js/index.jsx',
    dest: dest + '/js',
    outputName: 'index.js',
  },
  html: {
    src: 'src/index.html',
    dest: dest
  },
  icon: {
    src: ['src/sketch/*.sketch'],
    output: 'app.icns',
    dest: dest + '/icon'
  },
  watch: {
    src: 'src/**/*.*',
    tasks: ['build']
  }
};
