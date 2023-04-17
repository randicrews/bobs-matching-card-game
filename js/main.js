
let arena = document.getElementById('arena')
let matches = []
// deck of cards w pictures
const unshuffledCards = [
    {   number: 1,
        char: 'tina'
    },
    {   number: 2,
        char: 'tina'
    },
    {   number: 1,
        char: 'louise'
    },
    {   number: 2,
        char: 'louise'
    },
    {   number: 1,
        char: 'gene'
    },
    {   number: 2,
        char: 'gene'
    },
    {   number: 1,
        char: 'bob'
    },
    {   number: 2,
        char: 'bob'
    },
    {   number: 1,
        char: 'teddy'
    },
    {   number: 2,
        char: 'teddy'
    },
    {   number: 1,
        char: 'linda'
    },
    {   number: 2,
        char: 'linda'
    },
]
console.log(unshuffledCards, 'unshuffled')
console.log(unshuffledCards[0], 'unshuffled 1')
let slots = Array.from(document.querySelectorAll('div'))
// shuffle the cards
let shuffledCards = unshuffledCards.sort((a, b) => 0.5 - Math.random())
// display cards in DOM 
console.log(shuffledCards, 'shuffled')
console.log(shuffledCards[0], 'shuffled 1')
function makeCard(card) {
    let slot = document.createElement('div');
    slot.style.background = `url('css/${card.char}.jpeg')`
    slot.style.backgroundSize = "cover"
    slot.style.backgroundRepeat = "no-repeat"
    slot.style.backgroundPosition = "center"
    return slot;
}
function showCards() {
    shuffledCards.forEach(card => {
        arena.appendChild(makeCard(card));
    });
    // console.log(shuffledCards);
    return shuffledCards;
}
showCards()
slots = Array.from(document.querySelectorAll('div'))
console.log(slots)
// hide cards
function hide(){
    slots.forEach(slot => slot.classList.add('hidden'))
}
setTimeout(hide, 1300)
console.log(slots)
// flipping over two cards at a time
let guesses = []
slots.forEach((slot) => {
    slot.addEventListener('click', guess)
    })
function guess(e){
    if (e.target != null && guesses.length < 2 && !guesses.includes(e.target)){
        e.target.classList.toggle('hidden')
        guesses.push(e.target)
    }
    // if the two cards match, stay face up 
    if (guesses.length == 2 && guesses[0].style['background-image'] == guesses[1].style['background-image']){
        console.log('CORRECT: MATCH')
        matches.push(guesses[0])
        matches.push(guesses[1])
        console.log(guesses, 'guesses')
        guesses.forEach((thing) => thing.removeEventListener('click', guess))
        guesses = []
    }
    // if they don't match, turn them back over 
    if (guesses.length == 2 && guesses[0].style['background-image'] != guesses[1].style['background-image']){
        console.log('INCORRECT: NOT A MATCH')
        guesses[0].classList.toggle('hidden')
        guesses[1].classList.toggle('hidden')
        guesses = []
    }
    // game ends when all face up 
    else if (matches.length == 12) {
        console.log('winwinwinwinwiwniwnwinwiwnwinwin')
        document.querySelector('h1').innerText = 'Flipping fantastic! You matched all the Belchers!'
    }
}
document.getElementById('refresh').addEventListener('click', refresh)
function refresh(){
    location.reload()
}

