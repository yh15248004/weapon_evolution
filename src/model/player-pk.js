function PlayerPk(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
}

PlayerPk.prototype.pk = function() {
    var message = '';

    while (true) {
        message += this.roundText(this.playerOne, this.playerTwo);

        if (this.playerOne.hp <= 0 || this.playerTwo.hp <= 0) {
            break;
        }

    }

    return message;
};

PlayerPk.prototype.roundText = function(playerOne, playerTwo) {
    var result = '';

    result += playerOne.state.impact(playerOne);

    if (!playerOne.alive()) {
        return result;
    }
    result += playerOne.attack(playerTwo);

    result += playerTwo.state.impact(playerOne);

    if (!playerTwo.alive()) {
        return result;
    }

    result += playerTwo.attack(playerOne);

    return result;

};

module.exports = PlayerPk;