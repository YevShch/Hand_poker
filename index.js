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


// let hand1 = new Hand( '♠5', '♣3', '♥Q', '♠T', '♦A' );
// let hand2 = new Hand( '♠5', '♣4', '♥J', '♠T', '♦A' );

// console.log( CompareHands.comparer( hand1, hand2 ) );


// let higherHand = new Hand( '♣7', '♥Q', '♣A', '♦A', '♠A' );
// let lowerHand = new Hand( '♣5', '♥Q', '♣A', '♦A', '♠A' );
// console.log( CompareHands.comparer( higherHand, lowerHand ) );

// let hand1 = new Hand( '♠5', '♠4', '♠3', '♠2', '♠A' );
// let hand2 = new Hand( '♠5', '♠4', '♠3', '♠2', '♠6' );

// console.log( CompareHands.comparer( hand1, hand2 ) );

// let higherHand = new Hand( '♣A', '♥A', '♣A', '♦A', '♠2' );
// let lowerHand = new Hand( '♣3', '♥3', '♣3', '♦3', '♠A' );
// console.log( CompareHands.comparer( higherHand, lowerHand ) );

// let higherHand1 = new Hand( '♣A', '♥A', '♣A', '♦A', '♠2' );
// let lowerHand1 = new Hand( '♣K', '♥K', '♣K', '♦K', '♠A' );
// console.log( CompareHands.comparer( higherHand1, lowerHand1 ) );

// let higherHand2 = new Hand( '♦8', '♥8', '♠8', '♦J', '♣2' );
// let lowerHand2 = new Hand( '♦8', '♥8', '♠8', '♦T', '♣A' );
// console.log( CompareHands.comparer( higherHand2, lowerHand2 ) )

// let higherHand4 = new Hand( '♣3', '♥K', '♣A', '♦J', '♠J' );
// let lowerHand5 = new Hand( '♣2', '♥K', '♣A', '♦J', '♠J' );
// console.log( CompareHands.comparer( higherHand4, lowerHand5 ) )

// let higherHand1 = new Hand( '♠2', '♠J', '♥J', '♦J', '♣A' );
// let lowerHand1 = new Hand( '♠J', '♥J', '♦J', '♠Q', '♣K' );
// console.log( CompareHands.comparer( higherHand1, lowerHand1 ) );

// let higherHand = new Hand( '♠2', '♣3', '♠A', '♥A', '♦A' ); 
// let lowerHand = new Hand( '♠Q', '♠K', '♥K', '♦K', '♣A' ); 
// console.log( CompareHands.comparer( higherHand, lowerHand ) );


let hand1 = new Hand( '♣A', '♣A', '♣3', '♥2', '♦2' );
let hand2 = new Hand( '♦A', '♦Q', '♥Q', '♥K', '♣K' );
console.log( CompareHands.comparer( hand1, hand2 ) );
