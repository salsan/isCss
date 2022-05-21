const fs = require('fs')
const assert = require('assert')
const isCss = require('../src/index')

describe('Css validator', function () {
  it('Test Valid CSS String', function () {
    assert.ok(isCss('body { font-size: 12px; }'))
  })
  it('Test not valid CSS String', function () {
    assert.ok(!(isCss('fgdfgdfgdfg')))
  })
  it('Test valid CSS file', function () {
    const data = fs.readFileSync('./test/assets/valid.css',
      { encoding: 'utf8', flag: 'r' })
    assert.ok(isCss(data))
  })
  it('Test wrong file', function () {
    const data = fs.readFileSync('./test/assets/zip.css',
      { encoding: 'utf8', flag: 'r' })
    assert.ok(!(isCss(data)))
  })
  it('Test empty CSS file', function () {
    const data = fs.readFileSync('./test/assets/empty.css',
      { encoding: 'utf8', flag: 'r' })
    assert.ok(!(isCss(data)))
  })
})
