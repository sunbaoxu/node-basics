
const b = require('./b')


const c = require('./c')
/**
 * 或
 * const car = require('./c').car
 */

console.log(b,'公开b文件的对象')
console.log(c,'公开c文件的对象')