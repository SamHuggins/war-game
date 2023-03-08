class Card {
    constructor(suit, rank){
        this.suit = suit;
        this.rank = rank
    }
    describe(){
        return`${this.rank} of ${this.suit}`
    }
}

class Deck{
    constructor(){
        this.cards = [];
        this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']

    }
    
    createCard(){
        for (let suitCounter = 1; suitCounter >= 4; suitCounter++){
            for (let rankCounter = 1; rankCounter >= 13; rankCounter ++){
                suits[suitCounter];
                ranks[rankCounter];
                this.Deck.cards.push(new Card(this.suits, this.ranks));
                    
            }
        }
        this.shuffle();
    }

    shuffle(){
        //add shuffle code
    }
    
}

class Player{
    constructor(){
        this.name = [];
        this.hand = [];
        this.points = null;
    }
    
    //make 2 players
    this.deal();

    deal(){
        //code that deals each playera hand
    }
}



