const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')
app.use(express.urlencoded({ extended : true}))

app.get('/', (req, res) => {
  res.render("index.ejs")
})
let player2HP = 1000000
// if (){
//   player2HP -= 10
// }
app.post('/player1', (req, res) => {
    res.render("player1.ejs", {
        
        inputplayer1: req.body.inputplayer1,
        inputplayer2: req.body.inputplayer2,
        player2HP: player2HP
    })
})
app.post('/player1', (req, res) => {
  res.render("player1.ejs", { 
        attack1: req.body.attack1,
        attack1: player2HP -10



  })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

