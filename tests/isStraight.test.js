import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

test('check that isStraight returns truthy if straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  expect(CompareHands.isStraight(hand)).toBeTruthy();
} );

test( 'check that isStraight returns falsey if it is not straight', () => {
  let hand = new Hand( '♥9', '♦8', '♣7', '♥5', '♦6' );
  expect( CompareHands.isStraight( hand ) ).toBeTruthy();
} );

test( 'check that isStraight returns a higher score for a stronger hand (if two hands but with Straight )', () => {
  let hand1 = new Hand( '♥A', '♦J', '♣K', '♥Q', '♦T' );
  let hand2 = new Hand( '♣9', '♣8', '♣7', '♣5', '♣6' );
  let hand3 = new Hand( '♦Q', '♦T', '♦9', '♦8', '♦J' );
  let hand1Score = CompareHands.isStraight( hand1 );
  let hand2Score = CompareHands.isStraight( hand2 );
  let hand3Score = CompareHands.isStraight( hand3 );
 
  expect( hand1Score ).toBeGreaterThan( hand2Score );
} );
