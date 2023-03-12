let expect = require("chai").expect;


let Deck = require('./scripts').Deck

describe('war game', function () {
    describe('deck', function () {
      const deck = new Deck()
      deck.createCard()
      it('creates a deck of 52 cards', function () {
        expect(deck.cards.length).to.equal(52)
      });
  
      it('divides the deck into two hands of 26 cards', function () {
        expect(deck.hand1.length).to.equal(26)
        expect(deck.hand2.length).to.equal(26)
      });
    });
  });
  
  let Game = require('./scripts').Game

  describe('war game', function (){
    describe('game', function (){
      const game = new Game()
      game.startGame()
      it('calculates points', function() {
        expect(game.player1.points).to.be.above(-1)
        expect(game.player2.points).to.be.above(-1)
      })
    })
  })