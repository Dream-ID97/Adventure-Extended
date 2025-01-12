const readline = require('readline');
const figlet = require('figlet');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function clearScreen() {
  console.clear();
}

function displayFiglet(text, color, callback) {
  figlet(text, (err, data) => {
    if (err) {
      console.log(chalk.red("Error generating art."));
      callback();
    } else {
      console.log(chalk[color](data));
      callback();
    }
  });
}

function startGame() {
  clearScreen();
  displayFiglet("Adventure Game", "cyan", () => {
    console.log(chalk.green("Welcome to the Adventure Game!"));
    console.log(chalk.yellow("Your choices will shape your destiny."));
    console.log(chalk.blue("Can you find the True Ending?"));
    console.log(chalk.magenta("Presented by: Vira_Enterprise"));
    mainMenu();
  });
}

function mainMenu() {
  console.log("\n" + chalk.magenta("1. Start the Adventure"));
  console.log(chalk.magenta("2. Exit Game"));
  rl.question(chalk.cyan("Choose an option: "), (choice) => {
    if (choice === "1") {
      arcOne();
    } else if (choice === "2") {
      console.log(chalk.red("Goodbye!"));
      rl.close();
    } else {
      console.log(chalk.red("Invalid choice. Try again."));
      mainMenu();
    }
  });
}

function arcOne() {
  clearScreen();
  displayFiglet("Arc One", "green", () => {
    console.log(chalk.yellow("You find yourself in a dense forest. The air is thick, and the sounds of nature surround you."));
    console.log(chalk.blue("1. Explore deeper into the forest."));
    console.log(chalk.blue("2. Follow a faint path to the left."));
    rl.question(chalk.cyan("What do you do? "), (choice) => {
      if (choice === "1") {
        arcTwo();
      } else if (choice === "2") {
        badEnding("You followed the path, but it led to a cliff. You slipped and fell. The adventure ends here.");
      } else {
        console.log(chalk.red("Invalid choice. Try again."));
        arcOne();
      }
    });
  });
}

function arcTwo() {
  clearScreen();
  displayFiglet("Arc Two", "yellow", () => {
    console.log(chalk.yellow("You venture deeper into the forest and find a mysterious cave."));
    console.log(chalk.blue("1. Enter the cave."));
    console.log(chalk.blue("2. Ignore the cave and keep walking."));
    rl.question(chalk.cyan("What do you do? "), (choice) => {
      if (choice === "1") {
        arcThree();
      } else if (choice === "2") {
        neutralEnding("You ignored the cave and kept walking. Eventually, you found a way out of the forest. The adventure ends here.");
      } else {
        console.log(chalk.red("Invalid choice. Try again."));
        arcTwo();
      }
    });
  });
}

function arcThree() {
  clearScreen();
  displayFiglet("Arc Three", "magenta", () => {
    console.log(chalk.yellow("Inside the cave, you find a glowing artifact resting on a pedestal."));
    console.log(chalk.blue("1. Take the artifact."));
    console.log(chalk.blue("2. Leave the artifact alone and explore further."));
    rl.question(chalk.cyan("What do you do? "), (choice) => {
      if (choice === "1") {
        badEndingUltimate("As you touch the artifact, the cave collapses. You are trapped forever in darkness.");
      } else if (choice === "2") {
        arcFour();
      } else {
        console.log(chalk.red("Invalid choice. Try again."));
        arcThree();
      }
    });
  });
}

function arcFour() {
  clearScreen();
  displayFiglet("Arc Four", "red", () => {
    console.log(chalk.yellow("You explore deeper into the cave and find an ancient library filled with books."));
    console.log(chalk.blue("1. Read the books to uncover the truth."));
    console.log(chalk.blue("2. Ignore the books and look for an exit."));
    rl.question(chalk.cyan("What do you do? "), (choice) => {
      if (choice === "1") {
        trueEnding();
      } else if (choice === "2") {
        badEnding("You wandered aimlessly and got lost in the cave. The adventure ends here.");
      } else {
        console.log(chalk.red("Invalid choice. Try again."));
        arcFour();
      }
    });
  });
}

function villainArc() {
  clearScreen();
  displayFiglet("Villain Arc", "red", () => {
    console.log(chalk.red("A dark figure appears in front of you. It is the villain, the Shadow King."));
    console.log(chalk.blue("1. Fight the Shadow King."));
    console.log(chalk.blue("2. Try to negotiate with him."));
    rl.question(chalk.cyan("What do you do? "), (choice) => {
      if (choice === "1") {
        badEndingUltimate("You fought bravely, but the Shadow King overpowered you. You were defeated.");
      } else if (choice === "2") {
        villainTrueEnding("The Shadow King, impressed by your courage, offers you a truce. You join forces and conquer the world together.");
      } else {
        console.log(chalk.red("Invalid choice. Try again."));
        villainArc();
      }
    });
  });
}

function dominationArc() {
  clearScreen();
  displayFiglet("Domination Arc", "yellow", () => {
    console.log(chalk.yellow("You decide to take control. You will rule the world."));
    console.log(chalk.blue("1. Gather an army to start your conquest."));
    console.log(chalk.blue("2. Use the artifact's power to dominate the land."));
    rl.question(chalk.cyan("What do you do? "), (choice) => {
      if (choice === "1") {
        badEnding("Your army was too small to fight the opposition. You were overthrown.");
      } else if (choice === "2") {
        trueEnding();
      } else {
        console.log(chalk.red("Invalid choice. Try again."));
        dominationArc();
      }
    });
  });
}

function villainTrueEnding(message) {
  clearScreen();
  displayFiglet("Villain True Ending", "green", () => {
    console.log(chalk.green(message));
    console.log(chalk.green("Together, you and the Shadow King rule over the world with an iron fist."));
    console.log(chalk.green("You become the most feared ruler in history."));
    rl.close();
  });
}

function trueEnding() {
  clearScreen();
  displayFiglet("True Ending", "cyan", () => {
    console.log(chalk.green("You read the books and uncover the secrets of the artifact."));
    console.log(chalk.green("The artifact is a key to an ancient kingdom hidden within the cave."));
    console.log(chalk.green("You become the ruler of this forgotten realm, bringing prosperity and peace."));
    console.log(chalk.yellow("Congratulations! You found the True Ending!"));
    displayCredit();
  });
}

function badEnding(message) {
  clearScreen();
  displayFiglet("Bad Ending", "red", () => {
    console.log(chalk.red(message));
    rl.close();
  });
}

function badEndingUltimate(message) {
  clearScreen();
  displayFiglet("Ultimate Bad Ending", "red", () => {
    console.log(chalk.red(message));
    rl.close();
  });
}

function neutralEnding(message) {
  clearScreen();
  displayFiglet("Neutral Ending", "yellow", () => {
    console.log(chalk.yellow(message));
    rl.close();
  });
}

function displayCredit() {
  clearScreen();
  displayFiglet("Credits", "magenta", () => {
    console.log(chalk.green("Game created by:"));
    console.log(chalk.green("A156f9e0"));
    console.log(chalk.green("All rights reserved (C) 2025"));
    console.log(chalk.green("Special thanks to all players who completed the True Ending!"));
    rl.close();
  });
}

startGame();