let lives = 10;
let number = Math.round(Math.random() * 100);
console.log(number);

function validate() {
    let guess = document.getElementById("guessNumber").value;

    if (guess !== "") {
        guess = parseInt(guess); // Convert guess to number
        if (guess === number) {
            location.href = './win.html';
        } else if (lives < 2) {
            location.href = './lose.html';
        } else if (guess > number) {
            document.getElementById("text").innerHTML = 'The entered number is too high...! Try again..!';
            lives -= 1;
            document.getElementById("lives_count").innerHTML = `Lives remaining: ${lives}`;
        } else {
            document.getElementById("text").innerHTML = 'The entered number is too low...! Try again..!';
            lives -= 1;
            document.getElementById("lives_count").innerHTML = `Lives remaining: ${lives}`;
        }
    } else {
        alert("Enter any number");
    }
}
