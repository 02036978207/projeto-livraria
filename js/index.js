const express = require('express')
const app = express()
const port = 3000

app.post('/thiago', (req, res) => {
  res.send('Hello World!')
})



app.get('/deleteId', (req, res) => {
  res.send('Delete!')
})

app.get('/update', (req, res) => {
  res.send('update!')
})



app.get('/read', (req, res) => {
  res.send('read!')
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
