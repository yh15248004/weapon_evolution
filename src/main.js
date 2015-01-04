var Effect = require('./model/effect');
var Player = require('./model/player');
var Soldier = require('./model/soldier');
var PlayerPk = require('./model/player-pk');
var Weapon = require('./model/weapon');
var Armor = require('./model/armor');

function weaponEvolution() {
  var qualityStick = new Weapon('优质的木棒', 4, new Effect('中毒', 0.4, 1, 3));
  var bronzeArmor = new Armor('青铜铠甲', 4);
  var playerOne = new Soldier('张三', '战士', 50, 2, qualityStick, bronzeArmor);
  var playerTwo = new Player('李四', '普通人', 49, 7);
  var playerPk = new PlayerPk(playerOne, playerTwo);
  console.log(playerPk.pk());
}
exports.weaponEvolution = weaponEvolution;
weaponEvolution();
