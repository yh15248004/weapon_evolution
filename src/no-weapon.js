var NoEffect = require("./effect/no-effect.js");

function NoWeapon(){
    this.ap = 0;
    this.effect = new NoEffect();
}
NoWeapon.prototype.get_use_string = function(){
    return "";
}
module.exports = NoWeapon;