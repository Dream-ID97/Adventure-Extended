#include <iostream>
#include <cstdlib>

using namespace std;

void clearScreen() {
    system("clear"); // Linux/MacOS
    // system("cls"); // Windows
}

void printTitle() {
    cout << "=====================================" << endl;
    cout << "          Adventure Game            " << endl;
    cout << "=====================================" << endl;
}

void mainMenu() {
    clearScreen();
    printTitle();
    cout << "1. Start Adventure" << endl;
    cout << "2. Exit" << endl;
    cout << "Choose an option: ";
    int choice;
    cin >> choice;

    switch (choice) {
        case 1:
            arcOne();
            break;
        case 2:
            cout << "Goodbye!" << endl;
            exit(0);
        default:
            cout << "Invalid choice. Please try again." << endl;
            mainMenu();
    }
}

void arcOne() {
    clearScreen();
    printTitle();
    cout << "You find yourself in a dense forest. The air is thick, and the sounds of nature surround you." << endl;
    cout << "1. Explore deeper into the forest." << endl;
    cout << "2. Follow a faint path to the left." << endl;
    cout << "What do you do? ";
    int choice;
    cin >> choice;

    switch (choice) {
        case 1:
            arcTwo();
            break;
        case 2:
            badEnding("You followed the path, but it led to a cliff. You slipped and fell.");
            break;
        default:
            cout << "Invalid choice. Try again." << endl;
            arcOne();
    }
}

void arcTwo() {
    clearScreen();
    printTitle();
    cout << "You venture deeper into the forest and find a mysterious cave." << endl;
    cout << "1. Enter the cave." << endl;
    cout << "2. Ignore the cave and keep walking." << endl;
    cout << "What do you do? ";
    int choice;
    cin >> choice;

    switch (choice) {
        case 1:
            arcThree();
            break;
        case 2:
            neutralEnding("You ignored the cave and kept walking. Eventually, you found a way out of the forest.");
            break;
        default:
            cout << "Invalid choice. Try again." << endl;
            arcTwo();
    }
}

void arcThree() {
    clearScreen();
    printTitle();
    cout << "Inside the cave, you find a glowing artifact resting on a pedestal." << endl;
    cout << "1. Take the artifact." << endl;
    cout << "2. Leave the artifact alone and explore further." << endl;
    cout << "What do you do? ";
    int choice;
    cin >> choice;

    switch (choice) {
        case 1:
            badEnding("As you touch the artifact, the cave collapses. You are trapped forever.");
            break;
        case 2:
            trueEnding();
            break;
        default:
            cout << "Invalid choice. Try again." << endl;
            arcThree();
    }
}

void trueEnding() {
    clearScreen();
    printTitle();
    cout << "You read the ancient texts and uncover the secrets of the artifact." << endl;
    cout << "It grants you immense power and you become the ruler of the forgotten realm." << endl;
    cout << "Congratulations! You found the True Ending!" << endl;
}

void badEnding(string message) {
    clearScreen();
    printTitle();
    cout << message << endl;
    cout << "Game Over!" << endl;
}

void neutralEnding(string message) {
    clearScreen();
    printTitle();
    cout << message << endl;
    cout << "Game Over!" << endl;
}

int main() {
    mainMenu();
    return 0;
}