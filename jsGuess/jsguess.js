function guessGame() {
    var user = 1
    var player = 2
    var count = 1

    while (user != player) {
        if (user == count) {
            user = prompt('Enter a positive number:')
            count++
        }
        player = prompt('Guess a positive number')
        guess()
    }

    function guess() {
        if (player > user) {
            alert('Guess a lower number')
        }

        if (player < user) {
            alert('Guess a higher number')
        }

        if (player == user) {
            alert('You guessed the right number!')
        }
    }
}
