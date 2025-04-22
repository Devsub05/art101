/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 * @link   URL
 * @file   This files defines the MyClass class.
 * @author Devika Subramaniam.
 * @since  04.21.2025
 */

/** jshint {inline configuration here} */

// High-Level Goal: Build a digital version of Pictionary where players draw and guess words.

// 1. Start a Game
// - Start up game screen
// - Project title and instructions of the game
// - Wait for players to join or start

// 2. Set Up the Game
// - Gather a certain number of players (your choice)
// - Assign names to each player
// - Randomly determine the drawing order

// 3. Begin Game Loop
// - Repeat for every round or until the winning condition is met:
    // - Randomly determine who will draw
    // - Select a word for the drawer randomly
    // - The word should be hidden from the guessers

// 4. Drawing Phase
// - Display a drawing canvas to the drawer
// - Enable basic drawing tools (pen, color, erase, clear)
// - Start a timer to make the game more challenging

// 5. Guessing Phase (runs during drawing)
    // - Guessers can input guesses via chat or text box
    // - System checks if each guess matches the word
    // - If a guesser guesses correctly:
        // - End round
        // - Distribute points to guesser and drawer

// 6. End of Round
// - Show correct word (if no one guesses)
// - Update the scoreboard
// - Move to next player in the correct turn order

// 7. End Game
// - After a set number of rounds:
    // - Display final scores
    // - Announce the winner
    // - Offer option to play again or exit
