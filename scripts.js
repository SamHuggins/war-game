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
        this.hand1 = this.cards.slice(0, this.cards.length/2); //takes the first half of cards array for hand1
        this.hand2 = this.cards.slice(this.cards.length/2, this.cards.length);  //takes second half of cards array for hand 2
        // console.log(this.hand1);    //shows hand1 works
        // console.log(this.hand2);    //shows hand2 works
    }
    
}

class Player{
    constructor(name, hand, points){
        this.name = this.name;
        this.hand = [];
        this.points = 0;
    };

    describe(){
        console.log(`${this.name} has ${this.hand}`)
    }
}

class Game{
    constructor(){
        this.player1 = this.player1
        this.player2 = this.player2
        this.newDeck = this.newDeck

    }

    startGame(){
        this.newDeck = new Deck();  //created a deck
        this.newDeck.createCard();  //runs createCard, shuffle, and create hand
        console.log('Starting game...', this.newDeck);
        
        this.player1 = new Player();    //creates player 1
            this.player1.name = 'Player 1';
            this.player1.hand = this.newDeck.hand1;

        this.player2 = new Player();    //creates player 2
            this.player2.name = 'Player 2';
            this.player2.hand = this.newDeck.hand2;
        this.runGame(); 
    }

    runGame(){
        console.log('Running game...');
        for(let i = 0; i < 26; i++){
            console.log(this.player1.hand[i].rank, ' of ', this.player1.hand[i].suit, ' vs ', this.player2.hand[i].rank, ' of ', this.player2.hand[i].suit);
            
            //finds the rank of the card in the players hand then finds the index of that rank in the original ranks array
            let playedCard1 = this.newDeck.ranks.indexOf(this.player1.hand[i].rank);
            let playedCard2 = this.newDeck.ranks.indexOf(this.player2.hand[i].rank);
            
            if(playedCard1 > playedCard2){
                console.log('   Player 1 won that round. +1 point!')
                this.player1.points += 1;
            } else if (playedCard1 < playedCard2){
                console.log('   Player 2 won that round. +1 point!')
                this.player2.points += 1;
            } else{
                console.log('   It is a tie! No points awarded');
            }
        };

        if(this.player1.points > this.player2.points){
            console.log('Player 1 has won the game with ', this.player1.points, ' points!');
        } else if(this.player1.points < this.player2.points){
            console.log('Player 2 has won the game with ', this.player2.points, ' points!');
        } else{
            console.log('The game has ended in a tie...');
        }
    }
    

 }






let newGame = new Game();
newGame.startGame();







