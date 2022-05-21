import { CssInterface } from './lib/CssInterface'
const css = require('css')

export = function isCSS (data:string): boolean {
  const value:CssInterface = css.parse(data, { silent: true })

  if ((value.stylesheet.parsingErrors.length > 0) || (value.stylesheet.rules.length === 0)) {
    return false
  } else {
    return true
  }
}
