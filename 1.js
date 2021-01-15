const express = require('express')
const app = express()

console.group('启动服务-------')

app.get('/', (req, res) => {
  res.send('你好')
})

const server = app.listen(3000, () => {
  console.log('服务器已就绪')
})
setTimeout(()=>{
  // console.log(process.env ,'aaaaaa')
  process.on('SIGTERM', () => {
    server.close(() => {
      console.log('进程已终止')
    })
  })
},3000)