let playerName = window.prompt('Please enter your name');
let playerHealth = 100;
let playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

let enemyName = "Roboman";
let enemyHealth = 50;
let enemyAttack = 12;

enemyHealth = enemyHealth - playerAttack;
playerHealth = playerHealth - enemyAttack;


let fight = () => {
    window.alert("welcome to thunderdome");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT") {

        enemyHealth = enemyHealth - playerAttack;
        
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);

        // check enemy health
        if (enemyHealth <= 0) {
            window.alert(`${enemyName} has been defeated`);
        } else {
            window.alert(`${enemyName} still has ${enemyHealth} health left.`);
        }



        playerHealth = playerHealth - enemyAttack;
        
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);

        // check player health
        if (playerHealth <= 0) {
            window.alert(`${playerName} has been defeated`);
        } else {
            window.alert(`${playerName} still has ${playerHealth} health left.`);
        }

    } else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip");
    } else {
        window.alert('You need to choose an option');
    }
};

fight();