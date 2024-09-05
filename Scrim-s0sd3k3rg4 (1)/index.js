let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
homeEl.textContent = 0
guestEl.textContent = 0


function homeOnePoint() {
    let onePoint = parseInt(homeEl.textContent);
    homeEl.textContent = onePoint + 1
}
function homeTwoPoints() {
    let twoPoints = parseInt(homeEl.textContent)
    homeEl.textContent = twoPoints + 2 
}
function homeThreePoints() {
    let threePoints = parseInt(homeEl.textContent)
    homeEl.textContent = threePoints + 3 
}
function guestOnePoint() {
    let onePoint = parseInt(guestEl.textContent);
    guestEl.textContent = onePoint + 1
}
function guestTwoPoints() {
    let twoPoints = parseInt(guestEl.textContent)
    guestEl.textContent = twoPoints + 2 
}
function guestThreePoints() {
    let threePoints = parseInt(guestEl.textContent)
    guestEl.textContent = threePoints + 3 
}

let clearhome = document.getElementById("home-el")
let clearGuest = document.getElementById("guest-el")

function clearEl() {
    clearhome.textContent = 0
    clearGuest.textContent = 0
}