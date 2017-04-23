#!/usr/bin/env node
'use strict'

const name = process.argv[2]
const nameAvailable = require('./')

nameAvailable(name)
  .then((result) => {
    if (result) {
      return console.log(`\n${name} is yours for the taking 🎉\n`)
    }

    console.log(`\n${name} is already taken 😓\n`)
  })
  .catch((error) => {
    console.log('😱', error)
  })
