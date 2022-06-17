let playerName = window.prompt('Please enter your name');
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

console.log(playerName, playerAttack, playerHealth, playerMoney);

let enemyName = "Roboman";
let enemyNames = ["Zem", "Noak", "Demak"];
let enemyHealth = 50;
let enemyAttack = 12;

enemyHealth = enemyHealth - playerAttack;
playerHealth = playerHealth - enemyAttack;


let fight = () => {
    window.alert("welcome to thunderdome");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT") {

        enemyHealth = enemyHealth - playerAttack;
        
        console.log(`${playerName} attacked ${enemyNames}. ${enemyNames} now has ${enemyHealth} health remaining.`);

        // check enemy health
        if (enemyHealth <= 0) {
            window.alert(`${enemyName} has been defeated`);
        } else {
            window.alert(`${enemyName} still has ${enemyHealth} health left.`);
        }



        playerHealth = playerHealth - enemyAttack;
        
        console.log(`${enemyNames} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);

        // check player health
        if (playerHealth <= 0) {
            window.alert(`${playerName} has been defeated`);
        } else {
            window.alert(`${playerName} still has ${playerHealth} health left.`);
        }

    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        let confirmSkip = window.confirm("are you sure you want to skip?");

        // if yes, leave fight
        if (confirmSkip) {
            window.alert(`${playerName} will skip this fight`);

            //subtract money for skipping turn
            playerMoney = playerMoney -2;

            window.alert(`You have ${playerMoney} left`)
            console.log(`${playerName} has $${playerMoney} left`);
        }

    } else {
        for(var i = 0; i < enemyNames.length; i++) {
            debugger;
            fight(enemyNames[i]);
        }
        
    }
};

fight();

// for(var i = 0; i < enemyNames.length; i++) {
//     fight(enemyNames[i]);
//     }