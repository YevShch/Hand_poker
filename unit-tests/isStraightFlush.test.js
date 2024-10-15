import { expect, test } from 'vitest';
import Hand from '../classes/Hand.js';
import CompareHands from '../classes/CompareHands.js';

//const suits = '♥♦♣♠';

test( 'check that isStraightFlush returns truthy if Straight Flush', () => {
  let hand = new Hand( '♠5', '♠4', '♠3', '♠2', '♠A' );
    expect( CompareHands.isStraightFlush( hand ) ).toBeTruthy();
} );
  

test( 'check that isStraightFlush returns falsy if not Straight Flush', () => {
  let hand = new Hand( '♣Q', '♣J', '♥T', '♣9', '♣8' );
  expect( CompareHands.isStraightFlush( hand ) ).toBeFalsy();
} );

test( 'check that isFlush returns a higher score for a stronger hand (if two hands but with Straight Flush)', () => {
  let hand1 = new Hand( '♠5', '♠4', '♠3', '♠2', '♠A' );
  let hand2 = new Hand( '♠5', '♠4', '♠3', '♠2', '♠6' );
  let hand1Score = CompareHands.isStraightFlush( hand1 );
  let hand2Score = CompareHands.isStraightFlush( hand2 );
  expect( hand2Score ).toBeGreaterThan( hand1Score );
} );
