---
layout: _pages/post
title: Profile Api
date: '2017-01-14'
link: 'http://api.tko.dev/fcc'
code: 'https://github.com/htkoca/fcc-profile-api'
categories:
  - code
tags:
  - node
  - express
  - cheerio
  - request
  - rest API
cover: cover.jpg
---
# Personal Project
JSON(P) API for FreeCodeCamp profile and curriculum map. Built with Node, Express, Cheerio, and Request

# Example
An example of this API in use is on the [FreeCodeCamp](https://www.tko.dev/project/code/fcc/free-code-camp/README/) project page.

## Server Install:
* Do the following in a system with node & npm v6.9.4 :
```
git clone https://github.com/htkoca/fcc-profile-api.git
cd fcc-profile-api/release
npm install
node server.js
```

## Server Usage:
* Your installed api server is available at: [http://localhost:80/fcc](http://localhost:80/fcc)
  * **JSONP url**, example: [http://localhost:80/fcc?user=your_username&callback=test](http://localhost:80/fcc?user=your_username&callback=test)
  * **JSON url**, example: [http://localhost:80/fcc?user=your_username](http://localhost:80/fcc?user=your_username)
  * User and callback arguments are optional, example: [http://localhost:80/](http://localhost:80/)
* I also host a server for public use **(be fair!)** at: http://api.tko.dev/fcc
  * **JSONP url**, example: http://api.tko.dev/fcc?user=your_username&callback=
  * **JSON url**, example: http://api.tko.dev/fcc?user=your_username
  * User and callback arguments are optional, example: http://api.tko.dev/fcc
  * HTTPS supported!

## Data Structure:
* **HINT**: Don't specify a username to see how the curriculum map is organized. (use a linter)
* Three keys in object returned:
  * **`_map`** contains all map & profile data.
  * **`_deprecated`** contains all challenges that could not be found in the current map. FreeCodeCamp may have refactored the challenge into a newer name.
  * **`_errors`** is returned exclusively (only key) when there are errors. Post an issue if you encounter this.
* Data returned in map are objects nested in `_data` arrays (to keep order of its contents). **Use version 0.5.0 for simple unordered json output**
  * Order is important, and the alternative is to use extra json like `"_order" : 1` has downsides when parsing output.

### Example shortened output (HTTP code 200).
```json
{
  "_map": [{
    "_name": "Front End Development Certification",
    "_data": [{
      "_name": "HTML5 and CSS",
      "_data": [{
        "_name": "Say Hello to HTML Elements",
        "_link": "https://www.freecodecamp.com/challenges/say-hello-to-html-elements",
        "_dateC": "May 21, 2016",
        "_code": "https://www.freecodecamp.com/challenges/Say Hello to HTML Elements?solution=%0A%3Ch1%3EHello%20World%3C%2Fh1%3E%0A"
      }, {
        "_name": "Headline with the h2 Element",
        "_link": "https://www.freecodecamp.com/challenges/headline-with-the-h2-element",
        "_dateC": "May 21, 2016",
        "_dateU": "Nov 16, 2016",
        "_code": "https://www.freecodecamp.com/challenges/Headline with the h2 Element?solution=%0A%3Ch1%3EHello%20World%3C%2Fh1%3E%0A%3Ch2%3ECatPhotoApp%3C%2Fh2%3E%0A"
      }]
    }]
  }, {
    "_name": "Data Visualization Certification",
    "_data": [{
      "_name": "React Projects",
      "_data": [{
        "_name": "Build a Markdown Previewer",
        "_link": "https://www.freecodecamp.com/challenges/build-a-markdown-previewer"
      }, {
        "_name": "Build a Camper Leaderboard",
        "_link": "https://www.freecodecamp.com/challenges/build-a-camper-leaderboard"
      }]
    }]
  }],
  "_deprecated": [{
    "_dateC": "May 21, 2016",
    "_code": "https://www.freecodecamp.com/challenges/Add Alt Text to an Image for Accessibility?solution=%0A%3Clink%20href%3D%22https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DLobster%22%20rel%3D%22stylesheet%22%20type%3D%22text%2Fcss%22%3E%0A%3Cstyle%3E%0A%20%20.red-text%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%20%20%7D%0A%0A%20%20h2%20%7B%0A%20%20%20%20font-family%3A%20Lobster%2C%20Monospace%3B%0A%20%20%7D%0A%0A%20%20p%20%7B%0A%20%20%20%20font-size%3A%2016px%3B%0A%20%20%20%20font-family%3A%20Monospace%3B%0A%20%20%7D%0A%0A%20%20.thick-green-border%20%7B%0A%20%20%20%20border-color%3A%20green%3B%0A%20%20%20%20border-width%3A%2010px%3B%0A%20%20%20%20border-style%3A%20solid%3B%0A%20%20%20%20border-radius%3A%2050%25%3B%0A%20%20%7D%0A%0A%20%20.smaller-image%20%7B%0A%20%20%20%20width%3A%20100px%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Ch2%20class%3D%22red-text%22%3ECatPhotoApp%3C%2Fh2%3E%0A%0A%3Cp%3EClick%20here%20for%20%3Ca%20href%3D%22%23%22%3Ecat%20photos%3C%2Fa%3E.%3C%2Fp%3E%0A%0A%3Ca%20href%3D%22%23%22%3E%3Cimg%20alt%3D%22A%20cute%20orange%20cat%20lying%20on%20its%20back%22%20class%3D%22smaller-image%20thick-green-border%22%20src%3D%22https%3A%2F%2Fbit.ly%2Ffcc-relaxing-cat%22%3E%3C%2Fa%3E%0A%0A%3Cp%20class%3D%22red-text%22%3EKitty%20ipsum%20dolor%20sit%20amet%2C%20shed%20everywhere%20shed%20everywhere%20stretching%20attack%20your%20ankles%20chase%20the%20red%20dot%2C%20hairball%20run%20catnip%20eat%20the%20grass%20sniff.%3C%2Fp%3E%0A%3Cp%20class%3D%22red-text%22%3EPurr%20jump%20eat%20the%20grass%20rip%20the%20couch%20scratched%20sunbathe%2C%20shed%20everywhere%20rip%20the%20couch%20sleep%20in%20the%20sink%20fluffy%20fur%20catnip%20scratched.%3C%2Fp%3E%0A"
  }, {
    "_dateC": "May 21, 2016",
    "_code": "https://www.freecodecamp.com/challenges/Use Hex Code to Color Elements White?solution=%0A%3Cstyle%3E%0A%20%20body%20%7B%0A%20%20%20%20background-color%3A%20%23FFFFFF%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A"
  }]
}
```
### Example error output (HTTP code 500).
```json
{
  "_errors": {
    "_message": "Cannot request freeCodeCamp map",
    "_error": {}
  }
}
```
