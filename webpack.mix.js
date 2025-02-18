let mix = require('laravel-mix')

require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/card.js', 'js')
  .vue({ version: 3 })
  .css('resources/css/card.css', 'css')
  .css('resources/css/pretty-checkbox.css', 'css')
  .nova('antoniosiles/nova-4-card-map-plus')
