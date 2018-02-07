/* eslint-env jest */
'use strict'

const nameAvailable = require('./')

test('name-available defined', () => {
  expect(nameAvailable).toBeDefined()
})

test('check if name available', (done) => {
  nameAvailable('aaaajjjjjkkkklllliiiiasaskaslkasdjklsdjlskjdsalkjdmacslksjd')
    .then((result) => {
      expect(result).toBe(true)
      done()
    })
})

test('check if taken name available', (done) => {
  nameAvailable('ava')
    .then((result) => {
      expect(result).toBe(false)
      done()
    })
})
