import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

test( 'check that isFullHouse returns truthy if is full house', () => {
  let hand = new Hand( '♣Q', '♥Q', '♣T', '♦T', '♣T' );
  expect( CompareHands.isFullHouse( hand ) ).toBeTruthy();
} );

test( 'check that isFullHouse returns falsey if not is full house', () => {
  let hand = new Hand( '♣Q', '♣J', '♥T', '♦T', '♣8' );
  expect( CompareHands.isFullHouse( hand ) ).toBeFalsy();
} );

test( 'check that isFullHouse returns a higher score for a stronger hand (if two hands but with full house)', () => {
  let hand1 = new Hand( '♣Q', '♥Q', '♣T', '♦T', '♣T' );
  let hand2 = new Hand( '♥9', '♦9', '♣9', '♦J', '♣J' );
  let hand1Score = CompareHands.isFullHouse( hand1 );
  let hand2Score = CompareHands.isFullHouse( hand2 );
  expect( hand1Score ).toBeGreaterThan( hand2Score );
} );
