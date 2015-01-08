var NoEffect = require("./effect/no-effect.js");

function Weapon(name, ap, effect){
    this.name = name;
    this.ap = ap;
    this.effect = effect ?  effect : new NoEffect();
}

Weapon.prototype.get_use_string = function(){
    return "用" + this.name;
}
module.exports = Weapon;