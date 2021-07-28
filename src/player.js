class Player {
    constructor(name){
        this.name = name,
        this.HP = 1000000
    }
    takeHit() {this.HP -= 10}
}

module.exports = Player;