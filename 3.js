console.group('console-----------')

console.log(`
%s 会格式化变量为字符串
%d 会格式化变量为数字
%i 会格式化变量为其整数部分
%o 会格式化变量为对象
`)

console.log('我的%s已经%d岁', '猫', 2)




const x = 1
const y = 2
console.group('console.count--计算---------')
console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
  'y 的值为 ' + y + ' 且已经检查了几次？'
)



const oranges = ['橙子', '橙子']
const apples = ['苹果']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

console.group('计算耗时--------time()和 timeEnd()-----------')

const doSomething = () => {
  console.log('开始测试')
  for(var i=0;i<10;i++){
    console.log(i)
  }
}
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

console.group('着色--------------------------------')

console.log('\x1b[33m%s\x1b[0m', '使用转义序列输出黄色')

const chalk = require('chalk')
//cnpm i chalk
console.log(chalk.red('通过chalk输出红色'))

console.log(chalk.bgGreen('chalk.bgGreen带背景'))


console.group('进度条--------------------------------')
//cnpm i progress --save-dev
const ProgressBar = require('progress')

const bar = new ProgressBar('downloading[:bar ] :rate/bps :percent :etas', { 
  total: 10 ,
  incomplete:'.',
  complete:'=',
  callback (){
    console.log('进度 加载完成---')
  }
})
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)
