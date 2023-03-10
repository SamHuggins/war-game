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
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
        this.hand1 = [];
        this.hand2 = [];
    }
    
    //adds the suits and ranks elements to cards
    createCard(){
        console.log('Creating cards...');   //checks that createCard is working
        for (let suitCounter = 0; suitCounter < this.suits.length; suitCounter++){
//            console.log('Running suitCounter:', suitCounter);     //checks if suitCounter is running
            for (let rankCounter = 0; rankCounter < this.ranks.length; rankCounter ++){
//                console.log('Running rankCounter:', rankCounter); //checks if rankCounter is working
                this.cards.push(new Card(this.suits[suitCounter], this.ranks[rankCounter]));
                    
            }
        }
        console.log(this.cards); //logs deck
        this.shuffle();
    }

    //shuffles the cards 
    shuffle(){
        console.log('Shuffling cards...');
        for(let i = 0; i < this.cards.length; i++){
            let rng = Math.round(Math.random() * (this.cards.length - 1)); //makes a random number between 0 and 51
            [this.cards[i], this.cards[rng]] = [this.cards[rng], this.cards[i]];    //swaps cards[i] with a random element in the array
            
        }
        console.log(this.cards);    //checks that cards have been shuffled
        this.createHand();
    }

    createHand(){
        console.log('Creating hands...');
        this.hand1 = this.cards.slice(0, this.cards.length/2);
        this.hand2 = this.cards.slice(this.cards.length/2, this.cards.length);
        console.log(this.hand1);
        console.log(this.hand2);
    }
    
}

class Player{
    constructor(){
        this.name = this.name;
        this.hand = [];
        this.points = null;
    };
    //code that deals each player a hand
    // deal(){
    //     console.log('Dealing cards...')
    //     let newDeck = new Deck(); //makes a deck
    //     this.cards = newDeck.createCard(); //runs createCard
    //     console.log('This worked: ', this.cards);
        
    // }
}

class War{

 }





let newDeck = new Deck(); //makes a deck
newDeck.createCard(); //runs createCard






