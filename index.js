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

// let hand5 = new Hand( '♠A', '♥A', '♦A', '♣A',' ♠K' );
// let hand6 = new Hand('♠5', '♥4', '♦3', '♣2',' ♠A' );
// console.log( CompareHands.comparer( hand5, hand6 ) );


// let hand1 = new Hand( '♠5', '♠4', '♠3', '♠2', '♠A' );
// let hand2 = new Hand( '♠5', '♠4', '♠3', '♠2', '♠6' );

// console.log( CompareHands.comparer( hand1, hand2 ) );


let higherHand = new Hand( '♣7', '♥2', '♣2', '♦A', '♠A' );
let lowerHand = new Hand( '♣5', '♥Q', '♣Q', '♦K', '♠K' );
console.log( CompareHands.comparer( higherHand, lowerHand ) );
