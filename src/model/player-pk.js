function PlayerPk() {
}

PlayerPk.pk = function(playerOne, playerTwo) {
    var message = '';

    while (true) {
        if (playerOne.hp <= 0 && playerTwo.hp <= 0) {
            break;
        }
            message += this.roundText(playerOne, playerTwo);
    }

    return message;
};

PlayerPk.prototype.roundText = function(playerOne, playerTwo) {
    var result = '';
    result += playerOne.attack(playerTwo) + '\n';
    if (playerTwo.hp <= 0) {
        return;
    }

    result += playerTwo.attack(playerOne) + '\n';
    if (playerOne.hp <= 0) {
        return;
    }

    return result;
};

module.exports = PlayerPk;