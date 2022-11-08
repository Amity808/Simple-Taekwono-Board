

let blueScore = document.getElementById("score-blue")
let redScore = document.getElementById("red-score")

let onebEl = document.getElementById("one-b")
let twobEl = document.getElementById("two-b")
let threebEl = document.getElementById("three-b")

let onerEl = document.getElementById("one-r")
let tworEl = document.getElementById("two-r")
let threerEl = document.getElementById("three-r")

let count = 0
let countTwo = 0

function addBlueOne () {
    count += 1
    blueScore.textContent = count
}

function addBlueTwo() {
    count +=2
    blueScore.textContent = count
}

function addBlueThree() {
    count += 3
    blueScore.textContent = count
}

function addRedOne () {
    countTwo += 1
    redScore.textContent = countTwo
}

function addRedTwo() {
    countTwo += 2
    redScore.textContent = countTwo
}

function addRedThree() {
    countTwo += 3
    redScore.textContent = countTwo
}

let blueName = document.getElementById("atNameR")
