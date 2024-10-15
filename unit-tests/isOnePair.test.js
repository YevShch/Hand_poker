import { expect, test } from 'vitest';
import Hand from '../classes/Hand.js';
import CompareHands from '../classes/CompareHands.js';

const suits = '♥♦♣♠';

test( 'check that isOnePair returns truthy if is one pair', () => {
  let hand = new Hand( '♣Q', '♥Q', '♣T', '♣9', '♣8' );
  expect( CompareHands.isOnePair( hand ) ).toBeTruthy();
} );

test( 'check thatisOnePair returns falsey if not is one pair', () => {
  let hand = new Hand( '♣Q', '♣J', '♥T', '♣9', '♣8' );
  expect( CompareHands.isOnePair( hand ) ).toBeFalsy();
} );

test( 'check that isOnePair returns a higher score for a stronger hand (if two hands but with one pair)', () => {
  let hand1 = new Hand( '♣Q', '♥Q', '♣T', '♣9', '♣8' );
  let hand2 = new Hand( '♦T', '♦9', '♣9', '♦7', '♦6' );
  let hand1Score = CompareHands.isOnePair( hand1 );
  let hand2Score = CompareHands.isOnePair( hand2 );
  expect( hand1Score ).toBeGreaterThan( hand2Score );
} );
