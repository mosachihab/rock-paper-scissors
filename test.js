let playoption = ["rock", "paper", "scissor"]
let userscore = 0
let pcscore = 0
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const userscore_span = document.querySelector("#user-score")
const pcscore_span = document.querySelector("#pc-score")
const div_result = document.querySelector("#result")


function l3bet_computer() {
    const random = Math.floor(Math.random() * playoption.length)
    return playoption[random]
}

function play_round(i5tiyar_user) {
    const computer_choice = l3bet_computer()
    if (computer_choice == i5tiyar_user) {
        draw()
    } else if (
        (computer_choice == "rock" && i5tiyar_user == "scissor") ||
        (computer_choice == "scissor" && i5tiyar_user == "paper") ||
        (computer_choice == "paper" && i5tiyar_user == "rock")
    ) {
        lose()
    } else if (
        (computer_choice == "scissor" && i5tiyar_user == "rock") ||
        (computer_choice == "paper" && i5tiyar_user == "scissor") ||
        (computer_choice == "rock" && i5tiyar_user == "paper")
    ) {
        win()
    }
}

function draw() {
    div_result.textContent = "draw"
}

function lose() {
    pcscore++
    pcscore_span.textContent = pcscore
    div_result.textContent = "player loss"
}

function win() {
    userscore++
    userscore_span.textContent = userscore
    div_result.textContent = "player win"
}

btn1.addEventListener("click", rock)
btn2.addEventListener("click", paper)
btn3.addEventListener("click", scissor)

function rock() {
    play_round("rock")
    if (pcscore === 5 || userscore === 5) {
        btn1.removeEventListener("click", rock)
        btn2.removeEventListener("click", paper)
        btn3.removeEventListener("click", scissor)
    }

}

function paper() {
    play_round("paper")
    if (pcscore === 5 || userscore === 5) {
        btn1.removeEventListener("click", rock)
        btn2.removeEventListener("click", paper)
        btn3.removeEventListener("click", scissor)
    }

}

function scissor() {
    play_round("scissor")
    if (pcscore === 5 || userscore === 5) {
        btn1.removeEventListener("click", rock)
        btn2.removeEventListener("click", paper)
        btn3.removeEventListener("click", scissor)
    }

}