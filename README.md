<h1 align="center">name-available</h1>
<div align="center">
  <strong>Check if package name is available on npm</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/name-available">
    <img src="https://img.shields.io/npm/v/name-available.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/name-available">
  <img src="https://img.shields.io/npm/dm/name-available.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/name-available">
    <img src="https://img.shields.io/travis/tiaanduplessis/name-available.svg?style=flat-square" alt="Travis Build" />
  </a>
    <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/tiaanduplessis/name-available.svg" alt="Greenkeeper" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fname-available">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fname-available.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://github.com/tiaanduplessis/name-available/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/name-available.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/name-available/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/name-available.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/name-available/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/name-available.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20name-available!%20https://github.com/tiaanduplessis/name-available%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/name-available.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaan.beer">Tiaan</a> and <a href="https://github.com/tiaanduplessis/name-available/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#cli">CLI</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install


```sh
$ npm install --save name-available
# OR
$ yarn add name-available
```

## Usage

```js
const nameAvailable = require('name-available')

nameAvailable('ava').then(console.log) // false

```

## CLI

```sh
$ npm install --global name-available
# OR
$ yarn global add name-available
```

Then:

```sh
$ available funky-mega-project
#
# funky-mega-project is yours for the taking 🎉
#
```

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

## License

Licensed under the MIT License.
