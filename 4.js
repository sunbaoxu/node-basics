// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readline.question(`你叫什么名字?`, name => {
//   console.log(`你好 ${name}!`)

//   readline.close();
  
// })





const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "你叫什么名字?"
  },
  {
    type: 'input',
    name: 'age',
    message: "你多大了?"
  },
  {
    type: 'input',
    name: 'address',
    message: "你住在哪里?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(answers,'aaaa')
  console.log(`你好 ${answers['name']}!`)
  console.log(`你 ${answers['age']} 岁!`)
  console.log(`你住在 ${answers['address']}!`)
})



