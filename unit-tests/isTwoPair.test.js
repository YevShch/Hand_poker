import { expect, test } from 'vitest';
import Hand from '../classes/Hand.js';
import CompareHands from '../classes/CompareHands.js';

const suits = '♥♦♣♠';

test( 'check that isTwoPair returns truthy if is two pair', () => {
  let hand = new Hand( '♣Q', '♥Q', '♣T', '♦T', '♣8' );
  expect( CompareHands.isTwoPair( hand ) ).toBeTruthy();
} );

test( 'check that isTwoPair returns falsey if not is two pair', () => {
  let hand = new Hand( '♣Q', '♣J', '♥T', '♦T', '♣8' );
  expect( CompareHands.isTwoPair( hand ) ).toBeFalsy();
} );

test( 'check that isTwoPair returns a higher score for a stronger hand (if two hands but with two pair)', () => {
  let hand1 = new Hand( '♣Q', '♥Q', '♣T', '♦T', '♣8' );
  let hand2 = new Hand( '♦T', '♦9', '♣9', '♦J', '♣J' );
  let hand1Score = CompareHands.isTwoPair( hand1 );
  let hand2Score = CompareHands.isTwoPair( hand2 );
  expect( hand1Score ).toBeGreaterThan( hand2Score );
} );
