// import DeckOfCards from './DeckOfCards.js';
import Hand from './classes/Hand.js';
import CompareHands from './classes/CompareHands.js';

// ♥♦♣♠

// let hand1 = new Hand('♥9', '♥T', '♥J', '♥Q', '♥K');
// let hand2 = new Hand('♣9', '♣T', '♣J', '♦Q', '♣K');
// console.log(CompareHands.comparer(hand1, hand2));

// let hand4 = new Hand( '♣Q', '♥K', '♣T', '♦3', '♣8' );
// let hand3 = new Hand( '♦2', '♦9', '♣3', '♦J', '♣7' );
// console.log( CompareHands.comparer( hand3, hand4 ) );

let hand5 = new Hand( '♠K', '♥K', '♦K', '♣K',' ♠9' );
let hand6 = new Hand('♠A', '♥A', '♦A', '♣5',' ♠5' );
console.log( CompareHands.comparer( hand5, hand6 ) );
