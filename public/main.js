const deck = []

const createDeck = () => {
  const suit = ['Diamonds', 'Clubs', 'Spades', 'Hearts']
  const rank = [
    'Ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King'
  ]

  // create the deck based on the suits and rank array
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      deck.push(rank[j] + ' of ' + suit[i])
    }
  }
  // nested for-loop
}

let j = 0
let i = 0

const shuffleDeck = () => {
  for (i = 52; i >= 1; i--) {
    j = Math.floor(Math.random() * i)

    const swapper = deck[j]
    deck[j] = deck[i]
    deck[i] = swapper
  }
}

const main = () => {
  createDeck()
  shuffleDeck()
}

const clickDeck = () => {
  document.querySelector('.face-up').textContent = deck.pop()
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.face-down').addEventListener('click', clickDeck)
