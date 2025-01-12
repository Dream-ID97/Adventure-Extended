package main

import (
	"fmt"
	"os"
)

func clearScreen() {
	fmt.Print("\033[H\033[2J")
}

func printTitle() {
	fmt.Println("=====================================")
	fmt.Println("          Adventure Game            ")
	fmt.Println("=====================================")
}

func mainMenu() {
	clearScreen()
	printTitle()
	fmt.Println("1. Start Adventure")
	fmt.Println("2. Exit")
	fmt.Print("Choose an option: ")
	var choice int
	fmt.Scan(&choice)

	switch choice {
	case 1:
		arcOne()
	case 2:
		fmt.Println("Goodbye!")
		os.Exit(0)
	default:
		fmt.Println("Invalid choice. Please try again.")
		mainMenu()
	}
}

func arcOne() {
	clearScreen()
	printTitle()
	fmt.Println("You find yourself in a dense forest. The air is thick, and the sounds of nature surround you.")
	fmt.Println("1. Explore deeper into the forest.")
	fmt.Println("2. Follow a faint path to the left.")
	fmt.Print("What do you do? ")
	var choice int
	fmt.Scan(&choice)

	switch choice {
	case 1:
		arcTwo()
	case 2:
		badEnding("You followed the path, but it led to a cliff. You slipped and fell.")
	default:
		fmt.Println("Invalid choice. Try again.")
		arcOne()
	}
}

func arcTwo() {
	clearScreen()
	printTitle()
	fmt.Println("You venture deeper into the forest and find a mysterious cave.")
	fmt.Println("1. Enter the cave.")
	fmt.Println("2. Ignore the cave and keep walking.")
	fmt.Print("What do you do? ")
	var choice int
	fmt.Scan(&choice)

	switch choice {
	case 1:
		arcThree()
	case 2:
		neutralEnding("You ignored the cave and kept walking. Eventually, you found a way out of the forest.")
	default:
		fmt.Println("Invalid choice. Try again.")
		arcTwo()
	}
}

func arcThree() {
	clearScreen()
	printTitle()
	fmt.Println("Inside the cave, you find a glowing artifact resting on a pedestal.")
	fmt.Println("1. Take the artifact.")
	fmt.Println("2. Leave the artifact alone and explore further.")
	fmt.Print("What do you do? ")
	var choice int
	fmt.Scan(&choice)

	switch choice {
	case 1:
		badEnding("As you touch the artifact, the cave collapses. You are trapped forever.")
	case 2:
		trueEnding()
	default:
		fmt.Println("Invalid choice. Try again.")
		arcThree()
	}
}

func trueEnding() {
	clearScreen()
	printTitle()
	fmt.Println("You read the ancient texts and uncover the secrets of the artifact.")
	fmt.Println("It grants you immense power and you become the ruler of the forgotten realm.")
	fmt.Println("Congratulations! You found the True Ending!")
}

func badEnding(message string) {
	clearScreen()
	printTitle()
	fmt.Println(message)
	fmt.Println("Game Over!")
}

func neutralEnding(message string) {
	clearScreen()
	printTitle()
	fmt.Println(message)
	fmt.Println("Game Over!")
}

func main() {
	mainMenu()
}