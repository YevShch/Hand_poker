import { expect, test } from 'vitest';
import Hand from '../classes/Hand.js';
import CompareHands from '../classes/CompareHands.js';

// const suits = '♥♦♣♠';


test( 'Check that hands with a Two Pair receive higher points than weaker hands', () => {
  let higherHand = new Hand( '♣6', '♥6', '♣T', '♦T', '♣8' );
  let lowerHand = new Hand( '♠6', '♦6', '♠T', '♥T', '♣7' );;
  expect( CompareHands.comparer( higherHand, lowerHand ) ).toEqual( higherHand );

} ); 

test( 'Check that hands with a One Pair receive higher points than weaker hands', () => {
  let higherHand = new Hand( '♣6', '♥6', '♣T', '♦A', '♠A' );
  let lowerHand = new Hand( '♦5', '♦6', '♥T', '♥A', '♣A' );
  expect( CompareHands.comparer( higherHand, lowerHand ) ).toEqual( higherHand );

} );

test( 'Check that hands with no combinations assign higher points to the hand with the highest card', () => {
  let higherHand = new Hand( '♣A', '♥6', '♣K', '♦J', '♣8' );
  let lowerHand = new Hand( '♦A', '♦6', '♥K', '♥J', '♣2' );
  expect( CompareHands.comparer( higherHand, lowerHand ) ).toEqual( higherHand );

} );

