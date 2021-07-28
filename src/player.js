class Player {
    constructor(name){
        this.name = name,
        this.HP = 20
    }
    takeHit() {this.HP -= 10}
}

module.exports = Player;