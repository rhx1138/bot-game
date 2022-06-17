// let playerName = window.prompt('Please enter your name');
let playerName = "Jam";
let playerHealth = 100;
let playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

let enemyName = "Roboman";
let enemyHealth = 50;
let enemyAttack = 12;

let fight = () => {
    // window.alert("welcome to thunderdome");
    enemyHealth = enemyHealth - playerAttack;
    playerHealth = playerHealth - enemyAttack;
};

fight();



console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);
console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);



