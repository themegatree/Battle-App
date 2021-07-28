const express = require('express')
const app = express()
const port = 3000

const Player = require('./src/player.js');

let player1, player2;

app.set('view engine','ejs')
app.use(express.urlencoded({ extended : true}))

app.get('/', (req, res) => {
  res.render("index.ejs")
})
app.post('/player1', (req, res) => {
  player1 = new Player(req.body.inputplayer1);
  player2 = new Player(req.body.inputplayer2);

    res.render("player1.ejs", {
        inputplayer1: player1.name,
        inputplayer2: player2.name,
        player2HP: player2.HP,
    })
})
app.post('/player1', (req, res) => {
  console.log("here")

  res.render("player1.ejs", {
    inputplayer1: player1.name,
    inputplayer2: player2.name,
    player2HP: player2.HP,
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

