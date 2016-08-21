# RPG Game

### UT Coding Bootcamp Week 5 Homework - Trivia Game

Main game pseudocode:
* Show start button
 * Question/answers hidden until pressed

* When start is pressed:
 * Hide start button
 * Show question & answer buttons
 * > Answer buttons - show border onHover
 * Show and start 30s timer

* When answer is clicked OR timer runs out:
 * Stop timer
 * Indicate correct OR wrong OR out of time
 * Show associated picture / .gif
 * Add 1 to wins OR losses OR unanswered count
 * Timeout 5 sec
 * If all questions answered:
 * > Hide Timer
 * > Show results (wins, losses, unanswered)
 * > Show start over button
 * Else:
 * > Show next trivia question

* When start over is pressed:
 * Clear results page / start over button
 * Show first trivia question
