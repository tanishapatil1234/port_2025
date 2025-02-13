const userName = "DeGen"; 
let height = 53; 
let inGoodHealth = true; 


const isEligibleForRidingRollerCoaster = (height >= 53) && inGoodHealth;


if (isEligibleForRidingRollerCoaster) {
    console.log("Congratulations, " + userName + "! You can ride this roller coaster.");
} else {
    console.log("Sorry, " + userName + "you can't ride this roller coaster.");
}