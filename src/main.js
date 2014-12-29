var Player = require('./model/player');
var PlayerPk = require('./model/player-pk');

function weaponEvolution() {
  var playerOne = new Player('张三',50,9);
  var playerTwo = new Player('李四',49,8);
  var palyerPk = new PlayerPk(playerOne, playerTwo);
  console.log(palyerPk.pk());
}
exports.weaponEvolution = weaponEvolution;
weaponEvolution();
