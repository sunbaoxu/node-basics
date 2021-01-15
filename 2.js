console.group('获取参数------------2')

console.group('process.argv----参数数组---------------')
console.log(process.argv)

console.group(
  `1、第一个参数是 node 命令的完整路径。
2、第二个参数是正被执行的文件的完整路径
3、所有其他的参数从第三个位置开始
--------------------------------------------`)

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})



console.group('创建一个排除了前两个参数------------------------')

const args = process.argv.slice(2)

console.log(args);

console.group('将参数转为对象------------------')

const argObj = require('minimist')(process.argv.slice(2))
console.log(argObj)
console.log(argObj['name'])
