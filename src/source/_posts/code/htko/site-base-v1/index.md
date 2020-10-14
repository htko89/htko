---
layout: _pages/post
title: tko.dev Site Base V1
date: '2017-01-15'
link: 'https://www.tko.dev/'
code: 'https://github.com/htkoca/htko-site-base/tree/1.0.0'
categories:
  - code
tags:
  - hugo
  - node
  - gulp
  - sass
  - foundation
cover: cover.jpg
images:
  - mockup-surface.jpg
  - screenshot-ipadpro.jpg
---
# Personal Project
Hugo base for personal portfolio at tko.dev. An experiment in static site generation, using [Hugo](http://gohugo.io/) as the engine and [Foundation](http://foundation.zurb.com/) as the grid framework. Dynamic sites are heavy in resource usage are vulnerable to attacks. Static sites are fast, efficient and most of all, provide minimal avenues of attack. However, they are difficult to maintain, and do not scale well with large sets of data.

## Project Criteria:
* `gulp` task engine
* `gulp-sass`,`gulp-cssnano`,`gulp-autoprefixer` to compile scss files to css.
* `babel`,`gulp-concat`,`gulp-uglify` to compile js files.
* `gulp-sourcemaps` for sourcemapping.
* `globby`,`minimatch`,`fs-extra` for portfolio projects compilation.
* `js-beautify` for linting.
* `hugo` (`livereload`) or `browser-sync` for debug rendering.
