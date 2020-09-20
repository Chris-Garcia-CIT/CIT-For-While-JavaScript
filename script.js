var PlayerVsDragonEle = document.body.querySelector(".PlayerVsDragon");

var DragonHP=10;
var PlayerHP=5;

var PlayerDamage=Number;
  Math.floor(Math.random() * PlayerDamage) + 1;
  PlayerDamage=prompt("How Much Damage Do You Want to Do?");
  while(Number<6){
  repeat=prompt("How Much Damage Do You Want to Do?"); }
var DragonDamage=Number;
  Math.floor(Math.random() * 2) + 1;
  PlayerVsDragonEle.innerHTML=PlayerDamage;
  if(isNaN(PlayerDamage)){
  PlayerVsDragonEle.innerHTML="No That's Not a Number Idiot!"; }

PlayerHP= PlayerHP - DragonDamage;
DragonHP= DragonHP - PlayerDamage;

if(PlayerHP <=0 ) {
document.body.querySelector(".DragonWins").innerHTML="You Have Died...";
}
if(DragonHP <=0 ) {
document.body.querySelector(".PlayerWins").innerHTML="You Emerged Victorious!";
}

document.body.querySelector(".PlayerVsDragon");