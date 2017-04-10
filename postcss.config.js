module.exports = {
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('precss')({ /* ...options */ }),
    require('postcss-cssnext')({
      browsers: ['last 2 versions', '> 5%'],
    }),
    require('postcss-modules')({})
  ]
}