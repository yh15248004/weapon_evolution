var Player = require('./model/player');
var PlayerPk = require('./model/player-pk');
var Weapon = require('./model/weapon');
var Armor = require('./model/armor');

function weaponEvolution() {
  var qualityStick = new Weapon('优质的木棒', 8);
  var bronzeArmor = new Armor('青铜铠甲', 4);
  var playerOne = new Player('张三','战士',50,9,qualityStick,bronzeArmor);
  var playerTwo = new Player('李四','普通人',49,8);
  var palyerPk = new PlayerPk(playerOne, playerTwo);
  console.log(palyerPk.pk());
}
exports.weaponEvolution = weaponEvolution;
weaponEvolution();
