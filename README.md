# Personal Project
This is the code base for v2 of my portfolio at tko.dev.

Full responsive. Using a heavily modified version of [Bulma](http://bulma.io/) to define grid structure; it is CSS only, unopinionated, fast **(&lt;200KB!)**, yet supports all modern flexbox grid conventions. My **Gulp** build process then compiles **SASS & SCSS**, copies portfolio items from my local sources, builds it with **Hugo**, and renders real-time with **BrowserSync** for a live editing experience. I deploy using **Git** on **DigitalOcean** due to delta updates for all file types.

## Building for developers
* Download and install dependencies
```
git clone https://github.com/htkoca/htko-site-base.git
cd htko-site-base
npm install
```
* Build
```
npm run server # local live editing
npm run builder # remote live build (!)
```
* (!) renders only for build confirmation. All linked elements point to tko.dev and load accordingly based on files there.

## Project Criteria:
* 100% HTKO design.
  * `Gulp`, `Node.js` task engine.
* Style Structure: Custom lightweight base based on [Bulma](http://bulma.io/).
  * `Gulp-Sass`,`Gulp-PostCSS`,`AutoPrefixer` to compile sass & scss files to css.
* Portfolio Support: Pull from all local sources.
  * `JS-Yaml`, `Gray-Matter` for front matter / build configuration processing.
  * `Globby`,`Minimatch`,`FS-Extra` for portfolio projects compilation.
* Human ready: Linting, Sourcemapping, Live-editing.
  * `JS-beautify` for linting.
  * `Hugo`, `BrowserSync` for building and rendering.
