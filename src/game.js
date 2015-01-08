function Game(player_a, player_b, logger) {
    this.player_a = player_a;
    this.player_b = player_b;
    this.logger = logger;
}

Game.prototype.fight = function () {
    var player_a = this.player_a;
    var player_b = this.player_b;
    while (player_a.isAlive() && player_b.isAlive()) {
        player_a.attack(player_b);
        if (this.player_b.isAlive()) {
            player_b.attack(player_a);
        }
    }
    if (player_a.isAlive()) {
        this.logger.log(player_b.name + "被打败了.");
    } else {
        this.logger.log(player_a.name + "被打败了.");
    }

}

module.exports = Game;