import { expect, test } from 'vitest';
import Hand from '../classes/Hand.js';
import CompareHands from '../classes/CompareHands.js';

// const suits = '♥♦♣♠';

// let comparers = [
//   'isStraightFlush',
//   'isFourOfAKind',
//   'isFullHouse',
//   'isFlush',
//   'isStraight',
//   'isThreeOfAKind',
//   'isTwoPair',
//   'isOnePair',
//   'isHighestCard'
// ];

test( 'check that hand with Straight Flush is highly then a hand with Four of a Kind', () => {
  let handSF = new Hand( '♥Q', '♥K', '♥T', '♥J', '♥9' );
  let handFK = new Hand( '♦A', '♥A', '♠A', '♦J', '♣A' );
    expect( CompareHands.comparer( handSF, handFK ) ).toEqual( handSF );
  
} );

test( 'check that hand with Four of a Kind is highly then a hand with Full House', () => {
  let handFK = new Hand( '♦8', '♥8', '♠8', '♦J', '♣8' );
  let handFH = new Hand( '♣Q', '♥Q', '♥T', '♦T', '♣T' );
  expect( CompareHands.comparer( handFK, handFH ) ).toEqual( handFK );

} );

test( 'check that hand with Full House is highly then a hand with Flush', () => {
  let handFH = new Hand( '♣3', '♥3', '♠T', '♦T', '♣T' );
  let handFlush = new Hand( '♥T', '♦9', '♦5', '♦Q', '♦A' );
  expect( CompareHands.comparer( handFH, handFlush ) ).toEqual( handFH );

} );

test( 'check that hand with Flush is highly then a hand with Straight', () => {
  let handFlush = new Hand( '♦3', '♦9', '♦5', '♦Q', '♦A' );
  let handStraigth = new Hand( '♥A', '♦J', '♣K', '♥Q', '♦T' );
  expect( CompareHands.comparer( handFlush, handStraigth ) ).toEqual( handFlush );

} );

test( 'check that hand with Straight is highly then a hand with Three of a Kind', () => {
  let handTK = new Hand( '♦T', '♦9', '♥9', '♥Q', '♣9' );
  let handStraigth = new Hand( '♥A', '♦J', '♣K', '♠Q', '♠T' );
  expect( CompareHands.comparer( handTK, handStraigth ) ).toEqual( handStraigth );

} );

test( 'check that hand with Three of a Kind is highly then a hand with Two Pair', () => {
  let handTwoPair = new Hand( '♣Q', '♠Q', '♣T', '♦T', '♣8' );
  let handTK = new Hand( '♠T', '♦3', '♥3', '♥Q', '♣3' );
  expect( CompareHands.comparer( handTwoPair, handTK ) ).toEqual( handTK );

} );

test( 'check that hand with Two Pair is highly then a hand with One Pair', () => {
  let handTwoPair = new Hand( '♣6', '♥6', '♣T', '♦T', '♣8' );
  let handOnePair = new Hand( '♠T', '♦3', '♥2', '♥A', '♣A' );
  expect( CompareHands.comparer( handTwoPair, handOnePair ) ).toEqual( handTwoPair );

} );

test( 'check that hand with One Pair is highly then a hand with Highest Card', () => {
  let handHC = new Hand( '♣A', '♥6', '♣K', '♦J', '♣8' );
  let handOnePair = new Hand( '♦T', '♦3', '♥5', '♥2', '♣2' );
  expect( CompareHands.comparer( handHC, handOnePair ) ).toEqual( handOnePair );

} );
