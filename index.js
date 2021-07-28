const express = require('express')
const app = express()
const port = 3000

const Player = require('./src/player.js');

let player1, player2;

app.set('view engine','ejs')
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res) => {
  res.render("index.ejs")
})
app.post('/player1-init', (req, res) => {
    player1 = new Player(req.body.inputplayer1);
    player2 = new Player(req.body.inputplayer2);

    res.render("player1.ejs", {
        inputplayer1: player1.name,
        inputplayer2: player2.name,
        player1HP: player1.HP,
        player2HP: player2.HP,
        confirmHit: ""

    })
})

app.post('/player1', (req, res) => {
  res.render("player1.ejs",{
    inputplayer1: player1.name,
        inputplayer2: player2.name,
        player1HP: player1.HP,
        player2HP: player2.HP,
        confirmHit: ""
  })
})

app.post('/player1-confirm-hit', (req, res) => {
  player2.takeHit()
  //if HP <= 0 then res.render P2 defeat
  if (player2.HP <=0){
    res.render("player2-defeat", {})
  }
  //else Code below
  else{
    res.render("player1.ejs", {
      inputplayer1: player1.name,
        inputplayer2: player2.name,
        player1HP: player1.HP,
        player2HP: player2.HP,
        confirmHit: "Aw that hurt!"
      })
  }
})
app.post('/player2', (req, res) => {
  res.render("player2.ejs",{
    inputplayer1: player1.name,
        inputplayer2: player2.name,
        player1HP: player1.HP,
        player2HP: player2.HP,
        confirmHit: ""
  })
})

app.post('/player2-confirm-hit', (req, res) => {
  player1.takeHit()
    //if HP <= 0 then res.render P2 defeat
    if (player1.HP <=0){
      res.render("player1-defeat", {})
    }
    //else Code below
    else{
      res.render("player2.ejs", {
      inputplayer1: player1.name,
        inputplayer2: player2.name,
        player1HP: player1.HP,
        player2HP: player2.HP,
        confirmHit: "Aw that hurt!"
      })
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

